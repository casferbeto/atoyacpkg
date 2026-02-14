import cajaRegular from '../assets/images/caja_regular.webp'
import cajaTroquelada from '../assets/images/caja_troquelada.webp'
import cajaAgricola from '../assets/images/caja_agricola.webp'
import separadoresImg from '../assets/images/separadores.webp'
import laminaDobleImg from '../assets/images/lamina_doble_corrugado.webp'
import cajaAutomotriz from '../assets/images/caja_automotriz.webp'
import contenedorTelescopico from '../assets/images/contenedor_telescopico.webp'
import laminaCorrugada from '../assets/images/laminacorrugada.webp'
import useScrollReveal from '../hooks/useScrollReveal'

const products = [
    {
        title: 'Caja Regular Ranurada',
        description: 'Empaque estándar RSC para uso industrial general. Resistencia óptima para almacenamiento y transporte.',
        image: cajaRegular,
    },
    {
        title: 'Cajas Troqueladas',
        description: 'Empaques con cortes estructurales personalizados según dimensiones y requerimientos específicos.',
        image: cajaTroquelada,
    },
    {
        title: 'Cajas para Productos del Campo',
        description: 'Empaques ventilados de alta resistencia para el sector agrícola con flujo de aire garantizado.',
        image: cajaAgricola,
    },
    {
        title: 'Separadores',
        description: 'Divisiones internas para organización y protección individual de piezas dentro del empaque.',
        image: separadoresImg,
    },
    {
        title: 'Lámina Doble Corrugado',
        description: 'Estructura de doble flauta para máxima resistencia estructural y protección superior.',
        image: laminaDobleImg,
    },
    {
        title: 'Cajas para Industria Automotriz',
        description: 'Empaques reforzados para componentes automotrices con resistencias controladas.',
        image: cajaAutomotriz,
    },
    {
        title: 'Contenedor con Tapa Telescópica',
        description: 'Contenedor sobre tarima estándar de madera. Solución robusta para el sector automotriz.',
        image: contenedorTelescopico,
    },
    {
        title: 'Lámina corrugada',
        description: 'Láminas de cartón corrugado de alta resistencia, ideales para protección y embalaje ligero.',
        image: laminaCorrugada,
    },
]

export default function Products() {
    const ref = useScrollReveal()

    return (
        <section
            id="productos"
            className="tesla-section"
            ref={ref}
        >
            {/* Header */}
            <div className="tesla-header-text reveal reveal-up">
                <h2 className="text-[40px] md:text-[48px] font-500 tracking-[-0.6px] text-[#171a20] mb-2">
                    Productos de Excelencia
                </h2>
                <p className="text-sm md:text-base font-400 text-[#393c41]">
                    Diseñados para resistir y proteger
                </p>
            </div>

            {/* Content (Grid) */}
            <div className="tesla-content">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 w-full max-h-[60vh] overflow-y-auto scrollbar-hide py-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`reveal reveal-up stagger-${(index % 4) + 1} flex flex-col gap-2`}
                        >
                            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <h3 className="text-xs md:text-sm font-500 text-[#171a20]">
                                {product.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTAs */}
            <div className="tesla-cta-container reveal reveal-up" style={{ animationDelay: '0.4s' }}>
                <a
                    href="#cotizacion"
                    className="btn-tesla-primary w-full sm:w-auto"
                >
                    Solicitar Cotización
                </a>
            </div>
        </section>
    )
}
