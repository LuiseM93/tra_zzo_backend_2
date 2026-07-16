import Link from 'next/link'

export default function Terminos() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen p-8 md:p-16 max-w-4xl mx-auto">
      <Link href="/" className="text-primary hover:underline mb-8 inline-block font-label-caps uppercase">&larr; Volver al inicio</Link>
      <h1 className="font-headline-xl text-headline-xl mb-8">Términos de Servicio</h1>
      <div className="flex flex-col gap-6 text-on-surface-variant font-body-md text-body-md">
        <p>Al utilizar TRAZZO RECIBO, aceptas los siguientes términos de servicio.</p>
        
        <div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-2">1. Uso del Servicio</h2>
          <p>TRAZZO RECIBO proporciona una herramienta para generar recibos profesionales en el navegador. Eres completamente responsable de la exactitud, legalidad y validez fiscal de la información que introduces en los recibos.</p>
        </div>

        <div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-2">2. Versión Pro y Pagos</h2>
          <p>La versión Pro se adquiere mediante un pago único que te otorga acceso a la versión Pro actual mientras exista el servicio (remover marca de agua, personalización). No hay suscripciones mensuales ni cargos ocultos posteriores.</p>
        </div>

        <div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-2">3. Limitación de Responsabilidad</h2>
          <p>TRAZZO RECIBO se proporciona "tal cual". No nos hacemos responsables por pérdidas de datos (ya que los recibos se generan localmente y se pierden si no los exportas o si cierras el navegador accidentalmente). Tampoco somos responsables por el uso indebido o fraudulento de los recibos generados con esta herramienta.</p>
        </div>

        <div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-2">4. Propiedad Intelectual</h2>
          <p>El código, diseño gráfico, marca "TRAZZO" y la infraestructura de la plataforma son propiedad exclusiva de TRAZZO RECIBO.</p>
        </div>
      </div>
    </div>
  )
}
