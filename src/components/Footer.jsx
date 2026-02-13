import logoImg from '../assets/images/logo_atoyac_sinfondo.png'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Footer() {
    const ref = useScrollReveal()

    return (
        <footer
            className="tesla-section bg-white"
            ref={ref}
        >
            <div className="tesla-header-text reveal reveal-up">
                <img src={logoImg} alt="Atoyac PKG" className="h-12 w-auto mx-auto mb-6 brightness-0" />
                <h3 className="text-lg font-500 text-[#171a20]">Atoyac PKG</h3>
                <p className="text-xs text-[#393c41] mt-1 uppercase tracking-widest">Liderazgo en Corrugado</p>
            </div>

            <div className="tesla-content">
                <div className="flex flex-col gap-6 text-center">
                    <div className="flex flex-wrap justify-center gap-8">
                        <a href="tel:+522222477482" className="text-sm font-500 text-[#171a20] hover:underline">01 (222) 247 74 82</a>
                        <a href="mailto:administracion@atoyacpkg.com.mx" className="text-sm font-500 text-[#171a20] hover:underline">administracion@atoyacpkg.com.mx</a>
                    </div>
                </div>
            </div>

            <div className="tesla-cta-container reveal reveal-up pb-8">
                <div className="flex flex-wrap justify-center gap-6 mb-4">
                    {['Inicio', 'Nosotros', 'Productos', 'Sectores', 'Proceso', 'Cotizar'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase() === 'cotizar' ? 'cotizacion' : item.toLowerCase() === 'inicio' ? 'hero' : item.toLowerCase() === 'nosotros' ? 'nosotros' : item.toLowerCase() === 'productos' ? 'productos' : item.toLowerCase() === 'sectores' ? 'sectores' : item.toLowerCase()}`}
                            className="text-[11px] font-500 text-[#393c41] hover:text-[#171a20] transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>
                <p className="text-[10px] text-[#393c41]/60 text-center">
                    © {new Date().getFullYear()} Atoyac PKG. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}
