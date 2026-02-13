import { useState, useEffect, useRef } from 'react'
import equipoImg from '../assets/images/equipo_industrial.png'
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
            <div className="tesla-header-text reveal reveal-up">
                <h2 className="text-[40px] md:text-[48px] font-500 tracking-[-0.6px] text-[#171a20] mb-2">
                    Sobre Atoyac PKG
                </h2>
                <p className="text-sm md:text-base font-400 text-[#393c41]">
                    Más de 40 años forjando alianzas estratégicas
                </p>
            </div>

            {/* Content (Special Tesla grid for stats) */}
            <div className="tesla-content">
                <div className="grid md:grid-cols-2 gap-12 max-w-2xl w-full px-6">
                    <div className="text-center reveal reveal-left">
                        <div className="text-5xl font-500 text-[#171a20] tracking-tight">
                            <AnimatedCounter target={40} suffix="+" />
                        </div>
                        <div className="text-sm text-[#393c41] mt-2 font-400">Años de experiencia industrial</div>
                    </div>
                    <div className="text-center reveal reveal-right">
                        <div className="text-5xl font-500 text-[#171a20] tracking-tight">
                            <AnimatedCounter target={100} suffix="%" />
                        </div>
                        <div className="text-sm text-[#393c41] mt-2 font-400">Compromiso con la calidad total</div>
                    </div>
                </div>
            </div>

            {/* CTAs */}
            <div className="tesla-cta-container reveal reveal-up" style={{ animationDelay: '0.4s' }}>
                <a
                    href="#productos"
                    className="btn-tesla-secondary w-full sm:w-auto"
                >
                    Explorar Productos
                </a>
            </div>
        </section>
    )
}
