"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { CheckCircle, Lightbulb, LineChart, Users, ArrowRight, BrainCircuit } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimateInView from "@/components/animate-in-view"
import PartnerBanner from "@/components/partner-banner"
import { useLanguage } from "@/components/language-provider"

export default function AdvisoryServicesPage() {
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
          <Image src="/placeholder.svg?key=advisory-pattern" alt="Advisory Pattern" fill className="object-cover" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-500">
                  {t("advisory_services") || "Advisory Services"}
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                {t("advisory_title") || "Expert Guidance for Complex Challenges"}
              </h1>
              <p className="mb-8 text-xl text-white/90">
                {t("advisory_hero_desc") ||
                  "Strategic advisory services to navigate the complexities of doing business in Southeast Asia."}
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
                src="/placeholder.svg?key=advisory-hero"
                alt="Advisory Services"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Areas Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                {t("advisory_areas") || "Our Advisory Areas"}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                {t("advisory_areas_desc") ||
                  "Specialized advisory services to address your most critical business challenges."}
              </p>
            </div>
          </AnimateInView>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimateInView delay={0.1}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm h-full">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <LineChart className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">
                  {t("strategy_advisory") || "Strategy Advisory"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {t("strategy_advisory_desc") ||
                    "Develop robust business strategies tailored to Southeast Asian markets and competitive dynamics."}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("market_opportunity_analysis") || "Market opportunity analysis"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("competitive_positioning") || "Competitive positioning"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("growth_planning") || "Growth planning"}</span>
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
                  {t("operational_advisory") || "Operational Advisory"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {t("operational_advisory_desc") ||
                    "Optimize your operations for efficiency, scalability, and compliance in Southeast Asian markets."}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("process_optimization") || "Process optimization"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("supply_chain") || "Supply chain management"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("organizational_design") || "Organizational design"}</span>
                  </li>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.3}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm h-full">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <BrainCircuit className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">
                  {t("innovation_advisory") || "Innovation Advisory"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {t("innovation_advisory_desc") ||
                    "Drive innovation and digital transformation to stay competitive in rapidly evolving markets."}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("digital_transformation") || "Digital transformation"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("product_innovation") || "Product innovation"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("emerging_tech_adoption") || "Emerging tech adoption"}
                    </span>
                  </li>
                </ul>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Image
                src="/placeholder.svg?key=advisory-approach"
                alt="Our Advisory Approach"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <AnimateInView>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1">
                  <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                    {t("our_approach") || "Our Approach"}
                  </span>
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                  {t("advisory_approach") || "Collaborative Advisory Approach"}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  {t("advisory_approach_desc") ||
                    "We work closely with your team to understand your unique challenges and develop tailored solutions."}
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 dark:bg-amber-900/30 p-1">
                      <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <span className="font-medium dark:text-white">{t("deep_discovery") || "Deep Discovery"}</span>
                      <p className="text-slate-600 dark:text-slate-400">
                        {t("deep_discovery_desc") || "Thorough analysis of your business, objectives, and challenges."}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 dark:bg-amber-900/30 p-1">
                      <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <span className="font-medium dark:text-white">
                        {t("tailored_solutions") || "Tailored Solutions"}
                      </span>
                      <p className="text-slate-600 dark:text-slate-400">
                        {t("tailored_solutions_desc") ||
                          "Custom recommendations based on your specific situation and goals."}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 dark:bg-amber-900/30 p-1">
                      <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <span className="font-medium dark:text-white">
                        {t("implementation_support") || "Implementation Support"}
                      </span>
                      <p className="text-slate-600 dark:text-slate-400">
                        {t("implementation_support_desc") ||
                          "Hands-on guidance to ensure successful execution of recommendations."}
                      </p>
                    </div>
                  </li>
                </ul>
              </AnimateInView>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                {t("industry_expertise") || "Industry Expertise"}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                {t("industry_expertise_desc") ||
                  "Our advisors bring deep industry knowledge across key sectors in Southeast Asia."}
              </p>
            </div>
          </AnimateInView>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <AnimateInView delay={0.1}>
              <motion.div
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                  <Image src="/placeholder.svg?key=tech-icon" alt="Technology" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{t("technology") || "Technology"}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("technology_desc") || "SaaS, fintech, e-commerce, and digital platforms."}
                </p>
              </motion.div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <motion.div
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                  <Image src="/placeholder.svg?key=manufacturing-icon" alt="Manufacturing" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{t("manufacturing") || "Manufacturing"}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("manufacturing_desc") || "Electronics, automotive, consumer goods, and industrial equipment."}
                </p>
              </motion.div>
            </AnimateInView>

            <AnimateInView delay={0.3}>
              <motion.div
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                  <Image src="/placeholder.svg?key=healthcare-icon" alt="Healthcare" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{t("healthcare") || "Healthcare"}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("healthcare_desc") || "Medical devices, pharmaceuticals, and healthcare services."}
                </p>
              </motion.div>
            </AnimateInView>

            <AnimateInView delay={0.4}>
              <motion.div
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                  <Image src="/placeholder.svg?key=financial-icon" alt="Financial Services" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {t("financial_services") || "Financial Services"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("financial_services_desc") || "Banking, insurance, wealth management, and fintech."}
                </p>
              </motion.div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                {t("advisory_impact") || "Advisory Impact"}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                {t("advisory_impact_desc") || "Real results our advisory services have delivered for clients."}
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
                  <Image
                    src="/placeholder.svg?key=digital-transformation"
                    alt="Digital Transformation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold dark:text-white">
                    {t("digital_transformation_case") || "Digital Transformation Strategy"}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {t("digital_transformation_case_desc") ||
                      "Helped a traditional retailer develop and implement a digital transformation strategy, resulting in a 45% increase in online sales and 30% improvement in operational efficiency."}
                  </p>
                  <Button variant="link" className="text-amber-600 dark:text-amber-400 p-0">
                    {t("read_case_study")} <ArrowRight className="ml-1 h-4 w-4" />
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
                    src="/placeholder.svg?key=market-expansion"
                    alt="Market Expansion"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold dark:text-white">
                    {t("market_expansion_case") || "Market Expansion Advisory"}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {t("market_expansion_case_desc") ||
                      "Advised a healthcare technology company on their Southeast Asian expansion strategy, helping them prioritize markets and establish operations in Singapore and Thailand."}
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimateInView>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              {t("advisory_cta") || "Need Expert Guidance for Your Business?"}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              {t("advisory_cta_desc") ||
                "Our advisory team brings deep expertise and local knowledge to help you navigate complex business challenges."}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-white"
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
