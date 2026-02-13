import { useEffect, useRef } from 'react'

export default function useScrollReveal(options = {}) {
    const ref = useRef(null)
    const { threshold = 0.15, rootMargin = '0px 0px -50px 0px' } = options

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold, rootMargin }
        )

        const elements = node.querySelectorAll('.reveal')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [threshold, rootMargin])

    return ref
}
