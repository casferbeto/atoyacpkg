import { useState, useEffect } from 'react'
import logoImg from '../assets/images/logo_atoyac_sinfondo.webp'

export default function SplashScreen({ onFinish }) {
    const [exiting, setExiting] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setExiting(true), 2800)
        const exitTimer = setTimeout(() => onFinish(), 3600)
        return () => {
            clearTimeout(timer)
            clearTimeout(exitTimer)
        }
    }, [onFinish])

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center geo-pattern-splash ${exiting ? 'splash-exit' : ''}`}
        >
            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,127,163,0.06)_0%,transparent_50%)]" />

            {/* Logo */}
            <div className="splash-logo relative z-10 flex flex-col items-center">
                <img
                    src={logoImg}
                    alt="Atoyac PKG"
                    className="w-56 md:w-72 lg:w-80 h-auto"
                />
            </div>

            {/* Bottom loading bar */}
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
                <div className="w-20 h-0.5 bg-gray-300/50 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-atoyac-blue rounded-full"
                        style={{
                            animation: 'loadingBar 2.8s ease-in-out forwards',
                        }}
                    />
                </div>
            </div>

            <style>{`
        @keyframes loadingBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
        </div>
    )
}
