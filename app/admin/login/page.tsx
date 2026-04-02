'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        router.push('/admin')
        router.refresh()
      } else {
        setError('Incorrect password')
      }
    } catch {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#141210' }}>
      <div style={{ width: '100%', maxWidth: '360px', padding: '0 24px' }}>
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '3px', color: '#c07d3e', textTransform: 'uppercase', margin: '0 0 8px' }}>BRE Builders</p>
          <h1 style={{ fontSize: '24px', fontWeight: 400, color: '#e8e4dc', margin: 0 }}>Admin Dashboard</h1>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              padding: '14px 16px',
              fontSize: '15px',
              color: '#e8e4dc',
              outline: 'none',
              width: '100%',
              boxSizing: 'border-box' as const,
            }}
          />
          {error && <p style={{ fontSize: '13px', color: '#f87171', margin: 0 }}>{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            style={{
              background: loading || !password ? 'rgba(255,255,255,0.05)' : '#c07d3e',
              color: loading || !password ? 'rgba(232,228,220,0.3)' : '#141210',
              border: 'none',
              borderRadius: '12px',
              padding: '14px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'monospace',
              cursor: loading || !password ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {loading ? 'Signing in...' : 'Sign In →'}
          </button>
        </form>
      </div>
    </div>
  )
}
