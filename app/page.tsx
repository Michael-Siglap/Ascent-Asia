"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight, Globe, TrendingUp, Shield } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCarousel from "@/components/testimonial-carousel"
import AnimateInView from "@/components/animate-in-view"
import PartnerBanner from "@/components/partner-banner"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col">
      <PartnerBanner />
      <NavBar />

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
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 sm:py-32 md:py-40">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <motion.span
                className="text-amber-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {t("empowering")}
              </motion.span>{" "}
              {t("hero_title")}
            </h1>
            <motion.p
              className="mb-8 text-xl text-slate-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {t("hero_subtitle")}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
                  {t("discover_services")} <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 dark:border-white dark:text-white dark:hover:bg-white/10"
                >
                  {t("contact_us")}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white dark:bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                {t("our_expertise")}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">{t("expertise_subtitle")}</p>
            </div>
          </AnimateInView>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimateInView delay={0.1} direction="up">
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-0 dark:bg-slate-800 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Globe className="h-6 w-6" />
                    </motion.div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">{t("market_entry_strategy")}</h3>
                    <p className="mb-4 text-slate-600 dark:text-slate-400">{t("market_entry_desc")}</p>
                    <Link
                      href="/services"
                      className="group inline-flex items-center text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400"
                    >
                      {t("learn_more")}{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimateInView>

            <AnimateInView delay={0.2} direction="up">
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-0 dark:bg-slate-800 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Shield className="h-6 w-6" />
                    </motion.div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">{t("regulatory_compliance_title")}</h3>
                    <p className="mb-4 text-slate-600 dark:text-slate-400">{t("regulatory_compliance_desc")}</p>
                    <Link
                      href="/services"
                      className="group inline-flex items-center text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400"
                    >
                      {t("learn_more")}{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimateInView>

            <AnimateInView delay={0.3} direction="up">
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-0 dark:bg-slate-800 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <TrendingUp className="h-6 w-6" />
                    </motion.div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">{t("business_dev_title")}</h3>
                    <p className="mb-4 text-slate-600 dark:text-slate-400">{t("business_dev_desc")}</p>
                    <Link
                      href="/services"
                      className="group inline-flex items-center text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400"
                    >
                      {t("learn_more")}{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimateInView>
          </div>

          <AnimateInView delay={0.4} direction="up">
            <div className="mt-12 text-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 dark:border-amber-500 dark:text-amber-500 dark:hover:bg-amber-950/30"
                >
                  {t("view_all_services")}
                </Button>
              </motion.div>
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">{t("core_values")}</h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">{t("core_values_subtitle")}</p>
            </div>
          </AnimateInView>

          <div className="grid gap-10 md:grid-cols-3">
            <AnimateInView delay={0.1} direction="left">
              <div className="text-center">
                <motion.div
                  className="mx-auto mb-6 overflow-hidden rounded-md"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/images/trusted.jpg"
                    alt="Trusted business relationships"
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
                <h3 className="mb-3 text-2xl font-bold text-slate-800 dark:text-white">{t("trusted")}</h3>
                <p className="text-slate-600 dark:text-slate-400">{t("trusted_desc")}</p>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.2} direction="up">
              <div className="text-center">
                <motion.div
                  className="mx-auto mb-6 overflow-hidden rounded-md"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/images/collaborative.png"
                    alt="Collaborative partnerships"
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
                <h3 className="mb-3 text-2xl font-bold text-slate-800 dark:text-white">{t("collaborative")}</h3>
                <p className="text-slate-600 dark:text-slate-400">{t("collaborative_desc")}</p>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.3} direction="right">
              <div className="text-center">
                <motion.div
                  className="mx-auto mb-6 overflow-hidden rounded-md"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/images/growth.png"
                    alt="Business growth"
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
                <h3 className="mb-3 text-2xl font-bold text-slate-800 dark:text-white">{t("growth")}</h3>
                <p className="text-slate-600 dark:text-slate-400">{t("growth_desc")}</p>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimateInView>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{t("expansion_cta")}</h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">{t("expansion_cta_subtitle")}</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-amber-600 hover:bg-white/90 dark:bg-white dark:text-amber-600 dark:hover:bg-white/90"
                >
                  {t("schedule_consultation")}
                </Button>
              </motion.div>
            </motion.div>
          </AnimateInView>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      <Footer />
    </div>
  )
}
