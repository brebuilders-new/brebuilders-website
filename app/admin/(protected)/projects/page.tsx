// app/admin/(protected)/projects/page.tsx
// Project management dashboard

'use client'

import { useEffect, useState, useMemo } from 'react'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

export default function ProjectsAdminPage() {
  const supabase = useMemo(
    () => createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ),
    []
  )

  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    project_slug: '',
    project_name: '',
    location: '',
    service_type: '',
    status: 'active',
  })
  const [filterRegion, setFilterRegion] = useState<string>('all')

  useEffect(() => {
    fetchProjects()
  }, [])

  async function fetchProjects() {
    try {
      setLoading(true)
      const { data, error: queryError } = await supabase
        .from('bre_projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (queryError) throw queryError
      setProjects(data || [])
      setError(null)
    } catch (err) {
      console.error('Error fetching projects:', err)
      setError('Failed to load projects')
    } finally {
      setLoading(false)
    }
  }

  async function createProject(e: React.FormEvent) {
    e.preventDefault()
    try {
      const { error: insertError } = await supabase
        .from('bre_projects')
        .insert([formData])

      if (insertError) throw insertError

      setFormData({ project_slug: '', project_name: '', location: '', service_type: '', status: 'active' })
      setShowForm(false)
      await fetchProjects()
    } catch (err) {
      console.error('Error creating project:', err)
      alert('Failed to create project')
    }
  }

  async function deleteProject(id: string) {
    if (!confirm('Delete this project? This cannot be undone.')) return

    try {
      const { error: deleteError } = await supabase
        .from('bre_projects')
        .delete()
        .eq('id', id)

      if (deleteError) throw deleteError
      await fetchProjects()
    } catch (err) {
      console.error('Error deleting project:', err)
      alert('Failed to delete project')
    }
  }

  if (loading) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div className="text-center py-12">
          <p className="text-stone-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Get unique regions for filter
  const regions = Array.from(new Set(projects.map(p => p.location).filter(Boolean))).sort()
  
  // Filter projects by region
  const filteredProjects = filterRegion === 'all' 
    ? projects 
    : projects.filter(p => p.location === filterRegion)

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Projects</h1>
            <p className="text-stone-600">
              {filteredProjects.length} of {projects.length} {projects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold"
          >
            {showForm ? 'Cancel' : '+ New Project'}
          </button>
        </div>
        
        {/* Region Filter */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setFilterRegion('all')}
            className={`px-3 py-1.5 rounded-lg text-sm font-bold transition ${
              filterRegion === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
            }`}
          >
            All Regions ({projects.length})
          </button>
          {regions.map(region => {
            const count = projects.filter(p => p.location === region).length
            return (
              <button
                key={region}
                onClick={() => setFilterRegion(region)}
                className={`px-3 py-1.5 rounded-lg text-sm font-bold transition ${
                  filterRegion === region
                    ? 'bg-blue-600 text-white'
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                {region} ({count})
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-between mb-8" style={{display: 'none'}}>
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-stone-600">
            {filteredProjects.length} of {projects.length} {projects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>
      </div>

      {/* Create Form */}
      {showForm && (
        <div className="bg-white border border-stone-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Create New Project</h2>
          <form onSubmit={createProject} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Project slug (e.g., kitchen-remodel-reno)"
                value={formData.project_slug}
                onChange={(e) => setFormData({ ...formData, project_slug: e.target.value })}
                required
                className="px-3 py-2 border border-stone-300 rounded-lg text-sm"
              />
              <input
                type="text"
                placeholder="Project name"
                value={formData.project_name}
                onChange={(e) => setFormData({ ...formData, project_name: e.target.value })}
                required
                className="px-3 py-2 border border-stone-300 rounded-lg text-sm"
              />
              <input
                type="text"
                placeholder="Location (e.g., Reno, NV)"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="px-3 py-2 border border-stone-300 rounded-lg text-sm"
              />
              <input
                type="text"
                placeholder="Service type (e.g., Kitchen & Bath)"
                value={formData.service_type}
                onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                className="px-3 py-2 border border-stone-300 rounded-lg text-sm"
              />
            </div>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm"
            >
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="on-hold">On Hold</option>
            </select>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold"
            >
              Create Project
            </button>
          </form>
        </div>
      )}

      {/* Projects List */}
      {error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-800">{error}</p>
          <button
            onClick={fetchProjects}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-12 text-center">
          <p className="text-stone-600 mb-4">{filterRegion === 'all' ? 'No projects yet.' : `No projects in ${filterRegion}.`}</p>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Create First Project
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white border border-stone-200 rounded-lg p-4 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-stone-900 mb-1">{project.project_name}</h3>
                  <div className="space-y-1 text-sm text-stone-600">
                    {project.location && <p>📍 {project.location}</p>}
                    {project.service_type && <p>🔨 {project.service_type}</p>}
                    <p className="font-mono text-xs text-stone-500">slug: {project.project_slug}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 ml-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold text-center whitespace-nowrap ${
                    project.status === 'active' ? 'bg-green-100 text-green-800' :
                    project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                  <Link
                    href={`/admin/projects/${project.id}`}
                    className="px-2 py-1 bg-stone-100 text-stone-700 rounded text-xs font-bold hover:bg-stone-200 text-center"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold hover:bg-red-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
