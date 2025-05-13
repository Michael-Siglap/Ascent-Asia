"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { CheckCircle, ArrowRight, Globe, Users, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimateInView from "@/components/animate-in-view"
import PartnerBanner from "@/components/partner-banner"
import { useLanguage } from "@/components/language-provider"

export default function MarketEntryPage() {
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
      <section className="relative bg-gradient-to-r from-amber-500 to-amber-600 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                {t("market_entry_title") || "Market Entry Strategy"}
              </h1>
              <p className="mb-8 text-xl text-white/90">
                {t("market_entry_hero_desc") ||
                  "Navigate Southeast Asian markets with confidence through our tailored market entry solutions."}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-white/90 dark:bg-white dark:text-amber-600 dark:hover:bg-white/90"
                >
                  {t("schedule_consultation")}
                </Button>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?key=iad0x"
                alt="Market Entry Strategy"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                {t("our_approach") || "Our Market Entry Approach"}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                {t("approach_desc") ||
                  "A methodical process designed to minimize risks and maximize opportunities for your business in Southeast Asia."}
              </p>
            </div>
          </AnimateInView>

          <div className="grid gap-12 md:gap-8 md:grid-cols-3">
            <AnimateInView delay={0.1}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Globe className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">
                  {t("market_research_analysis") || "Market Research & Analysis"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("market_research_desc_full") ||
                    "Comprehensive research into market dynamics, competitor landscape, and consumer behavior to inform strategic decisions."}
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("market_size_analysis") || "Market size & growth analysis"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("competitor_mapping") || "Competitor mapping"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("consumer_insights") || "Consumer insights"}</span>
                  </li>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Users className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">
                  {t("strategy_development") || "Strategy Development"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("strategy_dev_desc") ||
                    "Customized market entry approaches based on your business model, objectives, and risk profile."}
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("entry_mode_selection") || "Entry mode selection"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("partnership_evaluation") || "Partnership evaluation"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("localization_requirements") || "Localization requirements"}
                    </span>
                  </li>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.3}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <BarChart3 className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">
                  {t("implementation") || "Implementation & Monitoring"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("implementation_desc") ||
                    "Execution of the market entry plan with continuous assessment and refinement based on performance."}
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("launch_support") || "Launch support"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("kpi_tracking") || "KPI tracking"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("strategy_refinement") || "Strategy refinement"}</span>
                  </li>
                </ul>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                {t("success_stories") || "Success Stories"}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                {t("success_stories_desc") || "Real-world examples of successful market entries we've facilitated."}
              </p>
            </div>
          </AnimateInView>

          <div className="grid gap-8 md:grid-cols-2">
            <AnimateInView delay={0.1}>
              <motion.div
                className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-60">
                  <Image src="/placeholder.svg?key=bu2ra" alt="Tech Company Case Study" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold dark:text-white">
                    {t("tech_company_case") || "Tech SaaS Company"}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {t("tech_company_desc") ||
                      "Helped a North American SaaS company establish their APAC headquarters in Singapore, achieving 140% of their first-year revenue targets."}
                  </p>
                  <Button variant="link" className="text-amber-600 dark:text-amber-400 p-0">
                    {t("read_case_study") || "Read case study"} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <motion.div
                className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?key=qp07l"
                    alt="Manufacturing Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold dark:text-white">
                    {t("manufacturing_case") || "Manufacturing Enterprise"}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {t("manufacturing_desc") ||
                      "Guided a European manufacturer in establishing production facilities in Vietnam, reducing operational costs by 30%."}
                  </p>
                  <Button variant="link" className="text-amber-600 dark:text-amber-400 p-0">
                    {t("read_case_study") || "Read case study"} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimateInView>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              {t("ready_to_enter") || "Ready to Enter Southeast Asian Markets?"}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              {t("expert_guidance") || "Get expert guidance tailored to your industry and business objectives."}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-amber-600 hover:bg-white/90 dark:bg-white dark:text-amber-600 dark:hover:bg-white/90"
              >
                {t("schedule_consultation")}
              </Button>
            </motion.div>
          </AnimateInView>
        </div>
      </section>

      <Footer />
    </div>
  )
}
