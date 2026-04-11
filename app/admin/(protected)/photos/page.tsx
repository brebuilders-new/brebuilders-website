// app/admin/(protected)/photos/page.tsx
// Photo approval dashboard for pending crew uploads

'use client'

import { useEffect, useState, useMemo } from 'react'
import { createClient } from '@supabase/supabase-js'
import Image from 'next/image'

interface Photo {
  id: string
  blob_url: string
  title: string
  description: string
  construction_phase: string
  location_description: string
  crew_member: string
  crew_email: string
  date_taken: string
  approval_status: 'pending' | 'approved' | 'rejected'
  project_id: string | null
}

export default function PhotosAdminPage() {
  const supabase = useMemo(
    () => createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ),
    []
  )
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValues, setEditValues] = useState({ title: '', description: '' })

  useEffect(() => {
    fetchPendingPhotos()
  }, [])

  async function fetchPendingPhotos() {
    try {
      setLoading(true)
      const { data, error: queryError } = await supabase
        .from('bre_photos')
        .select('*')
        .eq('approval_status', 'pending')
        .order('created_at', { ascending: false })

      if (queryError) throw queryError
      setPhotos(data || [])
      setError(null)
    } catch (err) {
      console.error('Error fetching photos:', err)
      setError('Failed to load photos')
    } finally {
      setLoading(false)
    }
  }

  async function approvePhoto(photoId: string) {
    try {
      const response = await fetch('/api/photos/approve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ photoId }),
      })

      if (!response.ok) throw new Error('Approval failed')
      setPhotos(photos.filter(p => p.id !== photoId))
    } catch (err) {
      console.error('Error approving photo:', err)
      alert('Failed to approve photo')
    }
  }

  async function rejectPhoto(photoId: string) {
    try {
      const { error: updateError } = await supabase
        .from('bre_photos')
        .update({ approval_status: 'rejected' })
        .eq('id', photoId)

      if (updateError) throw updateError
      setPhotos(photos.filter(p => p.id !== photoId))
    } catch (err) {
      console.error('Error rejecting photo:', err)
      alert('Failed to reject photo')
    }
  }

  async function updatePhotoMetadata(photoId: string) {
    try {
      const { error: updateError } = await supabase
        .from('bre_photos')
        .update({
          title: editValues.title,
          description: editValues.description,
          title_is_custom: true,
        })
        .eq('id', photoId)

      if (updateError) throw updateError

      setPhotos(photos.map(p => 
        p.id === photoId 
          ? { ...p, title: editValues.title, description: editValues.description }
          : p
      ))
      setEditingId(null)
      setEditValues({ title: '', description: '' })
    } catch (err) {
      console.error('Error updating photo:', err)
      alert('Failed to update photo')
    }
  }

  if (loading) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Photo Approvals</h1>
        <div className="text-center py-12">
          <p className="text-stone-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Photo Approvals</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-800">{error}</p>
          <button
            onClick={fetchPendingPhotos}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Photo Approvals</h1>
        <p className="text-stone-600">
          {photos.length} pending {photos.length === 1 ? 'photo' : 'photos'}
        </p>
      </div>

      {photos.length === 0 ? (
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-12 text-center">
          <p className="text-stone-600">No pending photos. All caught up!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {photos.map(photo => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isEditing={editingId === photo.id}
              editValues={editValues}
              onEdit={() => {
                setEditingId(photo.id)
                setEditValues({ title: photo.title, description: photo.description })
              }}
              onSave={() => updatePhotoMetadata(photo.id)}
              onCancel={() => setEditingId(null)}
              onEditChange={(field, value) =>
                setEditValues({ ...editValues, [field]: value })
              }
              onApprove={() => approvePhoto(photo.id)}
              onReject={() => rejectPhoto(photo.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

interface PhotoCardProps {
  photo: Photo
  isEditing: boolean
  editValues: { title: string; description: string }
  onEdit: () => void
  onSave: () => void
  onCancel: () => void
  onEditChange: (field: string, value: string) => void
  onApprove: () => void
  onReject: () => void
}

function PhotoCard({
  photo,
  isEditing,
  editValues,
  onEdit,
  onSave,
  onCancel,
  onEditChange,
  onApprove,
  onReject,
}: PhotoCardProps) {
  return (
    <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="relative w-full bg-stone-200 rounded" style={{ paddingBottom: '100%' }}>
          <Image
            src={photo.blob_url}
            alt={photo.title}
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={75}
          />
        </div>

        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <label className="block text-xs font-bold text-stone-700 mb-1">Title</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editValues.title}
                  onChange={(e) => onEditChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 rounded text-sm"
                  placeholder="Photo title"
                />
              ) : (
                <p className="text-sm font-semibold text-stone-900">{photo.title}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-xs font-bold text-stone-700 mb-1">Description</label>
              {isEditing ? (
                <textarea
                  value={editValues.description}
                  onChange={(e) => onEditChange('description', e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 rounded text-sm"
                  placeholder="Photo description"
                  rows={3}
                />
              ) : (
                <p className="text-sm text-stone-600 line-clamp-2">{photo.description}</p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                {photo.construction_phase}
              </span>
              <span className="text-xs bg-stone-100 text-stone-700 px-2 py-1 rounded">
                {photo.location_description}
              </span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                {photo.crew_member}
              </span>
            </div>

            <div className="text-xs text-stone-500 space-y-1">
              <p><strong>Email:</strong> {photo.crew_email}</p>
              <p><strong>Date:</strong> {new Date(photo.date_taken).toLocaleDateString()}</p>
              {photo.project_id && <p><strong>Project ID:</strong> {photo.project_id}</p>}
            </div>
          </div>

          <div className="flex gap-2 mt-6 pt-4 border-t border-stone-200">
            {isEditing ? (
              <>
                <button
                  onClick={onSave}
                  className="flex-1 px-3 py-2 bg-green-600 text-white rounded text-sm font-bold hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={onCancel}
                  className="flex-1 px-3 py-2 bg-stone-300 text-stone-700 rounded text-sm font-bold hover:bg-stone-400"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={onEdit}
                  className="flex-1 px-3 py-2 bg-stone-200 text-stone-700 rounded text-sm font-bold hover:bg-stone-300"
                >
                  Edit
                </button>
                <button
                  onClick={onApprove}
                  className="flex-1 px-3 py-2 bg-green-600 text-white rounded text-sm font-bold hover:bg-green-700"
                >
                  ✓ Approve
                </button>
                <button
                  onClick={onReject}
                  className="flex-1 px-3 py-2 bg-red-600 text-white rounded text-sm font-bold hover:bg-red-700"
                >
                  ✗ Reject
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
