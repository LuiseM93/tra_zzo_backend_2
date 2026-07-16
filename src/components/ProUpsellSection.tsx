import Link from 'next/link'

export default function ProUpsellSection({ context }: { context?: 'oficio' | 'tarea' | 'recurso' }) {
  const contextMessages = {
      oficio: {
        title: 'Hazlo profesional: recibo con tu logo y sin marca de agua',
        description: 'Trazzo Recibo Pro agrega tu logotipo y elimina la marca de agua. Pago único · Mientras exista el servicio.',
      },
      tarea: {
        title: 'Entrega recibos que proyecten confianza',
        description: 'Con Pro, tu recibo lleva el logo de tu negocio y llega sin marca de agua. Solo $99 MXN · Mientras exista el servicio.',
      },
      recurso: {
        title: 'Aplica lo aprendido con recibos profesionales',
        description: 'Trazzo Pro agrega tu logo y elimina la marca de agua. Pago único · Mientras exista el servicio.',
      }
    }

  const msg = context ? contextMessages[context] : contextMessages.oficio

  return (
    <section className="mt-margin-desktop bg-surface-container-low border border-outline-variant rounded-xl p-margin-desktop shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-gutter">
        <div className="flex-grow">
          <h3 className="font-headline-lg text-headline-lg text-primary mb-2">
            {msg.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {msg.description}
          </p>
        </div>
        <Link href="/auth">
          <button className="h-12 px-gutter bg-primary text-on-primary font-label-caps text-label-caps uppercase rounded flex items-center justify-center gap-2 hover:bg-primary-container transition-colors whitespace-nowrap">
            <span className="material-symbols-outlined" data-icon="workspace_premium">workspace_premium</span>
            Obtener Versión Pro
          </button>
        </Link>
      </div>
    </section>
  )
}
