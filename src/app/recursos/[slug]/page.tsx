import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { recursos } from '@/lib/data/recursos'
import Link from 'next/link'
import ProUpsellSection from '@/components/ProUpsellSection'
import { ExitIntentPopup } from '@/components/ExitIntentPopup'

export async function generateStaticParams() {
  return recursos.map((recurso) => ({
    slug: recurso.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const recurso = recursos.find((r) => r.slug === slug)
  
  if (!recurso) {
    return {
      title: 'Recurso no encontrado'
    }
  }
  
  return {
    title: recurso.title,
    description: recurso.description,
    openGraph: {
      title: recurso.title,
      description: recurso.description,
    }
  }
}

export default async function RecursoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const recurso = recursos.find((r) => r.slug === slug)
  
  if (!recurso) {
    notFound()
  }

  // Helper para asignar color según categoría
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'GUÍA MAESTRA': return 'bg-secondary-container text-on-secondary-container'
      case 'CASO DE ÉXITO': return 'bg-tertiary-container text-on-tertiary-container'
      case 'ANTIMÉTODO': return 'bg-error-container text-on-error-container'
      default: return 'bg-surface-variant text-on-surface-variant'
    }
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet" />
      <div className="bg-background text-on-background font-body-md text-body-md min-h-screen flex flex-col">
        <nav className="bg-surface flex justify-between items-center px-margin-desktop py-4 w-full sticky top-0 z-50 border-b border-outline-variant">
            <Link href="/" className="font-headline-lg text-headline-lg text-primary tracking-tighter">TRAZZO RECIBO</Link>
            <div className="hidden md:flex items-center gap-gutter">
                <Link href="/" className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors">
                  IR AL COTIZADOR
                </Link>
            </div>
            <Link href="/auth">
              <button className="bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest h-12 px-gutter rounded hover:bg-primary-container transition-colors">
                  Entrar
              </button>
            </Link>
        </nav>

        <main className="flex-grow w-full max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop flex flex-col gap-margin-desktop">
            <article>
              <header className="flex flex-col gap-4 border-b border-outline-variant pb-8 mb-8">
                  <div className="flex items-center gap-2">
                    <span className={`font-label-caps text-label-caps px-3 py-1 rounded-full ${getCategoryColor(recurso.category)}`}>
                      {recurso.category}
                    </span>
                  </div>
                  <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-background">
                      {recurso.title}
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant text-lg">
                      {recurso.description}
                  </p>
              </header>

              {/* El contenido HTML (en una app real se recomienda usar algo como next-mdx-remote o sanitize-html) */}
              <div 
                className="prose prose-neutral max-w-none text-on-background
                           prose-headings:font-headline-lg prose-headings:text-primary 
                           prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-2xl
                           prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-xl
                           prose-p:mb-4 prose-p:leading-relaxed prose-p:text-on-surface-variant
                           prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
                           prose-li:mb-2 prose-li:text-on-surface-variant"
                dangerouslySetInnerHTML={{ __html: recurso.content }}
              />
            </article>

            <section className="mt-12 text-center bg-surface-container-low border border-outline-variant p-8 rounded-xl">
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4 text-primary">Mejora la imagen de tu negocio hoy</h3>
              <p className="mb-6 text-on-surface-variant">Usa nuestro generador de recibos para aplicar lo aprendido y cerrar más ventas.</p>
              <Link href="/">
                <button className="bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest h-14 px-8 rounded hover:opacity-90 transition-opacity shadow-sm">
                    CREAR MI PRIMER RECIBO
                </button>
              </Link>
            </section>

            {/* Pro Upsell para usuarios gratis */}
            <ProUpsellSection context="recurso" />

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
