import logoImg from '../assets/images/logo_atoyac_sinfondo.webp'

export default function Footer() {
    return (
        <footer className="bg-[#171a20] text-white py-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
                {/* Logo */}
                <div>
                    <img
                        src={logoImg}
                        alt="Atoyac PKG Logo"
                        className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                </div>

                {/* Contact Info Group */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Phone */}
                    <a href="tel:+522223206102" className="flex items-center group hover:text-[#167FA3] transition-colors duration-200">
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#167FA3]/20 transition-colors duration-300 mr-3">
                            <svg className="h-5 w-5 text-[#167FA3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <span className="text-sm font-500 text-gray-300 group-hover:text-white">
                            +52 (222) 670 6354
                        </span>
                    </a>

                    {/* Email */}
                    <a href="mailto:ventas@atoyacpkg.com.mx" className="flex items-center group hover:text-[#167FA3] transition-colors duration-200">
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#167FA3]/20 transition-colors duration-300 mr-3">
                            <svg className="h-5 w-5 text-[#167FA3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="text-sm font-500 text-gray-300 group-hover:text-white">
                            ventas@atoyacpkg.com.mx
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
