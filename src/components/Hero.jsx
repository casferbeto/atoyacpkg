import plantaImg from '../assets/images/planta_industrial.png'
import useScrollReveal from '../hooks/useScrollReveal'
import logoImg from '../assets/images/logo_atoyac_sinfondo.png'

export default function Hero() {
    const ref = useScrollReveal()

    return (
        <section
            id="hero"
            className="tesla-section pt-32 pb-16" // Increased top padding for logo space
            ref={ref}
        >
            {/* Background image with light overlay */}
            <div className="absolute inset-0 -z-10">
                <img
                    src={plantaImg}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/60" />
            </div>

            {/* Header Content */}
            <div className="tesla-header-text reveal reveal-up flex flex-col items-center">
                <img
                    src={logoImg}
                    alt="Atoyac PKG Logo"
                    className="h-24 md:h-32 mb-8 animate-float drop-shadow-lg"
                />
                <h1 className="text-[40px] md:text-[56px] font-500 tracking-[-1.2px] text-[#171a20] leading-tight mb-2">
                    Soluciones en Cartón Corrugado
                </h1>
                <p className="text-sm md:text-base font-400 text-[#393c41] tracking-tight">
                    Sectores Industriales de Alta Exigencia
                </p>
            </div>

            {/* CTAs at Bottom */}
            <div className="tesla-cta-container reveal reveal-up" style={{ animationDelay: '0.3s' }}>
                <a
                    href="#cotizacion"
                    className="btn-tesla-primary w-full sm:w-auto shadow-sm"
                >
                    Solicitar Cotización
                </a>
                <a
                    href="#nosotros"
                    className="btn-tesla-secondary w-full sm:w-auto shadow-sm"
                >
                    Conocer más
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                <svg className="w-6 h-6 text-[#171a20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    )
}
