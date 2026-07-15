import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { oficios } from '@/lib/data/oficios'
import ReceiptGenerator from '@/components/ReceiptGenerator'
import Link from 'next/link'
import ProUpsellSection from '@/components/ProUpsellSection'
import { ExitIntentPopup } from '@/components/ExitIntentPopup'

export async function generateStaticParams() {
  return oficios.map((oficio) => ({
    slug: oficio.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const oficio = oficios.find((o) => o.slug === slug)
  
  if (!oficio) {
    return {
      title: 'Oficio no encontrado'
    }
  }
  
  const title = oficio.title
  const description = oficio.description
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      // Usaremos la imagen por defecto o se puede personalizar luego
    }
  }
}

export default async function OficioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const oficio = oficios.find((o) => o.slug === slug)
  
  if (!oficio) {
    notFound()
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet" />
      <div className="bg-background text-on-background font-body-md text-body-md min-h-screen flex flex-col">
        {/* TopNavBar Simplificado para la landing (se podría abstraer) */}
        <nav className="bg-surface flex justify-between items-center px-margin-desktop py-4 w-full sticky top-0 z-50 border-b border-outline-variant">
            <Link href="/" className="font-headline-lg text-headline-lg text-primary tracking-tighter">TRAZZO RECIBO</Link>
            
            <div className="hidden md:flex items-center gap-gutter">
                <a href="#faq" className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors">PREGUNTAS</a>
            </div>

            <Link href="/auth">
              <button className="bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest h-12 px-gutter rounded hover:bg-primary-container transition-colors">
                  Entrar
              </button>
            </Link>
        </nav>

        <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop flex flex-col gap-margin-desktop">
            
            <header className="flex flex-col gap-2 mb-gutter">
                <div className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
                  Herramienta para {oficio.name}
                </div>
                <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-background">
                    {oficio.title}
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-4">
                    {oficio.description}
                </p>
            </header>

            {/* Generador de Recibos */}
            <ReceiptGenerator isPro={false} />

            {/* Pro Upsell para usuarios gratis */}
            <ProUpsellSection context="oficio" />

            {/* Información Específica del Oficio */}
            <section className="mt-margin-desktop bg-surface-container-low border border-outline-variant rounded-xl p-margin-desktop shadow-sm">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-gutter border-b border-outline-variant pb-4">
                  Cómo Cotizar Trabajos de {oficio.name}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-gutter mt-8">
                  <div>
                    <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">calculate</span>
                      Modelos de Cobro Comunes
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {oficio.pricingModels.map((model, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-on-surface-variant">
                          <span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                          {model}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">inventory_2</span>
                      Materiales Frecuentes
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {oficio.commonMaterials.map((material, idx) => (
                        <span key={idx} className="bg-surface px-3 py-1 rounded-full border border-outline-variant text-sm text-on-surface-variant">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
            </section>

            {/* FAQ Específico del Oficio */}
            <section id="faq" className="mt-margin-desktop max-w-3xl">
                <h2 className="font-headline-lg text-headline-lg text-on-background mb-gutter">Preguntas Frecuentes sobre Cotizaciones</h2>
                
                <div className="flex flex-col gap-4">
                    {oficio.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-surface-container-low border border-outline-variant rounded-lg p-6">
                          <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-4">
                              {faq.question}
                          </h4>
                          <p className="font-body-md text-body-md text-on-surface-variant">{faq.answer}</p>
                      </div>
                    ))}
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
    
        <ExitIntentPopup />
      </>
  )
}