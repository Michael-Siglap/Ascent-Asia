"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight, Globe, TrendingUp, Shield } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCarousel from "@/components/testimonial-carousel"
import PartnerBanner from "@/components/partner-banner"
import PageTransition from "@/components/page-transition"
import ScrollProgress from "@/components/scroll-progress"
import SectionDivider from "@/components/section-divider"
import AnimateInView, { AnimateInViewItem } from "@/components/animate-in-view"
import AnimatedCard from "@/components/animated-card"

export default function HomeClient() {
  const [mounted, setMounted] = useState(false)
  const t = useTranslations()
  const locale = useLocale()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <ScrollProgress />
      <PartnerBanner />
      <NavBar />

      <PageTransition>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Singapore skyline"
              fill
              priority
              className="object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
          </div>

          <div className="container relative z-10 mx-auto px-4 py-24 sm:py-32 md:py-40">
            <AnimateInView delay={0.2} direction="up">
              <div className="max-w-3xl">
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  <span className="text-amber-400">Empowering</span> Business Internationalisation
                </h1>
                <p className="mb-8 text-xl text-slate-200">
                  We facilitate successful expansion of businesses into Singapore and Southeast Asia with strategic
                  guidance and local expertise.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
                      Discover Our Services <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Contact Us
                    </Button>
                  </motion.div>
                </div>
              </div>
            </AnimateInView>
          </div>
        </section>

        <SectionDivider />

        {/* Services Preview */}
        <section className="bg-white dark:bg-slate-900 py-20">
          <div className="container mx-auto px-4">
            <AnimateInView className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">Our Expertise</h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                Comprehensive solutions to navigate the complexities of international business expansion in Asia
              </p>
            </AnimateInView>

            <AnimateInView staggerChildren={true} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimateInViewItem>
                <AnimatedCard>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">Market Entry Strategy</h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-400">
                    Tailored approaches to enter Southeast Asian markets with confidence and clarity.
                  </p>
                  <Link
                    href={`/${locale}/services`}
                    className="group inline-flex items-center text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </AnimatedCard>
              </AnimateInViewItem>

              <AnimateInViewItem>
                <AnimatedCard>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">Regulatory Compliance</h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-400">
                    Navigate complex regulatory environments with our expert guidance and support.
                  </p>
                  <Link
                    href={`/${locale}/services`}
                    className="group inline-flex items-center text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </AnimatedCard>
              </AnimateInViewItem>

              <AnimateInViewItem>
                <AnimatedCard>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">Business Development</h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-400">
                    Accelerate your growth with strategic partnerships and market-specific approaches.
                  </p>
                  <Link
                    href={`/${locale}/services`}
                    className="group inline-flex items-center text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </AnimatedCard>
              </AnimateInViewItem>
            </AnimateInView>

            <AnimateInView className="mt-12 text-center" delay={0.4}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 dark:border-amber-500 dark:text-amber-500 dark:hover:bg-amber-950/30"
                >
                  View All Services
                </Button>
              </motion.div>
            </AnimateInView>
          </div>
        </section>

        <SectionDivider />

        {/* Core Values */}
        <section className="bg-slate-50 dark:bg-slate-800 py-20">
          <div className="container mx-auto px-4">
            <AnimateInView className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">Our Core Values</h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                The principles that guide our approach to business internationalization
              </p>
            </AnimateInView>

            <AnimateInView staggerChildren={true} className="grid gap-10 md:grid-cols-3">
              <AnimateInViewItem className="text-center">
                <div className="mx-auto mb-6 overflow-hidden rounded-md">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Image
                      src="/images/trusted.jpg"
                      alt="Trusted business relationships"
                      width={400}
                      height={300}
                      className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </motion.div>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-800 dark:text-white">Trusted</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Trusted by our clients, partners and regulators, we maintain integrity in all our dealings.
                </p>
              </AnimateInViewItem>

              <AnimateInViewItem className="text-center">
                <div className="mx-auto mb-6 overflow-hidden rounded-md">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Image
                      src="/images/collaborative.png"
                      alt="Collaborative partnerships"
                      width={400}
                      height={300}
                      className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </motion.div>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-800 dark:text-white">Collaborative</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Finding and achieving shared objectives through collaborative partnerships.
                </p>
              </AnimateInViewItem>

              <AnimateInViewItem className="text-center">
                <div className="mx-auto mb-6 overflow-hidden rounded-md">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Image
                      src="/images/growth.png"
                      alt="Business growth"
                      width={400}
                      height={300}
                      className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </motion.div>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-800 dark:text-white">Growth</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Growth-oriented in our approach, sustainable in our mindset.
                </p>
              </AnimateInViewItem>
            </AnimateInView>
          </div>
        </section>

        <SectionDivider />

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <AnimateInView direction="scale">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Ready to expand into Southeast Asia?</h2>
                <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
                  Let our experts guide you through every step of your internationalization journey.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-white/90">
                    Schedule a Consultation
                  </Button>
                </motion.div>
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialCarousel />

        <Footer />
      </PageTransition>
    </>
  )
}
