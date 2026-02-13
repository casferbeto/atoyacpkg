import useScrollReveal from '../hooks/useScrollReveal'

const commitments = [
    {
        title: 'Tiempos de Entrega',
        description: 'Cumplimiento puntual en cada orden, respaldado por procesos logísticos eficientes.',
        icon: (
            <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Calidad del Cartón',
        description: 'Materia prima certificada con pruebas de laboratorio en cada lote.',
        icon: (
            <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        title: 'Resistencias Ofrecidas',
        description: 'Cumplimiento estricto de resistencias ECT y BCT comprometidas.',
        icon: (
            <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
        ),
    },
    {
        title: 'Atención al Cliente',
        description: 'Acompañamiento personalizado desde el diseño hasta la entrega final.',
        icon: (
            <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
    },
]

export default function Commitment() {
    const ref = useScrollReveal()

    return (
        <section
            id="compromiso"
            className="tesla-section bg-[#171a20]"
            ref={ref}
        >
            {/* Header */}
            <div className="tesla-header-text reveal reveal-up">
                <h2 className="text-[40px] md:text-[48px] font-500 tracking-[-0.6px] text-white mb-2">
                    Nuestro Compromiso
                </h2>
                <p className="text-sm md:text-base font-400 text-white/70">
                    Garantía en cada entrega y en cada fibra
                </p>
            </div>

            {/* Content (Simplified Commitments) */}
            <div className="tesla-content">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 w-full max-w-5xl">
                    {commitments.map((item, index) => (
                        <div
                            key={index}
                            className={`reveal reveal-up stagger-${index + 1} flex flex-col items-center text-center gap-3`}
                        >
                            <div className="text-white/80 scale-90">
                                {item.icon}
                            </div>
                            <h3 className="text-sm md:text-base font-500 text-white tracking-tight">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quote (特斯拉风格底部引用) */}
            <div className="tesla-cta-container reveal reveal-up text-center" style={{ animationDelay: '0.4s' }}>
                <p className="text-xl md:text-2xl font-500 text-white italic tracking-tight mb-8">
                    &ldquo;Somos una Solución para Tu Empresa.&rdquo;
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#cotizacion"
                        className="btn-tesla-primary w-full sm:w-80"
                    >
                        Solicitar Cotización
                    </a>
                </div>
            </div>
        </section>
    )
}
