import maquinariaImg from '../assets/images/maquinaria_corrugado.webp'
import useScrollReveal from '../hooks/useScrollReveal'

const steps = [
    {
        number: '01',
        title: 'Análisis de Requerimiento',
        description: 'Evaluamos las necesidades específicas de empaque de tu producto.',
    },
    {
        number: '02',
        title: 'Diseño Estructural',
        description: 'Desarrollamos la estructura óptima de cartón corrugado.',
    },
    {
        number: '03',
        title: 'Desarrollo de Prototipo',
        description: 'Fabricamos muestras físicas para validación y pruebas.',
    },
    {
        number: '04',
        title: 'Producción',
        description: 'Producción en serie con controles de calidad rigurosos.',
    },
    {
        number: '05',
        title: 'Entrega y Logística',
        description: 'Distribución puntual directamente a tu planta o almacén.',
    },
]

export default function Process() {
    const ref = useScrollReveal()

    return (
        <section
            id="proceso"
            className="tesla-section bg-white"
            ref={ref}
        >
            {/* Background (Subtle Machinery) */}
            <div className="absolute inset-0 -z-10">
                <img
                    src={maquinariaImg}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/90" />
            </div>

            {/* Header */}
            <div className="tesla-header-text reveal reveal-up mb-12">
                <h2 className="text-[40px] md:text-[48px] font-500 tracking-[-0.6px] text-[#171a20] mb-3">
                    Proceso de Trabajo
                </h2>
                <p className="text-base md:text-lg font-400 text-[#393c41]">
                    De la idea a la entrega final en planta
                </p>
            </div>

            {/* Content (Clean Timeline) */}
            <div className="tesla-content w-full flex justify-center py-8">
                <div className="flex flex-col md:flex-row gap-8 md:gap-4 w-full max-w-6xl px-6 justify-between">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`reveal reveal-up stagger-${index + 1} flex-1 flex flex-col items-center text-center gap-4 group`}
                        >
                            <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-lg font-600 text-[#171a20] bg-white group-hover:border-atoyac-blue group-hover:text-atoyac-blue transition-colors duration-300 shadow-sm">
                                {step.number}
                            </div>
                            <h3 className="text-base font-600 text-[#171a20] tracking-tight">
                                {step.title}
                            </h3>
                            <p className="text-sm text-[#393c41] leading-relaxed max-w-[200px] text-balance">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTAs */}
            <div className="tesla-cta-container reveal reveal-up mt-8" style={{ animationDelay: '0.4s' }}>
                <a
                    href="#cotizacion"
                    className="btn-tesla-primary w-full sm:w-auto shadow-sm"
                >
                    Iniciar Proyecto
                </a>
            </div>
        </section>
    )
}
