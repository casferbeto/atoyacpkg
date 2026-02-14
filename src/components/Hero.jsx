import backImg from '../assets/images/backofboxes.webp'
import useScrollReveal from '../hooks/useScrollReveal'
import logoImg from '../assets/images/logo_atoyac_sinfondo.webp'

export default function Hero() {
    const ref = useScrollReveal()

    return (
        <section
            id="hero"
            className="tesla-section pt-32 pb-16 isolate" // Added isolate to fix stacking context issue
            ref={ref}
        >
            {/* Background image specifically for this section */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <img
                    src={backImg}
                    alt="Background texture"
                    className="w-full h-full object-cover object-center opacity-40"
                />
                {/* Bottom gradient for seamless section transition */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
            </div>

            {/* Header Content */}
            <div className="tesla-header-text reveal reveal-up flex flex-col items-center mb-16">
                <img
                    src={logoImg}
                    alt="Atoyac PKG Logo"
                    className="h-72 md:h-96 mb-12 animate-float drop-shadow-xl"
                />
                <h1 className="text-[20px] md:text-[28px] font-500 tracking-[-0.6px] text-[#171a20] leading-tight whitespace-nowrap">
                    Soluciones en Cajas de Cartón Corrugado para la Industria
                </h1>
            </div>

            {/* CTAs at Bottom */}
            <div className="tesla-cta-container reveal reveal-up mt-8" style={{ animationDelay: '0.3s' }}>
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
