"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { CheckCircle, Shield, FileCheck, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimateInView from "@/components/animate-in-view"
import PartnerBanner from "@/components/partner-banner"
import { useLanguage } from "@/components/language-provider"

export default function RegulatoryPage() {
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
      <section className="relative bg-gradient-to-r from-slate-700 to-slate-800 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1">
                <Shield className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-500">
                  {t("regulatory_compliance") || "Regulatory Compliance"}
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                {t("regulatory_compliance_hero_title") || "Navigate Complex Regulatory Environments"}
              </h1>
              <p className="mb-8 text-xl text-white/90">
                {t("regulatory_compliance_hero_desc") ||
                  "Ensure full compliance with local regulations while maintaining operational efficiency across Southeast Asia."}
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
                src="/placeholder.svg?key=gdsbq"
                alt="Regulatory Compliance"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                {t("compliance_services") || "Our Compliance Services"}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                {t("compliance_services_desc") ||
                  "Comprehensive regulatory compliance solutions customized to your industry and business needs."}
              </p>
            </div>
          </AnimateInView>

          <div className="grid gap-12 md:gap-8 md:grid-cols-3">
            <AnimateInView delay={0.1}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">
                  {t("regulatory_assessment") || "Regulatory Assessment"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("regulatory_assessment_desc_full") ||
                    "Comprehensive evaluation of applicable regulations in your target markets to identify compliance requirements."}
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("regulatory_mapping") || "Regulatory mapping"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("gap_analysis") || "Gap analysis"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("risk_identification") || "Risk identification"}</span>
                  </li>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <FileCheck className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">
                  {t("compliance_strategy") || "Compliance Strategy"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("compliance_strategy_desc_full") ||
                    "Development of tailored compliance frameworks that align with your business goals and risk tolerance."}
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("policy_development") || "Policy development"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("procedure_implementation") || "Procedure implementation"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("compliance_documentation") || "Compliance documentation"}
                    </span>
                  </li>
                </ul>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.3}>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm">
                <div className="mb-6 h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <BookOpen className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">{t("ongoing_support") || "Ongoing Support"}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("ongoing_support_desc_full") ||
                    "Continuous monitoring of regulatory changes and implementation of necessary adjustments to maintain compliance."}
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("regulatory_monitoring") || "Regulatory monitoring"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">{t("compliance_audits") || "Compliance audits"}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300">
                      {t("adjustment_implementation") || "Adjustment implementation"}
                    </span>
                  </li>
                </ul>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <AnimateInView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                {t("industries_served") || "Industries We Serve"}
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                {t("industries_desc") || "Specialized regulatory compliance expertise across various sectors."}
              </p>
            </div>
          </AnimateInView>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <AnimateInView delay={0.1}>
              <motion.div
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                  <Image src="/placeholder.svg?key=f9hls" alt="Fintech" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{t("fintech") || "Fintech"}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("fintech_desc") || "Navigating complex financial regulations across ASEAN markets."}
                </p>
              </motion.div>
            </AnimateInView>

            <AnimateInView delay={0.2}>
              <motion.div
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                  <Image src="/placeholder.svg?key=i0c50" alt="Healthcare" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{t("healthcare") || "Healthcare"}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("healthcare_desc") || "Ensuring compliance with health regulations and standards."}
                </p>
              </motion.div>
            </AnimateInView>

            <AnimateInView delay={0.3}>
              <motion.div
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                  <Image src="/placeholder.svg?key=e33oq" alt="E-commerce" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{t("ecommerce") || "E-commerce"}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("ecommerce_desc") || "Addressing digital trade regulations and consumer protection laws."}
                </p>
              </motion.div>
            </AnimateInView>

            <AnimateInView delay={0.4}>
              <motion.div
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                  <Image src="/placeholder.svg?key=ebz7t" alt="Manufacturing" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{t("manufacturing") || "Manufacturing"}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("manufacturing_compliance_desc") || "Meeting industrial standards and trade regulations."}
                </p>
              </motion.div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimateInView>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              {t("regulatory_cta") || "Ensure Your Regulatory Compliance Today"}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              {t("regulatory_cta_desc") ||
                "Partner with us to navigate complex regulatory environments across Southeast Asia."}
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
