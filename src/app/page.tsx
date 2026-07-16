'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import ReceiptGenerator from '@/components/ReceiptGenerator'

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const [isPro, setIsPro] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        setUser(session.user)
        const { data: profile } = await supabase
          .from('profiles')
          .select('plan')
          .eq('id', session.user.id)
          .single()
        
        setIsPro(profile?.plan === 'pro')
      }
    }
    fetchSession()
  }, [supabase.auth])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setIsPro(false)
    router.refresh()
  }

  const handleUpgrade = async () => {
    if (!user) {
      router.push('/auth')
      return
    }
    const res = await fetch('/api/checkout', { method: 'POST' })
    const { url } = await res.json()
    if (url) window.location.href = url
  }
  
  // Custom Accordion for FAQ to strictly match HTML classes
  const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [open, setOpen] = useState(false)
    return (
      <div className="bg-surface-container-low border border-outline-variant rounded-lg p-6">
          <h4 
            className="font-headline-lg-mobile text-headline-lg-mobile text-on-background flex justify-between items-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
              {question}
              <span className="material-symbols-outlined" data-icon="expand_more">expand_more</span>
          </h4>
          {open && (
            <p className="font-body-md text-body-md text-on-surface-variant mt-4">{answer}</p>
          )}
      </div>
    )
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet" />
      <div className="bg-background text-on-background font-body-md text-body-md min-h-screen flex flex-col">
        {/* TopNavBar */}
        <nav className="bg-surface flex justify-between items-center px-margin-desktop py-4 w-full sticky top-0 z-50 border-b border-outline-variant">
            <div className="font-headline-lg text-headline-lg text-primary tracking-tighter">TRAZZO RECIBO</div>
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-gutter">
                <a href="#" className="font-label-caps text-label-caps uppercase text-primary border-b-2 border-primary pb-1 opacity-80 transition-all duration-150">Generador</a>
                <a href="#pro" className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors">Version pro</a>
                <a href="#faq" className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors">PREGUNTAS</a>
            </div>

            {user ? (
              <div className="flex items-center gap-4">
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant hidden md:block">
                  {isPro ? 'PRO' : 'FREE'} PLAN
                </span>
                <button 
                  onClick={handleLogout}
                  className="bg-surface-container-low text-primary font-label-caps text-label-caps uppercase tracking-widest h-12 px-gutter rounded hover:bg-surface-container transition-colors border border-outline-variant"
                >
                    Salir
                </button>
              </div>
            ) : (
              <Link href="/auth">
                <button className="bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest h-12 px-gutter rounded hover:bg-primary-container transition-colors">
                    Entrar
                </button>
              </Link>
            )}
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop flex flex-col gap-margin-desktop">
            
            {/* Hero Header */}
            <header className="flex flex-col gap-2 mb-gutter">
                <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-background">
                    Genera recibos profesionales en segundos
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-4">
                    Crea, previsualiza y envía recibos por WhatsApp directamente desde el campo de trabajo. Rápido, sin complicaciones.
                </p>
            </header>

            {/* Receipt Generator Component */}
            <ReceiptGenerator isPro={isPro} />

            {/* Pro Promotion Section (Exact HTML structure) */}
            {!isPro && (
              <section id="pro" className="mt-margin-desktop bg-surface-container-low border-2 border-primary rounded-xl p-margin-desktop flex items-center justify-between gap-gutter shadow-sm relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-margin-desktop items-center w-full">
                  <div className="flex flex-col gap-4">
                      <div className="overflow-hidden rounded-lg border border-outline-variant shadow-sm">
                          <img src="/assets/comparacion_antes_despues.png" alt="Comparación Versión Gratuita vs. Versión Pro" className="w-full h-auto block" />
                      </div>
                      <p className="text-center font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">Versión Gratuita vs. Versión Pro</p>
                  </div>
                  <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                          <h3 className="font-headline-lg text-headline-lg text-on-background flex items-center gap-2">
                              <span className="material-symbols-outlined text-on-background" data-icon="star" data-weight="fill">star</span>
                              Versión Pro
                          </h3>
                          <div className="flex items-baseline gap-2">
                                                        <span className="text-headline-xl font-bold text-primary">$99 MXN</span>
                                                        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Pago único · Mientras exista el servicio</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="font-body-md text-body-md text-on-background font-bold">Eleva tu imagen profesional eliminando marcas de agua y personalizando cada detalle.</p>
                                                    <p className="font-body-sm text-body-sm text-on-surface-variant">Sin suscripciones mensuales. Paga una vez, accede mientras el servicio exista.</p>
                      </div>
                      <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-background">
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span> Quitar marca de agua</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span> Agregar tu propio logotipo</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span> Personalizar nombre de empresa y dirección</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span> Personalizar teléfono y email de contacto</li>
                      </ul>
                      <button 
                        onClick={handleUpgrade}
                        className="w-full h-14 px-8 bg-primary text-on-primary font-label-caps text-label-caps uppercase rounded-lg hover:bg-primary-container transition-all shadow-sm flex items-center justify-center gap-2 transform hover:scale-105">
                          <span className="material-symbols-outlined" data-icon="bolt">bolt</span>
                          Obtener Versión Pro
                      </button>
                  </div>
                </div>
              </section>
            )}

            {/* FAQ Section */}
            <section id="faq" className="mt-margin-desktop mb-margin-desktop max-w-3xl">
                <h2 className="font-headline-lg text-headline-lg text-on-background mb-gutter">Preguntas Frecuentes</h2>
                
                <div className="flex flex-col gap-4">
                    <FAQItem 
                      question="¿Es gratis?" 
                      answer="Sí, la versión básica con marca de agua es totalmente gratuita y puedes generar recibos ilimitados."
                    />
                    <FAQItem 
                      question="¿Guardan mis datos?" 
                      answer="No. Los recibos se generan en tu dispositivo (navegador). No almacenamos la información de tus clientes ni los conceptos en nuestros servidores."
                    />
                    <FAQItem 
                      question="¿Cómo lo envío por WhatsApp?" 
                      answer="Una vez generado el recibo, haz clic en el botón 'Compartir por WhatsApp' para enviarlo directamente a tu cliente."
                    />
                    <FAQItem 
                      question="¿El pago de la versión PRO es mensual?" 
                      answer="No, es un único pago de $99 MXN · Mientras exista el servicio. Sin suscripciones ni cargos ocultos."
                    />
                </div>
            </section>
        </main>

        <footer className="bg-surface border-t border-outline-variant px-margin-mobile md:px-margin-desktop py-8 w-full mt-margin-desktop">
            <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <div className="font-headline-lg text-headline-lg text-primary tracking-tighter">TRAZZO RECIBO</div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">© {new Date().getFullYear()} TRAZZO RECIBO. All rights reserved.</p>
                </div>
                <div className="flex gap-gutter">
                    <Link href="/privacidad" className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors">Privacidad</Link>
                    <Link href="/terminos" className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors">Términos</Link>
                </div>
            </div>
        </footer>
      </div>
    </>
  )
}
