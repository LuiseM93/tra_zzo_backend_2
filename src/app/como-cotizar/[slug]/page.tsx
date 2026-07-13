import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { oficios } from '@/lib/data/oficios'
import { tareas } from '@/lib/data/tareas'
import Link from 'next/link'
import ProUpsellSection from '@/components/ProUpsellSection'

export async function generateStaticParams() {
  return tareas.map((tarea) => ({
    slug: tarea.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const tarea = tareas.find((t) => t.slug === slug)
  
  if (!tarea) {
    return {
      title: 'Tarea no encontrada'
    }
  }
  
  const title = tarea.title
  const description = tarea.description
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    }
  }
}

export default async function TareaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tarea = tareas.find((t) => t.slug === slug)
  
  if (!tarea) {
    notFound()
  }

  const oficio = oficios.find(o => o.id === tarea.oficioId)

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet" />
      <div className="bg-background text-on-background font-body-md text-body-md min-h-screen flex flex-col">
        <nav className="bg-surface flex justify-between items-center px-margin-desktop py-4 w-full sticky top-0 z-50 border-b border-outline-variant">
            <Link href="/" className="font-headline-lg text-headline-lg text-primary tracking-tighter">TRAZZO RECIBO</Link>
            <div className="hidden md:flex items-center gap-gutter">
                {oficio && (
                  <Link href={`/cotizador-para/${oficio.slug}`} className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors">
                    IR AL COTIZADOR
                  </Link>
                )}
            </div>
            <Link href="/auth">
              <button className="bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest h-12 px-gutter rounded hover:bg-primary-container transition-colors">
                  Entrar
              </button>
            </Link>
        </nav>

        <main className="flex-grow w-full max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop flex flex-col gap-margin-desktop">
            <header className="flex flex-col gap-2 border-b border-outline-variant pb-8">
                <div className="font-label-caps text-label-caps text-primary uppercase tracking-widest flex items-center gap-2">
                  <Link href={`/cotizador-para/${oficio?.slug}`} className="hover:underline">
                    {oficio?.name}
                  </Link>
                  <span>/</span>
                  <span>{tarea.name}</span>
                </div>
                <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-background mt-2">
                    {tarea.title}
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-4 text-lg">
                    {tarea.description}
                </p>
            </header>

            <section className="bg-surface-container-low border border-outline-variant rounded-xl p-8 shadow-sm">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Datos de Referencia</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Rango de Precio Promedio</span>
                    <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-background">{tarea.priceRange}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Tiempo Estimado</span>
                    <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-background">{tarea.estimatedTime}</span>
                  </div>
                </div>
            </section>

            <section>
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-6">Tips para Cobrar este Trabajo</h2>
              <ul className="flex flex-col gap-4">
                {tarea.tips.map((tip, idx) => (
                  <li key={idx} className="flex gap-4 items-start bg-surface p-6 border border-outline-variant rounded-lg">
                    <span className="material-symbols-outlined text-primary mt-1" data-icon="lightbulb">lightbulb</span>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{tip}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Pro Upsell después del último tip */}
            <ProUpsellSection context="tarea" />

            {/* CTA: Hacer tu primer recibo */}
            <section className="mt-8 bg-primary-container text-on-primary-container p-8 rounded-xl text-center">
              <h3 className="font-headline-lg text-headline-lg mb-2">¿Listo para hacer tu primer recibo?</h3>
              <p className="mb-6 opacity-90">Tarda 30 segundos. Sin registro. PDF listo para WhatsApp.</p>
              <Link href={`/cotizador-para/${oficio?.slug}`}>
                <button className="bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest h-14 px-8 rounded hover:opacity-90 transition-opacity">
                  CREAR MI RECIBO GRATIS
                </button>
              </Link>
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
