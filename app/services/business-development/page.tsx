"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { CheckCircle, TrendingUp, Target, BarChart3, Users } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimateInView from "@/components/animate-in-view"
import PartnerBanner from "@/components/partner-banner"
import { useLanguage } from "@/components/language-provider"

export default function BusinessDevelopmentPage() {
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
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <Image src="/placeholder.svg?key=68naq" alt="Business Growth Pattern" fill className="object-cover" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1">
                <TrendingUp className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-500">
                  {t("business_development") || "Business Development"}
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                {t("accelerate_growth_title") || "Accelerate Your Growth in Southeast Asia"}
              </h1>
              <p className="mb-8 text-xl text-white/90">
                {t("accelerate_growth_hero_desc") ||
                  "Strategic business development solutions to expand your market presence and drive sustainable growth."}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-white"
                >
                  {t("schedule_consultation")}
                </Button>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?key=oemvr"
                alt="Business Growth"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                {t("growth_solutions") || "Key Growth Solutions"}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                {t("growth_solutions_desc") ||
                  "Comprehensive strategies to drive business expansion and market penetration in Southeast Asia."}
              </p>
            </div>
          </AnimateInView>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimateInView delay={0.1}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm h-full">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Target className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">{t("growth_strategy") || "Growth Strategy"}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {t("growth_strategy_desc_full") ||
                    "Custom roadmaps for sustainable business expansion in your target Southeast Asian markets."}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("opportunity_identification") || "Opportunity identification"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("growth_modeling") || "Growth modeling"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("resource_planning") || "Resource planning"}</span>
                  </li>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm h-full">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Users className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">
                  {t("market_penetration") || "Market Penetration"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {t("market_penetration_desc_full") ||
                    "Tactical approaches to increase market share and customer acquisition in Southeast Asian markets."}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("channel_development") || "Channel development"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("partnership_building") || "Partnership building"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("localization_strategy") || "Localization strategy"}</span>
                  </li>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.3}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm h-full">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <BarChart3 className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">
                  {t("performance_monitoring") || "Performance Monitoring"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {t("performance_monitoring_desc_full") ||
                    "Continuous evaluation of business metrics to optimize growth strategies and ensure sustainable expansion."}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("kpi_development") || "KPI development"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("performance_analysis") || "Performance analysis"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("strategy_optimization") || "Strategy optimization"}</span>
                  </li>
                </ul>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                {t("results_delivered") || "Results Delivered"}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                {t("results_delivered_desc") ||
                  "Tangible outcomes our business development services have achieved for clients."}
              </p>
            </div>
          </AnimateInView>

          <div className="grid gap-8 md:grid-cols-3">
            <AnimateInView delay={0.1}>
              <motion.div
                className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-amber-500 mb-4">140%</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {t("revenue_growth") || "Revenue Growth"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("revenue_growth_desc") || "Average revenue growth for tech clients in their first year."}
                </p>
              </motion.div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <motion.div
                className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-amber-500 mb-4">65+</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {t("partnerships_established") || "Partnerships Established"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("partnerships_established_desc") || "Strategic partnerships formed across ASEAN markets."}
                </p>
              </motion.div>
            </AnimateInView>

            <AnimateInView delay={0.3}>
              <motion.div
                className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-amber-500 mb-4">30%</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {t("market_share_increase") || "Market Share Increase"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("market_share_increase_desc") || "Average market share growth for established clients."}
                </p>
              </motion.div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Image
                src="/placeholder.svg?key=u2y8h"
                alt="Our Growth Approach"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <AnimateInView>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1">
                  <TrendingUp className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                    {t("our_approach") || "Our Approach"}
                  </span>
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                  {t("data_driven_growth") || "Data-Driven Growth Strategies"}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  {t("data_driven_growth_desc") ||
                    "Our business development approach combines market intelligence with strategic planning to deliver sustainable growth."}
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 dark:bg-amber-900/30 p-1">
                      <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <span className="font-medium dark:text-white">
                        {t("market_intelligence") || "Market Intelligence"}
                      </span>
                      <p className="text-slate-600 dark:text-slate-400">
                        {t("market_intelligence_desc") ||
                          "Data-backed insights into market dynamics and opportunities."}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 dark:bg-amber-900/30 p-1">
                      <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <span className="font-medium dark:text-white">
                        {t("strategic_planning") || "Strategic Planning"}
                      </span>
                      <p className="text-slate-600 dark:text-slate-400">
                        {t("strategic_planning_desc") || "Tailored roadmaps for market penetration and expansion."}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 dark:bg-amber-900/30 p-1">
                      <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <span className="font-medium dark:text-white">
                        {t("execution_support") || "Execution Support"}
                      </span>
                      <p className="text-slate-600 dark:text-slate-400">
                        {t("execution_support_desc") || "Hands-on implementation assistance and ongoing optimization."}
                      </p>
                    </div>
                  </li>
                </ul>
              </AnimateInView>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimateInView>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              {t("ready_to_grow") || "Ready to Grow Your Business in Southeast Asia?"}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              {t("ready_to_grow_desc") ||
                "Our business development experts will help you create and implement strategies for sustainable growth."}
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
