'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')
  const [showPassword, setShowPassword] = useState(false)
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }
    
    router.push('/')
    router.refresh()
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        }
      }
    })
    
    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }
    
    router.push('/')
    router.refresh()
  }

  return (
    <main className="min-h-screen flex w-full">
      {/* Left Side: Form Area */}
      <section className="w-full lg:w-[45%] flex flex-col justify-center px-4 md:px-16 py-16 relative bg-[var(--color-background)] z-10 border-r border-[var(--color-outline-variant)]">
        <div className="w-full max-w-[420px] mx-auto">
          {/* Brand Header */}
          <header className="mb-16">
            <h1 className="font-['Hanken_Grotesk'] text-[48px] leading-[56px] tracking-[-0.02em] text-[var(--color-primary)] font-black uppercase">
              TRAZZORECIBO
            </h1>
          </header>

          {/* Tabs */}
          <nav className="flex gap-8 mb-12 border-b border-[var(--color-outline-variant)]">
            <button
              onClick={() => { setActiveTab('login'); setError(null) }}
              className={`pb-4 font-['JetBrains_Mono'] text-[12px] uppercase tracking-wider transition-all duration-300 border-b-2 ${
                activeTab === 'login'
                  ? 'text-[var(--color-primary)] border-[var(--color-primary)]'
                  : 'text-[var(--color-on-surface-variant)] border-transparent hover:text-[var(--color-primary)]'
              }`}
            >
              Entrar
            </button>
            <button
              onClick={() => { setActiveTab('register'); setError(null) }}
              className={`pb-4 font-['JetBrains_Mono'] text-[12px] uppercase tracking-wider transition-all duration-300 border-b-2 ${
                activeTab === 'register'
                  ? 'text-[var(--color-primary)] border-[var(--color-primary)]'
                  : 'text-[var(--color-on-surface-variant)] border-transparent hover:text-[var(--color-primary)]'
              }`}
            >
              Registrarse
            </button>
          </nav>

          {error && (
            <div className="mb-6 p-4 bg-[var(--color-error-container)] text-[var(--color-on-error-container)] text-sm">
              {error}
            </div>
          )}

          {/* Forms Container */}
          <div className="relative">
            {/* Login Form */}
            <form
              onSubmit={handleLogin}
              className={`flex flex-col gap-8 transition-opacity duration-300 ${
                activeTab === 'login' ? 'opacity-100 z-10 relative' : 'opacity-0 z-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="login-email"
                  className="font-['JetBrains_Mono'] text-[12px] text-[var(--color-on-surface-variant)] uppercase"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="login-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-0 border-b-2 border-[var(--color-outline-variant)] bg-transparent px-0 py-2 font-['Inter'] text-[16px] text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)] focus:ring-0 focus:border-[var(--color-primary)] transition-colors rounded-none outline-none"
                  placeholder="nombre@ejemplo.com"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="login-password"
                  className="font-['JetBrains_Mono'] text-[12px] text-[var(--color-on-surface-variant)] uppercase"
                >
                  Contraseña
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="login-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full border-0 border-b-2 border-[var(--color-outline-variant)] bg-transparent px-0 py-2 font-['Inter'] text-[16px] text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)] focus:ring-0 focus:border-[var(--color-primary)] transition-colors rounded-none outline-none pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors p-2 flex items-center justify-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full bg-[var(--color-primary)] text-[var(--color-on-primary)] font-['JetBrains_Mono'] text-[12px] py-5 uppercase tracking-[0.1em] hover:opacity-90 active:scale-[0.99] transition-all rounded-none border-2 border-[var(--color-primary)]"
              >
                {loading ? 'Cargando...' : 'Entrar a TRAZZO'}
              </button>
            </form>

            {/* Register Form */}
            <form
              onSubmit={handleRegister}
              className={`flex flex-col gap-8 transition-opacity duration-300 ${
                activeTab === 'register' ? 'opacity-100 z-10 relative' : 'opacity-0 z-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-1/2">
                  <label
                    htmlFor="reg-firstname"
                    className="font-['JetBrains_Mono'] text-[12px] text-[var(--color-on-surface-variant)] uppercase"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="reg-firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full border-0 border-b-2 border-[var(--color-outline-variant)] bg-transparent px-0 py-2 font-['Inter'] text-[16px] text-[var(--color-on-surface)] focus:ring-0 focus:border-[var(--color-primary)] transition-colors rounded-none outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <label
                    htmlFor="reg-lastname"
                    className="font-['JetBrains_Mono'] text-[12px] text-[var(--color-on-surface-variant)] uppercase"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="reg-lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full border-0 border-b-2 border-[var(--color-outline-variant)] bg-transparent px-0 py-2 font-['Inter'] text-[16px] text-[var(--color-on-surface)] focus:ring-0 focus:border-[var(--color-primary)] transition-colors rounded-none outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="reg-email"
                  className="font-['JetBrains_Mono'] text-[12px] text-[var(--color-on-surface-variant)] uppercase"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="reg-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-0 border-b-2 border-[var(--color-outline-variant)] bg-transparent px-0 py-2 font-['Inter'] text-[16px] text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)] focus:ring-0 focus:border-[var(--color-primary)] transition-colors rounded-none outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="reg-password"
                  className="font-['JetBrains_Mono'] text-[12px] text-[var(--color-on-surface-variant)] uppercase"
                >
                  Crear Contraseña
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="reg-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full border-0 border-b-2 border-[var(--color-outline-variant)] bg-transparent px-0 py-2 font-['Inter'] text-[16px] text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)] focus:ring-0 focus:border-[var(--color-primary)] transition-colors rounded-none outline-none pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors p-2 flex items-center justify-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p className="font-['Inter'] text-[14px] text-[var(--color-on-surface-variant)] mt-1">
                  Mínimo 8 caracteres, números y símbolos.
                </p>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full bg-[var(--color-primary)] text-[var(--color-on-primary)] font-['JetBrains_Mono'] text-[12px] py-5 uppercase tracking-[0.1em] hover:opacity-90 active:scale-[0.99] transition-all rounded-none border-2 border-[var(--color-primary)]"
              >
                {loading ? 'Cargando...' : 'Crear Cuenta'}
              </button>
              <p className="font-['Inter'] text-[14px] text-[var(--color-on-surface-variant)] text-center mt-2">
                Al registrarte, aceptas nuestros{' '}
                <a
                  href="#"
                  className="text-[var(--color-primary)] underline decoration-[var(--color-outline)] hover:decoration-[var(--color-primary)] underline-offset-2"
                >
                  Términos
                </a>{' '}
                y{' '}
                <a
                  href="#"
                  className="text-[var(--color-primary)] underline decoration-[var(--color-outline)] hover:decoration-[var(--color-primary)] underline-offset-2"
                >
                  Privacidad
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Right Side: Architectural / Minimalist Visual Canvas */}
      <section className="hidden lg:block lg:w-[55%] relative bg-[var(--color-surface-container-low)] overflow-hidden">
        {/* Decorative minimal grid lines */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        ></div>
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full relative grayscale contrast-125 mix-blend-multiply opacity-80">
             <Image src="/assets/login.png" alt="Login Background" fill className="object-cover" />
          </div>
        </div>
        {/* Overlay element for depth */}
        <div className="absolute bottom-16 left-16 bg-[var(--color-surface)] p-8 max-w-sm border border-[var(--color-outline-variant)] shadow-sm z-10 backdrop-blur-sm bg-opacity-90">
          <p className="font-['Hanken_Grotesk'] text-[24px] text-[var(--color-primary)] font-bold mb-2">
            Diseño y Precisión.
          </p>
          <p className="font-['Inter'] text-[16px] text-[var(--color-on-surface-variant)]">
            La plataforma definitiva para profesionales de la estructura y la forma.
          </p>
        </div>
      </section>
    </main>
  )
}
