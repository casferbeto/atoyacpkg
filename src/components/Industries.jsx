import logisticaImg from '../assets/images/logistica_pallets.png'
import useScrollReveal from '../hooks/useScrollReveal'

const sectors = [
    {
        name: 'Agrícola',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
        ),
    },
    {
        name: 'Automotriz',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.78a1.5 1.5 0 01-.36-2.09l3.78-5.1a1.5 1.5 0 012.09-.36l5.1 3.78a1.5 1.5 0 01.36 2.09l-3.78 5.1a1.5 1.5 0 01-2.09.36z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 17.25l-1.5 1.5" />
            </svg>
        ),
    },
    {
        name: 'Textil',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
        ),
    },
    {
        name: 'Industrial',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
            </svg>
        ),
    },
    {
        name: 'Alimenticio',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
        ),
    },
    {
        name: 'Especializado',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
        ),
    },
]

export default function Industries() {
    const ref = useScrollReveal()

    return (
        <section
            id="sectores"
            className="tesla-section"
            ref={ref}
        >
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <img
                    src={logisticaImg}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/70" />
            </div>

            {/* Header */}
            <div className="tesla-header-text reveal reveal-up">
                <h2 className="text-[40px] md:text-[48px] font-500 tracking-[-0.6px] text-[#171a20] mb-2">
                    Sectores Estratégicos
                </h2>
                <p className="text-sm md:text-base font-400 text-[#393c41]">
                    Soluciones a medida para cada industria
                </p>
            </div>

            {/* Content (Icons Grid) */}
            <div className="tesla-content">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-2xl px-6">
                    {sectors.map((sector, index) => (
                        <div
                            key={index}
                            className={`reveal reveal-up stagger-${index + 1} flex flex-col items-center gap-4 group cursor-default`}
                        >
                            <div className="text-[#171a20] group-hover:scale-110 transition-transform duration-300">
                                {sector.icon}
                            </div>
                            <span className="text-sm font-500 text-[#393c41] tracking-tight">
                                {sector.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTAs */}
            <div className="tesla-cta-container reveal reveal-up" style={{ animationDelay: '0.4s' }}>
                <a
                    href="#proceso"
                    className="btn-tesla-secondary w-full sm:w-auto"
                >
                    Ver Proceso
                </a>
            </div>
        </section>
    )
}
