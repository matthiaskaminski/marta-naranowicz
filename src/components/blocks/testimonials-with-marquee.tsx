import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  const [width, setWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Podwajamy testimonials dla infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials]
  
  useEffect(() => {
    // Obliczamy szerokość na podstawie liczby testimonials
    const cardWidth = 374 // 350px + 24px gap
    const singleSetWidth = testimonials.length * cardWidth
    setWidth(singleSetWidth)
  }, [testimonials])

  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-20 px-6",
      className
    )}>
      <div className="max-w-[1404px] mx-auto">
        <div className="max-w-[600px] mx-auto text-left mb-16">
          <h2 className="mb-4" style={{color: '#F0F0F0', fontWeight: 600, fontSize: '36px'}}>
            {title}
          </h2>
          <p className="mb-2" style={{color: '#F0F0F0', fontSize: '16px'}}>
            {description}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div 
            ref={containerRef}
            className="flex gap-6 p-2 will-change-transform"
            animate={{
              x: [0, -width]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
                delay: 2
              }
            }}
          >
            {duplicatedTestimonials.map((testimonial, i) => (
              <div key={`testimonial-${i}`} className="flex-shrink-0">
                <TestimonialCard 
                  {...testimonial}
                />
              </div>
            ))}
          </motion.div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
    </section>
  )
}