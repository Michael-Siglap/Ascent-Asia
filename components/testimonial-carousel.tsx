"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content:
      "Ascent Asia Advisory was instrumental in our successful entry into the Singapore market. Their regulatory insights and strategic guidance saved us months of trial and error.",
    author: "Sarah Chen",
    title: "CEO, TechNova Solutions",
    avatar: "/images/testimonial-1.png",
  },
  {
    id: 2,
    content:
      "Working with Ascent Asia Advisory transformed our approach to Southeast Asian expansion. Their network of connections and market knowledge was invaluable.",
    author: "Michael Tran",
    title: "COO, Global Ventures Inc.",
    avatar: "/images/testimonial-2.png",
  },
  {
    id: 3,
    content:
      "The team at Ascent Asia provided clarity amidst complex regulatory environments. Their collaborative approach ensured we achieved compliance while maintaining our business goals.",
    author: "Jessica Wong",
    title: "Director of Operations, Horizon Group",
    avatar: "/images/testimonial-3.png",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section className="bg-white dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Trusted by businesses across industries for successful internationalization
          </p>
        </div>

        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800 p-6 shadow-lg md:p-12">
            <div>
              <Quote className="h-12 w-12 text-amber-200 dark:text-amber-700/50" />
            </div>

            <div className="relative h-[250px] md:h-[200px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <blockquote className="mb-8">
                    <p className="text-lg text-slate-700 dark:text-slate-300 md:text-xl">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <motion.div
                      className="overflow-hidden rounded-full"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <Image
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].author}
                        width={48}
                        height={48}
                        className="h-12 w-12 object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {testimonials[currentIndex].title}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-slate-200 dark:border-slate-700"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 min-w-2 rounded-full p-0 ${
                  index === currentIndex ? "bg-amber-500" : "bg-slate-200 dark:bg-slate-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-slate-200 dark:border-slate-700"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
