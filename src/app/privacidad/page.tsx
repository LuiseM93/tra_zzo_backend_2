import Link from 'next/link'

export default function Privacidad() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen p-8 md:p-16 max-w-4xl mx-auto">
      <Link href="/" className="text-primary hover:underline mb-8 inline-block font-label-caps uppercase">&larr; Volver al inicio</Link>
      <h1 className="font-headline-xl text-headline-xl mb-8">Política de Privacidad</h1>
      <div className="flex flex-col gap-6 text-on-surface-variant font-body-md text-body-md">
        <p>En TRAZZO RECIBO, nos tomamos muy en serio tu privacidad. Esta política describe cómo manejamos tus datos y se alinea con nuestros principios fundamentales de privacidad local.</p>
        
        <div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-2">1. Recopilación de Datos (Local)</h2>
          <p>No almacenamos los datos de tus clientes, conceptos, precios ni detalles de los recibos en nuestros servidores. Toda la información introducida en el generador de recibos se procesa localmente en tu dispositivo.</p>
        </div>

        <div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-2">2. Captura de Leads y Emails de Nurture (Solo Técnicos)</h2>
          <p>Cuando usas la opción &ldquo;Enviar por email&rdquo; y marcas &ldquo;Enviarme tips para cobrar mejor&rdquo;, almacenamos TU email (el del técnico) en Supabase &uacute;nicamente para enviarte la secuencia automatizada de 7 emails educativos (durante 21 d&iacute;as) sobre c&oacute;mo cobrar mejor. El email del cliente SOLO se usa para entregarle el PDF del recibo; NO se guarda, NO se le env&iacute;an emails de marketing, NO entra en ninguna secuencia. Cada email incluye enlace de desuscripci&oacute;n autom&aacute;tico (List-Unsubscribe). Puedes darte de baja en cualquier momento haciendo clic en &ldquo;Cancelar suscripci&oacute;n&rdquo; en el pie de cualquier email.</p>
        </div>

        <div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-2">3. Autenticación y Cuentas</h2>
          <p>Para gestionar tu plan (Free o Pro), utilizamos Supabase para la autenticación. Solo almacenamos tu dirección de correo electrónico, ID de usuario y el estado de tu plan (perfil básico). No vendemos ni compartimos esta información.</p>
        </div>

        <div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-2">4. Pagos (Stripe)</h2>
          <p>Los pagos son procesados de forma segura por Stripe. No almacenamos tu información financiera, datos de facturación ni números de tarjeta de crédito en nuestros servidores en ningún momento.</p>
        </div>

        <div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-2">5. Cambios a esta Política</h2>
          <p>Podemos actualizar nuestra Política de Privacidad periódicamente. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página.</p>
        </div>
      </div>
    </div>
  )
}
