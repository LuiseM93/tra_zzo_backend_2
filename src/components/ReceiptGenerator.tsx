'use client'

import { useState, useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import ProUpsellSection from './ProUpsellSection'

type Item = {
  id: string
  description: string
  quantity: number
  price: number
}

export default function ReceiptGenerator({ isPro }: { isPro: boolean }) {
  const receiptRef = useRef<HTMLDivElement>(null)

  // Form State
  const [logo, setLogo] = useState<string | null>(null)
  const [businessName, setBusinessName] = useState('')
  const [businessPhone, setBusinessPhone] = useState('')
  const [businessEmail, setBusinessEmail] = useState('')
  const [businessAddress, setBusinessAddress] = useState('')
  
  const [clientName, setClientName] = useState('')
  const [items, setItems] = useState<Item[]>([{ id: '1', description: '', quantity: 1, price: 0 }])
  const [notes, setNotes] = useState('')

  // Suppress hydration warning for date
  const [currentDate, setCurrentDate] = useState('')
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('es-ES'))
  }, [])

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 5000)
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isPro) return
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogo(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const addItem = () => {
    setItems([...items, { id: Math.random().toString(), description: '', quantity: 1, price: 0 }])
  }

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id))
    }
  }

  const updateItem = (id: string, field: keyof Item, value: string | number) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item))
  }

  const total = items.reduce((acc, item) => acc + (item.quantity * item.price), 0)

  // Export Functions
  const generateCanvas = async () => {
    if (!receiptRef.current) return null
    return await html2canvas(receiptRef.current, { scale: 2, useCORS: true, backgroundColor: '#ffffff' })
  }

  const handleExportImage = async () => {
    const canvas = await generateCanvas()
    if (!canvas) return
    const link = document.createElement('a')
    link.download = `recibo-${clientName || 'cliente'}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  const handleExportPDF = async () => {
    const canvas = await generateCanvas()
    if (!canvas) return
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height]
    })
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)
    pdf.save(`recibo-${clientName || 'cliente'}.pdf`)
  }

  const handleWhatsApp = async () => {
    const canvas = await generateCanvas()
    if (!canvas) return

    const shareText = 'Aquí tienes tu recibo generado con Trazzo'
    const fileName = `recibo-${clientName || 'cliente'}.png`

    // Convertir canvas a Blob
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'))
    if (!blob) return

    const file = new File([blob], fileName, { type: 'image/png' })

    // Móvil: usar Web Share API con archivo adjunto
    if (
      typeof navigator !== 'undefined' &&
      navigator.canShare &&
      navigator.canShare({ files: [file] })
    ) {
      try {
        await navigator.share({
          files: [file],
          text: shareText,
        })
        return
      } catch (err) {
        // Usuario canceló — no hacer nada
        if ((err as Error).name !== 'AbortError') {
          console.error('Web Share error:', err)
        }
        return
      }
    }

    // Fallback para PC / navegadores sin soporte:
    // 1. Descargar la imagen automáticamente
    const link = document.createElement('a')
    link.download = fileName
    link.href = canvas.toDataURL('image/png')
    link.click()

    // 2. Abrir WhatsApp con texto precargado
    const waUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`
    window.open(waUrl, '_blank')

    // 3. Mostrar toast informativo
    showToast('Imagen descargada. Se abrirá WhatsApp, solo adjunta la imagen desde tus descargas.')
  }

  return (
    <div className="flex flex-col lg:flex-row gap-margin-desktop items-start">
        
        {/* Left Column: Formulario */}
        <section className="w-full lg:w-7/12 flex flex-col gap-gutter">
            <div className="bg-surface-container-low border border-outline-variant p-margin-mobile md:p-gutter rounded-xl flex flex-col gap-gutter">
                <h2 className="font-headline-lg text-headline-lg text-primary border-b border-outline-variant pb-2">
                    Datos del Recibo
                </h2>

                {isPro && (
                  <div className="flex flex-col gap-gutter mt-4 pb-4 border-b border-outline-variant">
                      <div className="flex flex-col gap-2">
                          <label className="font-label-caps text-label-caps uppercase text-on-background">Logotipo del Negocio</label>
                          <label className="h-24 border-2 border-dashed border-outline-variant rounded-lg flex items-center justify-center bg-surface cursor-pointer hover:bg-surface-container transition-colors">
                              <input type="file" accept="image/png, image/jpeg" className="hidden" onChange={handleLogoUpload} />
                              <div className="flex flex-col items-center gap-1 text-on-surface-variant">
                                  <span className="material-symbols-outlined">upload_file</span>
                                  <span className="text-body-sm">Subir logo (PNG, JPG)</span>
                              </div>
                          </label>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-2">
                              <label className="font-label-caps text-label-caps uppercase text-on-background" htmlFor="negocio">Nombre del Negocio</label>
                              <input 
                                type="text" id="negocio" 
                                value={businessName} onChange={(e) => setBusinessName(e.target.value)}
                                className="h-12 bg-surface border-0 border-b-2 border-outline focus:border-primary focus:ring-0 px-4 font-body-md text-body-md text-on-background w-full transition-colors rounded-t" 
                                placeholder="Tu Empresa S.A." 
                              />
                          </div>
                          <div className="flex flex-col gap-2">
                              <label className="font-label-caps text-label-caps uppercase text-on-background" htmlFor="telefono">Teléfono</label>
                              <input 
                                type="text" id="telefono" 
                                value={businessPhone} onChange={(e) => setBusinessPhone(e.target.value)}
                                className="h-12 bg-surface border-0 border-b-2 border-outline focus:border-primary focus:ring-0 px-4 font-body-md text-body-md text-on-background w-full transition-colors rounded-t" 
                                placeholder="+52 ..." 
                              />
                          </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-2">
                              <label className="font-label-caps text-label-caps uppercase text-on-background" htmlFor="email">Email</label>
                              <input 
                                type="email" id="email" 
                                value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)}
                                className="h-12 bg-surface border-0 border-b-2 border-outline focus:border-primary focus:ring-0 px-4 font-body-md text-body-md text-on-background w-full transition-colors rounded-t" 
                                placeholder="contacto@empresa.com" 
                              />
                          </div>
                          <div className="flex flex-col gap-2">
                              <label className="font-label-caps text-label-caps uppercase text-on-background" htmlFor="direccion">Dirección</label>
                              <input 
                                type="text" id="direccion" 
                                value={businessAddress} onChange={(e) => setBusinessAddress(e.target.value)}
                                className="h-12 bg-surface border-0 border-b-2 border-outline focus:border-primary focus:ring-0 px-4 font-body-md text-body-md text-on-background w-full transition-colors rounded-t" 
                                placeholder="Calle, Ciudad, CP" 
                              />
                          </div>
                      </div>
                  </div>
                )}

                {/* Input: Cliente */}
                <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps uppercase text-on-background" htmlFor="cliente">Nombre del Cliente</label>
                    <input 
                      type="text" id="cliente" 
                      value={clientName} onChange={(e) => setClientName(e.target.value)}
                      className="h-12 bg-surface border-0 border-b-2 border-outline focus:border-primary focus:ring-0 px-4 font-body-md text-body-md text-on-background w-full transition-colors rounded-t outline-none" 
                      placeholder="Ej. Juan Pérez" 
                    />
                </div>

                {/* Dynamic List: Conceptos */}
                <div className="flex flex-col gap-4 mt-2">
                    <div className="flex justify-between items-end">
                        <label className="font-label-caps text-label-caps uppercase text-on-background">Conceptos / Servicios</label>
                    </div>
                    
                    {items.map((item) => (
                      <div key={item.id} className="flex flex-col md:flex-row gap-4 bg-surface p-4 rounded-lg border border-outline-variant">
                          <div className="flex-grow">
                              <input 
                                type="text" 
                                value={item.description} onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                                className="h-12 bg-surface-container border-0 border-b-2 border-outline focus:border-primary focus:ring-0 px-4 w-full rounded-t outline-none" 
                                placeholder="Descripción del servicio" 
                              />
                          </div>
                          <div className="flex gap-4 w-full md:w-auto">
                              <input 
                                type="number" 
                                value={item.quantity} onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                                className="h-12 bg-surface-container border-0 border-b-2 border-outline focus:border-primary focus:ring-0 px-4 w-24 rounded-t outline-none" 
                                placeholder="Cant." min="1" 
                              />
                              <input 
                                type="number" 
                                value={item.price} onChange={(e) => updateItem(item.id, 'price', parseFloat(e.target.value) || 0)}
                                className="h-12 bg-surface-container border-0 border-b-2 border-outline focus:border-primary focus:ring-0 px-4 w-32 rounded-t outline-none" 
                                placeholder="Precio ($)" min="0" step="0.01" 
                              />
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="h-12 w-12 flex items-center justify-center text-error hover:bg-error-container rounded transition-colors flex-shrink-0" title="Eliminar">
                                  <span className="material-symbols-outlined" data-icon="delete">delete</span>
                              </button>
                          </div>
                      </div>
                    ))}

                    {/* Add Button */}
                    <button 
                      onClick={addItem}
                      className="h-12 w-full border-2 border-primary text-primary font-label-caps text-label-caps uppercase rounded flex items-center justify-center gap-2 hover:bg-surface-container transition-colors mt-2">
                        <span className="material-symbols-outlined" data-icon="add">add</span>
                        Agregar concepto
                    </button>
                </div>

                {/* Input: Notas */}
                <div className="flex flex-col gap-2 mt-2">
                    <label className="font-label-caps text-label-caps uppercase text-on-background" htmlFor="notas">Notas Adicionales</label>
                    <textarea 
                      id="notas" rows={3} 
                      value={notes} onChange={(e) => setNotes(e.target.value)}
                      className="bg-surface border-0 border-b-2 border-outline focus:border-primary focus:ring-0 p-4 font-body-md text-body-md text-on-background w-full resize-none transition-colors rounded-t outline-none" 
                      placeholder="Garantía, condiciones de pago, etc."></textarea>
                </div>
            </div>

            {/* Toast notification */}
            {toast && (
              <div
                role="alert"
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-on-background text-background font-body-sm text-body-sm px-5 py-3 rounded-xl shadow-lg max-w-xs text-center"
              >
                {toast}
              </div>
            )}

            {/* Action Buttons Area */}
            <div className="flex flex-col md:flex-row gap-4 flex-wrap bg-surface py-4 border-t border-outline-variant sticky bottom-0 z-40 lg:static">
                <button 
                  onClick={handleWhatsApp}
                  className="flex-grow md:flex-grow-0 h-12 px-gutter bg-primary text-on-primary font-label-caps text-label-caps uppercase rounded flex items-center justify-center gap-2 shadow-sm hover:bg-primary-container transition-colors">
                    <span className="material-symbols-outlined" data-icon="send" data-weight="fill">send</span>
                    Compartir por WhatsApp
                </button>
                <button 
                  onClick={handleExportPDF}
                  className="flex-grow md:flex-grow-0 h-12 px-4 border-2 border-primary text-primary font-label-caps text-label-caps uppercase rounded flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined" data-icon="download">download</span>
                    PDF
                </button>
                <button 
                  onClick={handleExportImage}
                  className="flex-grow md:flex-grow-0 h-12 px-4 border-2 border-primary text-primary font-label-caps text-label-caps uppercase rounded flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined" data-icon="image">image</span>
                    Imagen
                </button>
            </div>

            {/* Pro Upsell (solo usuarios gratis) */}
            {!isPro && <ProUpsellSection context="oficio" />}
        </section>

        {/* Right Column: Sticky Preview */}
        <aside className="w-full lg:w-5/12 lg:sticky top-[100px]">
            <div 
              ref={receiptRef}
              className="bg-surface-container-lowest border-2 border-dashed border-outline p-8 rounded-xl flex flex-col gap-8 shadow-sm relative"
            >
                {/* Receipt Header */}
                {isPro ? (
                  <div className="text-center border-b border-outline-variant pb-4">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-surface-container rounded flex items-center justify-center text-outline-variant overflow-hidden relative">
                            {logo ? (
                                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                            ) : (
                                <span className="material-symbols-outlined">business</span>
                            )}
                        </div>
                        <div className="text-center">
                            <h3 className="font-headline-lg text-headline-lg text-on-background uppercase tracking-widest">{businessName || 'Tu Empresa S.A.'}</h3>
                            <div className="flex flex-col gap-1 mt-2 font-body-sm text-body-sm text-on-surface-variant">
                                <p>Tel: {businessPhone || '+52 ...'} | Email: {businessEmail || 'contacto@empresa.com'}</p>
                                <p>{businessAddress || 'Calle, Ciudad, CP'}</p>
                            </div>
                        </div>
                        <div className="w-full border-t border-outline-variant pt-4 mt-2">
                            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Recibo</p>
                            <p className="font-label-caps text-label-caps text-on-surface-variant">Nº 0001 - <span id="currentDate" suppressHydrationWarning>{currentDate}</span></p>
                        </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center border-b border-outline-variant pb-4">
                      <h3 className="font-headline-lg text-headline-lg text-on-background uppercase tracking-widest">Recibo</h3>
                      <p className="font-label-caps text-label-caps text-on-surface-variant mt-2">Nº 0001 - <span id="currentDate" suppressHydrationWarning>{currentDate}</span></p>
                  </div>
                )}

                {/* Receipt Customer*/}
                <div className="font-body-md text-body-md text-on-background">
                    <span className="font-label-caps text-label-caps font-bold">Cliente:</span> {clientName || 'Juan Pérez'}
                </div>

                {/* Receipt Items */}
                <div className="flex flex-col gap-2 border-b border-outline-variant pb-4">
                    <div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant uppercase">
                        <span className="">Descripción</span>
                        <span className="">Total</span>
                    </div>
                    
                    {items.length > 0 && items[0].description !== '' ? (
                      items.map(item => (
                        <div key={item.id} className="flex justify-between font-body-md text-body-md text-on-background">
                            <span className="">{item.quantity}x {item.description}</span>
                            <span className="">${(item.quantity * item.price).toFixed(2)}</span>
                        </div>
                      ))
                    ) : (
                      <div className="flex justify-between font-body-md text-body-md text-on-background">
                          <span className="">1x Reparación de Tubería principal</span>
                          <span className="">$150.00</span>
                      </div>
                    )}
                </div>

                {/* Receipt Notes */}
                {notes && (
                    <div className="font-body-sm text-body-sm text-on-surface-variant pb-2 border-b border-outline-variant">
                        <span className="font-label-caps text-label-caps font-bold uppercase block mb-1">Notas:</span>
                        <p className="whitespace-pre-wrap">{notes}</p>
                    </div>
                )}

                {/* Receipt Total */}
                <div className="flex justify-between items-center pt-2">
                    <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface-variant">Total a pagar</span>
                    <span className="font-headline-lg text-headline-lg text-primary">
                      ${items.length > 0 && items[0].description !== '' ? total.toFixed(2) : '150.00'}
                    </span>
                </div>

                {/* Watermark (Exact free HTML) */}
                {!isPro && (
                  <div className="mt-8 text-center">
                      <span className="font-body-sm text-body-sm text-outline italic">Generado con trazzoapp.online</span>
                  </div>
                )}
            </div>
        </aside>
    </div>
  )
}