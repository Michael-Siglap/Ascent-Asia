"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { CheckCircle, Handshake, Network, Globe, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimateInView from "@/components/animate-in-view"
import PartnerBanner from "@/components/partner-banner"
import { useLanguage } from "@/components/language-provider"

export default function StrategicPartnershipsPage() {
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
      <section className="relative bg-gradient-to-r from-slate-800 to-slate-900 py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.svg?key=partnership-pattern"
            alt="Partnership Pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1">
                <Handshake className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-500">
                  {t("strategic_partnerships") || "Strategic Partnerships"}
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                {t("partnerships_title") || "Forge Powerful Alliances"}
              </h1>
              <p className="mb-8 text-xl text-white/90">
                {t("partnerships_hero_desc") ||
                  "Build strategic partnerships that accelerate your growth and create mutual value in Southeast Asian markets."}
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
                src="/placeholder.svg?key=partnership-hero"
                alt="Strategic Partnerships"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                {t("partnership_types") || "Partnership Types"}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                {t("partnership_types_desc") ||
                  "We facilitate various strategic partnerships tailored to your business objectives and market strategy."}
              </p>
            </div>
          </AnimateInView>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimateInView delay={0.1}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm h-full">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Network className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">
                  {t("distribution_partnerships") || "Distribution Partnerships"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {t("distribution_partnerships_desc") ||
                    "Expand your market reach through strategic distribution networks across Southeast Asia."}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("distributor_identification") || "Distributor identification"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("channel_strategy") || "Channel strategy"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("partnership_management") || "Partnership management"}
                    </span>
                  </li>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm h-full">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Globe className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">{t("joint_ventures") || "Joint Ventures"}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {t("joint_ventures_desc") ||
                    "Create powerful joint ventures with local partners to accelerate market entry and growth."}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("partner_selection") || "Partner selection"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("structure_design") || "Structure design"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("governance_framework") || "Governance framework"}</span>
                  </li>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.3}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm h-full">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Handshake className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">
                  {t("strategic_alliances") || "Strategic Alliances"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {t("strategic_alliances_desc") ||
                    "Form non-equity partnerships to leverage complementary strengths and create mutual value."}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("alliance_strategy") || "Alliance strategy"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("partner_matching") || "Partner matching"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("value_proposition_design") || "Value proposition design"}
                    </span>
                  </li>
                </ul>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                {t("partnership_process") || "Our Partnership Process"}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                {t("partnership_process_desc") ||
                  "A systematic approach to identifying, establishing, and managing strategic partnerships."}
              </p>
            </div>
          </AnimateInView>

          <div className="grid gap-8 md:grid-cols-4">
            <AnimateInView delay={0.1}>
              <div className="relative">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm text-center h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold mb-3 dark:text-white">
                      {t("needs_assessment") || "Needs Assessment"}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {t("needs_assessment_desc") ||
                        "Identifying your strategic objectives and partnership requirements."}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <div className="relative">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm text-center h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold mb-3 dark:text-white">
                      {t("partner_identification") || "Partner Identification"}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {t("partner_identification_desc") ||
                        "Researching and shortlisting potential partners based on strategic fit."}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.3}>
              <div className="relative">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm text-center h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold mb-3 dark:text-white">
                      {t("partnership_formation") || "Partnership Formation"}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {t("partnership_formation_desc") ||
                        "Facilitating negotiations and structuring the partnership agreement."}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.4}>
              <div className="relative">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm text-center h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold mb-3 dark:text-white">
                      {t("ongoing_management") || "Ongoing Management"}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {t("ongoing_management_desc") ||
                        "Supporting the partnership with governance, performance monitoring, and optimization."}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                {t("partnership_success") || "Partnership Success Stories"}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                {t("partnership_success_desc") || "Real examples of successful partnerships we've facilitated."}
              </p>
            </div>
          </AnimateInView>

          <div className="grid gap-8 md:grid-cols-2">
            <AnimateInView delay={0.1}>
              <motion.div
                className="bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?key=tech-partnership"
                    alt="Technology Partnership"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold dark:text-white">
                    {t("tech_partnership") || "Technology Distribution Partnership"}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {t("tech_partnership_desc") ||
                      "Connected a US-based cybersecurity firm with regional distributors, resulting in a 200% increase in regional sales within 18 months."}
                  </p>
                  <Button variant="link" className="text-amber-600 dark:text-amber-400 p-0">
                    {t("read_case_study")} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <motion.div
                className="bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-60">
                  <Image src="/placeholder.svg?key=joint-venture" alt="Joint Venture" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold dark:text-white">
                    {t("manufacturing_jv") || "Manufacturing Joint Venture"}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {t("manufacturing_jv_desc") ||
                      "Structured a joint venture between a German equipment manufacturer and a Vietnamese industrial group, reducing time-to-market by 50%."}
                  </p>
                  <Button variant="link" className="text-amber-600 dark:text-amber-400 p-0">
                    {t("read_case_study")} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-white">
                {t("partnership_benefits") || "Benefits of Strategic Partnerships"}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-300">
                {t("partnership_benefits_desc") ||
                  "How strategic partnerships can accelerate your growth in Southeast Asian markets."}
              </p>
            </div>
          </AnimateInView>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimateInView delay={0.1}>
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 mb-4">
                  <Globe className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {t("market_access") || "Accelerated Market Access"}
                </h3>
                <p className="text-slate-300">
                  {t("market_access_desc") || "Leverage established networks to enter markets faster."}
                </p>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 mb-4">
                  <Network className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{t("resource_sharing") || "Resource Sharing"}</h3>
                <p className="text-slate-300">
                  {t("resource_sharing_desc") || "Access complementary capabilities and resources."}
                </p>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.3}>
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 mb-4">
                  <CheckCircle className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{t("risk_mitigation") || "Risk Mitigation"}</h3>
                <p className="text-slate-300">
                  {t("risk_mitigation_desc") || "Share risks associated with market entry and expansion."}
                </p>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.4}>
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 mb-4">
                  <Handshake className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{t("local_credibility") || "Local Credibility"}</h3>
                <p className="text-slate-300">
                  {t("local_credibility_desc") || "Gain trust and credibility through local partnerships."}
                </p>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimateInView>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              {t("partnership_cta") || "Ready to Build Strategic Partnerships?"}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              {t("partnership_cta_desc") ||
                "Let our experts help you identify and establish the right partnerships for your business."}
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
