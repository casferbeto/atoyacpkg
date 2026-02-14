import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const industries = [
    'Agrícola',
    'Automotriz',
    'Textil',
    'Industrial',
    'Alimenticio',
    'Especializado',
    'Otro',
]

export default function QuoteForm() {
    const ref = useScrollReveal()
    const [formData, setFormData] = useState({
        empresa: '',
        nombre: '',
        cargo: '',
        telefono: '',
        email: '',
        industria: '',
        tipoCaja: '',
        volumen: '',
        especificaciones: '',
        comentarios: '',
    })
    const [status, setStatus] = useState('idle')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const response = await fetch('https://n8n.srv1208074.hstgr.cloud/webhook/d90a44fd-5971-4b30-9333-0fac1bc47f62', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setStatus('success')
                setFormData({
                    empresa: '', nombre: '', cargo: '', telefono: '', email: '',
                    industria: '', tipoCaja: '', volumen: '', especificaciones: '', comentarios: '',
                })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    const inputClass = 'w-full px-6 py-5 bg-[#f4f4f4] rounded-[4px] text-[#171a20] placeholder-[#393c41]/50 border-none transition-all duration-300 text-lg focus:ring-2 focus:ring-[#3e6ae1]/20'
    const labelClass = 'block text-sm font-600 text-[#393c41] mb-2 uppercase tracking-wider'

    return (
        <section
            id="cotizacion"
            className="tesla-section bg-white"
            ref={ref}
        >
            {/* Header */}
            <div className="tesla-header-text reveal reveal-up mb-12">
                <h2 className="text-[40px] md:text-[48px] font-500 tracking-[-0.6px] text-[#171a20] mb-3">
                    Solicitar Cotización
                </h2>
                <p className="text-base md:text-lg font-400 text-[#393c41]">
                    Un especialista te contactará en menos de 24 horas
                </p>
            </div>

            {status === 'success' ? (
                <div className="tesla-content reveal reveal-scale w-full flex justify-center">
                    <div className="bg-[#f4f4f4] rounded-lg p-16 text-center space-y-6 max-w-2xl w-full">
                        <h3 className="text-2xl font-600 text-[#171a20]">¡Solicitud Enviada!</h3>
                        <p className="text-base text-[#393c41]">
                            Un especialista se pondrá en contacto a la brevedad.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="btn-tesla-secondary mx-auto"
                        >
                            Enviar otra
                        </button>
                    </div>
                </div>
            ) : (
                <div className="tesla-content w-full flex justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className="reveal reveal-up grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-6"
                    >
                        <div className="space-y-6">
                            <div>
                                <label className={labelClass}>Empresa *</label>
                                <input type="text" name="empresa" required value={formData.empresa} onChange={handleChange} placeholder="Nombre de tu empresa" className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Nombre *</label>
                                <input type="text" name="nombre" required value={formData.nombre} onChange={handleChange} placeholder="Nombre completo" className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Cargo</label>
                                <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} placeholder="Puesto / Cargo" className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Industria *</label>
                                <select name="industria" required value={formData.industria} onChange={handleChange} className={inputClass}>
                                    <option value="">Seleccionar industria</option>
                                    {industries.map((ind) => (
                                        <option key={ind} value={ind}>{ind}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className={labelClass}>Teléfono *</label>
                                <input type="tel" name="telefono" required value={formData.telefono} onChange={handleChange} placeholder="Teléfono" className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Email *</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email" className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Tipo de Caja</label>
                                <input type="text" name="tipoCaja" value={formData.tipoCaja} onChange={handleChange} placeholder="Regular, Suajada, Agrícola..." className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Volumen Estimado</label>
                                <input type="text" name="volumen" value={formData.volumen} onChange={handleChange} placeholder="Piezas/mes" className={inputClass} />
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label className={labelClass}>Comentarios</label>
                            <textarea name="comentarios" rows={2} value={formData.comentarios} onChange={handleChange} placeholder="Especificaciones adicionales" className={inputClass + ' resize-none'} />
                        </div>

                        {status === 'error' && (
                            <div className="md:col-span-2 bg-red-50 text-red-600 text-xs p-3 rounded">
                                Error al enviar. Por favor intente de nuevo.
                            </div>
                        )}

                        <div className="md:col-span-2 pt-4">
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="btn-tesla-primary w-full"
                            >
                                {status === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </section>
    )
}
