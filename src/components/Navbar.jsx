import { useState, useEffect } from 'react'
import logoImg from '../assets/images/logo_atoyac_sinfondo.webp'

const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Productos', href: '#productos' },
    { label: 'Sectores', href: '#sectores' },
    { label: 'Proceso', href: '#proceso' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const snapContainer = document.querySelector('.tesla-snap-container');
            if (snapContainer) {
                setScrolled(snapContainer.scrollTop > 50);
            }
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection('#' + entry.target.id)
                    }
                })
            },
            { threshold: 0.5 }
        )

        const sections = document.querySelectorAll('section[id]')
        sections.forEach((s) => observer.observe(s))

        const snapContainer = document.querySelector('.tesla-snap-container');
        if (snapContainer) {
            snapContainer.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            if (snapContainer) {
                snapContainer.removeEventListener('scroll', handleScroll);
            }
            observer.disconnect()
        }
    }, [])

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 z-[100] navbar-glass py-3"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
                    <a href="#hero" className="flex items-center gap-2">
                        <img
                            src={logoImg}
                            alt="Atoyac PKG"
                            className="h-9 w-auto"
                        />
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`nav-indicator text-sm font-500 transition-colors duration-300 ${activeSection === link.href ? 'text-[#171a20] active' : 'text-[#171a20]/60 hover:text-[#171a20]'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#cotizacion"
                            className="btn-tesla-primary py-1.5 px-6 text-xs"
                        >
                            Cotizar
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-md text-[#171a20] hover:bg-black/5"
                        aria-label="Menú"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 z-[99] mobile-menu ${menuOpen ? 'open' : ''}`}
            >
                <div className="absolute inset-0 bg-white flex flex-col items-center justify-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-lg font-500 text-[#171a20] hover:bg-black/5 px-8 py-2 rounded-md transition-all"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#cotizacion"
                        onClick={() => setMenuOpen(false)}
                        className="text-lg font-500 text-[#171a20] hover:bg-black/5 px-8 py-2 rounded-md transition-all"
                    >
                        Solicitar Cotización
                    </a>
                </div>
            </div>
        </>
    )
}
