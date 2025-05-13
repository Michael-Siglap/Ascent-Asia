"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, TrendingUp, Shield, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import PartnerBanner from "@/components/partner-banner"
import { useLanguage } from "@/components/language-provider"

export default function ServicesPage() {
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

      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">{t("our_services")}</h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-300">{t("services_subtitle")}</p>
          <div className="mx-auto max-w-xl">
            <div className="flex flex-wrap justify-center gap-2">
              <Link href="#market-entry" className="rounded-full bg-slate-800 px-4 py-2 text-white hover:bg-slate-700">
                {t("market_entry")}
              </Link>
              <Link href="#regulatory" className="rounded-full bg-slate-800 px-4 py-2 text-white hover:bg-slate-700">
                {t("regulatory_compliance")}
              </Link>
              <Link href="#business-dev" className="rounded-full bg-slate-800 px-4 py-2 text-white hover:bg-slate-700">
                {t("business_development")}
              </Link>
              <Link href="#partnerships" className="rounded-full bg-slate-800 px-4 py-2 text-white hover:bg-slate-700">
                {t("strategic_partnerships")}
              </Link>
              <Link href="#advisory" className="rounded-full bg-slate-800 px-4 py-2 text-white hover:bg-slate-700">
                {t("advisory_services")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Entry */}
      <section id="market-entry" className="py-20 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-700">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{t("market_entry")}</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                  {t("market_entry_strategy_title")}
                </h2>
                <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">{t("market_entry_strategy_desc")}</p>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium dark:text-white">{t("market_research")}</span> -{" "}
                      {t("market_research_desc")}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">{t("entry_strategy")}</span> - {t("entry_strategy_desc")}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">{t("risk_assessment")}</span> - {t("risk_assessment_desc")}
                    </div>
                  </li>
                </ul>
                <Button className="bg-amber-500 hover:bg-amber-600">
                  {t("learn_more")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/market-entry.jpg"
                alt={t("market_entry_strategy")}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section id="regulatory" className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative order-2 md:order-1 rounded-xl overflow-hidden">
              <Image
                src="/images/regulatory.jpg"
                alt={t("regulatory_compliance")}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center order-1 md:order-2">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-700">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-medium">{t("regulatory_compliance")}</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                  {t("navigate_regulatory_title")}
                </h2>
                <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">{t("navigate_regulatory_desc")}</p>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">{t("regulatory_assessment")}</span> -{" "}
                      {t("regulatory_assessment_desc")}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">{t("compliance_strategy")}</span> - {t("compliance_strategy_desc")}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">{t("ongoing_support")}</span> - {t("ongoing_support_desc")}
                    </div>
                  </li>
                </ul>
                <Button className="bg-amber-500 hover:bg-amber-600">
                  {t("learn_more")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Development */}
      <section id="business-dev" className="py-20 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-700">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">{t("business_development")}</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                  {t("accelerate_growth_title")}
                </h2>
                <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">{t("accelerate_growth_desc")}</p>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">{t("growth_strategy")}</span> - {t("growth_strategy_desc")}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">{t("market_penetration")}</span> - {t("market_penetration_desc")}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">{t("performance_monitoring")}</span> -{" "}
                      {t("performance_monitoring_desc")}
                    </div>
                  </li>
                </ul>
                <Button className="bg-amber-500 hover:bg-amber-600">
                  {t("learn_more")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/business-dev.jpg"
                alt={t("business_development")}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{t("explore_opportunities")}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">{t("explore_opportunities_desc")}</p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
            {t("contact_us_today")}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
