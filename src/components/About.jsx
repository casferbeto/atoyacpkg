import { useState, useEffect, useRef } from 'react'
import equipoImg from '../assets/images/equipo_industrial.webp'
import cajasImg from '../assets/images/cajascorrugadas.webp'
import useScrollReveal from '../hooks/useScrollReveal'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0)
    const [started, setStarted] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true) },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!started) return
        let start = 0
        const increment = target / (duration / 16)
        const timer = setInterval(() => {
            start += increment
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)
        return () => clearInterval(timer)
    }, [started, target, duration])

    return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
    const ref = useScrollReveal()

    return (
        <section
            id="nosotros"
            className="tesla-section"
            ref={ref}
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <img
                    src={equipoImg}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/60" />
            </div>

            {/* Header */}
            <div className="tesla-header-text reveal reveal-up mb-12">
                <h2 className="text-[40px] md:text-[48px] font-500 tracking-[-0.6px] text-[#171a20] mb-2">
                    NOSOTROS
                </h2>
                <p className="text-sm md:text-base font-400 text-[#393c41]">
                    Más de 40 años forjando alianzas estratégicas
                </p>
            </div>

            {/* Content (Image Left + Stats Right) */}
            <div className="tesla-content w-full max-w-6xl px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 w-full">
                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 reveal reveal-left flex justify-center md:justify-end">
                        <img
                            src={cajasImg}
                            alt="Cajas de cartón corrugado"
                            className="w-full max-w-md h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Right: Stats Grid */}
                    <div className="w-full md:w-1/2 reveal reveal-right">
                        <div className="flex flex-col gap-6 w-full">
                            {[
                                {
                                    target: 40,
                                    suffix: '+',
                                    label: 'Años de experiencia',
                                    icon: (
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )
                                },
                                {
                                    target: 100,
                                    suffix: '%',
                                    label: 'Compromiso con la calidad',
                                    icon: (
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )
                                },
                                {
                                    target: 200,
                                    suffix: '+',
                                    label: 'Clientes satisfechos',
                                    icon: (
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )
                                }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-[#167FA3]"
                                >
                                    <div className="flex-shrink-0 w-16 h-16 bg-[#167FA3] rounded-full flex items-center justify-center shadow-md">
                                        {stat.icon}
                                    </div>
                                    <div className="text-left">
                                        <div className="text-4xl font-700 text-[#171a20] tracking-tight leading-none mb-1">
                                            <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-sm md:text-base font-500 text-[#393c41] uppercase tracking-wide">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTAs */}
            <div className="tesla-cta-container reveal reveal-up mt-12">
                <a
                    href="#productos"
                    className="btn-tesla-primary w-full sm:w-auto shadow-md"
                >
                    Explorar Productos
                </a>
                <a
                    href="#cotizacion"
                    className="btn-tesla-secondary w-full sm:w-auto"
                >
                    Solicitar Cotización
                </a>
            </div>
        </section>
    )
}
