'use client'

import { useState, useEffect } from 'react'

export function ExitIntentPopup() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Solo desktop: detectar intención de salida
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !show && !submitted && !localStorage.getItem('exit-intent-shown')) {
        setShow(true)
        localStorage.setItem('exit-intent-shown', 'true')
      }
    }

    // Mobile: scroll up detection
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (lastScrollY - currentScrollY > 100 && currentScrollY < 200 && !show && !submitted && !localStorage.getItem('exit-intent-shown')) {
        setShow(true)
        localStorage.setItem('exit-intent-shown', 'true')
      }
      lastScrollY = currentScrollY
    }

    // Solo en páginas SEO (como-cotizar, cotizador-para, recursos)
    const isSeoPage = window.location.pathname.includes('/como-cotizar/') || 
                      window.location.pathname.includes('/cotizador-para/') || 
                      window.location.pathname.includes('/recursos/')

    if (isSeoPage) {
      document.addEventListener('mouseleave', handleMouseLeave)
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [show, submitted])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || submitting) return
    
    setSubmitting(true)
    try {
      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: '', source: 'exit_intent' })
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        setShow(false)
      }
    } catch (err) {
      console.error('Exit intent capture failed:', err)
    } finally {
      setSubmitting(false)
    }
  }

  if (!show || submitted) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(27, 27, 30, 0.7)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}
      onClick={() => setShow(false)}
    >
      <div
        style={{
          background: '#fbf8fc',
          border: '1px solid #e4e1e6',
          maxWidth: '480px',
          width: '100%',
          padding: '32px',
          boxSizing: 'border-box',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: '#7e7576',
            fontSize: '24px',
            lineHeight: 1
          }}
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Content */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#1b1b1e',
            margin: '0 0 16px'
          }}>
            Antes de irte...
          </p>

          <h2 style={{
            fontFamily: 'Hanken Grotesk, Inter, sans-serif',
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '32px',
            color: '#1b1b1e',
            margin: '0 0 16px',
            letterSpacing: '-0.01em'
          }}>
            ¿Cansado de que te regateen el precio?
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: '24px',
            color: '#4c4546',
            margin: '0 0 24px'
          }}>
            Descarga GRATIS el checklist que usan los técnicos que cobran más:
          </p>

          <div style={{
            background: '#f0edf1',
            border: '1px solid #e4e1e6',
            padding: '24px',
            margin: '0 0 24px',
            textAlign: 'left'
          }}>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: '#1b1b1e',
              margin: '0 0 12px'
            }}>
              Checklist: 10 errores que te hacen perder dinero al cotizar
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 2, fontSize: '14px', color: '#1b1b1e' }}>
              <li>No desglosar materiales vs mano de obra</li>
              <li>Dar una sola opción (sin Básico/Estándar/Premium)</li>
              <li>No poner fecha de validez al presupuesto</li>
              <li>Enviar cotización por WhatsApp sin formato</li>
              <li>No hacer seguimiento a las 24h</li>
              <li>Recibos con marca "Generado gratis"</li>
              <li>No ofrecer garantía por escrito</li>
              <li>Cobrar por hora en vez de por resultado</li>
              <li>No tener plantilla de condiciones de pago</li>
              <li>Improvisar en vez de usar sistema</li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
              <label
                htmlFor="exit-email"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#1b1b1e'
                }}
              >
                Tu email
              </label>
              <input
                id="exit-email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                required
                autoComplete="email"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#1b1b1e',
                  background: '#ffffff',
                  border: 'none',
                  borderBottom: '2px solid #e4e1e6',
                  padding: '12px 0',
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={submitting || !email}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                background: '#000000',
                color: '#ffffff',
                padding: '16px 32px',
                borderRadius: 0,
                border: '1px solid #000000',
                cursor: submitting || !email ? 'not-allowed' : 'pointer',
                opacity: submitting || !email ? 0.5 : 1,
                transition: 'opacity 0.2s',
                width: '100%'
              }}
            >
              {submitting ? 'Enviando...' : 'Descargar gratis'}
            </button>

            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              lineHeight: '16px',
              color: '#7e7576',
              textAlign: 'center',
              margin: '8px 0 0'
            }}>
              Sin spam. Tips reales semanales. Cancela cuando quieras.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}