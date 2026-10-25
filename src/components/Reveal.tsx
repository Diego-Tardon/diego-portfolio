
import { useEffect, useRef, useState } from "react"
import type { CSSProperties, ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    )

    if (
      prefersReducedMotion.matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (entry?.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -35px 0px",
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const style = {
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties

  return (
    <div
      ref={elementRef}
      style={style}
      className={`reveal ${
        visible ? "reveal-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  )
}
