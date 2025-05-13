"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, TrendingUp, Shield, ChevronRight } from "lucide-react"
import { useLocale } from "next-intl"

import { Button } from "@/components/ui/button"
import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import PartnerBanner from "@/components/partner-banner"

export default function ServicesClient() {
  const [mounted, setMounted] = useState(false)
  const locale = useLocale()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <PartnerBanner />
      <NavBar />

      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Our Services</h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-300">
            Comprehensive solutions for businesses expanding into Southeast Asian markets
          </p>
          <div className="mx-auto max-w-xl">
            <div className="flex flex-wrap justify-center gap-2">
              <Link href="#market-entry" className="rounded-full bg-slate-800 px-4 py-2 text-white hover:bg-slate-700">
                Market Entry
              </Link>
              <Link href="#regulatory" className="rounded-full bg-slate-800 px-4 py-2 text-white hover:bg-slate-700">
                Regulatory Compliance
              </Link>
              <Link href="#business-dev" className="rounded-full bg-slate-800 px-4 py-2 text-white hover:bg-slate-700">
                Business Development
              </Link>
              <Link href="#partnerships" className="rounded-full bg-slate-800 px-4 py-2 text-white hover:bg-slate-700">
                Strategic Partnerships
              </Link>
              <Link href="#advisory" className="rounded-full bg-slate-800 px-4 py-2 text-white hover:bg-slate-700">
                Advisory Services
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
                  <span className="text-sm font-medium">Market Entry</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                  Strategic Market Entry Solutions
                </h2>
                <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
                  Navigate the complexities of Southeast Asian markets with our tailored entry strategies designed for
                  your business needs.
                </p>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium dark:text-white">Market Research & Analysis</span> - Comprehensive
                      insights into market dynamics, competitor landscape, and consumer behavior.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">Entry Strategy Development</span> - Customized approaches for market
                      penetration based on your business model and objectives.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">Risk Assessment</span> - Identification and mitigation of potential
                      market entry challenges.
                    </div>
                  </li>
                </ul>
                <Button className="bg-amber-500 hover:bg-amber-600">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/market-entry.jpg"
                alt="Market Entry Strategy"
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
                alt="Regulatory Compliance"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center order-1 md:order-2">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-700">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-medium">Regulatory Compliance</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                  Navigate Regulatory Landscapes
                </h2>
                <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
                  Ensure compliance with local regulations across Southeast Asian markets while maintaining operational
                  efficiency.
                </p>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">Regulatory Assessment</span> - Comprehensive evaluation of
                      applicable regulations in your target markets.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">Compliance Strategy</span> - Development of tailored compliance
                      frameworks that align with your business goals.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">Ongoing Support</span> - Continuous monitoring of regulatory changes
                      and implementation of necessary adjustments.
                    </div>
                  </li>
                </ul>
                <Button className="bg-amber-500 hover:bg-amber-600">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
                  <span className="text-sm font-medium">Business Development</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                  Accelerate Your Growth
                </h2>
                <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
                  Develop and implement strategies that drive business growth and expand your market presence in
                  Southeast Asia.
                </p>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">Growth Strategy</span> - Tailored roadmaps for sustainable business
                      expansion in your target markets.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">Market Penetration</span> - Tactical approaches to increase market
                      share and customer acquisition.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-amber-100 p-1">
                      <ChevronRight className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium">Performance Monitoring</span> - Continuous evaluation of business
                      metrics to optimize growth strategies.
                    </div>
                  </li>
                </ul>
                <Button className="bg-amber-500 hover:bg-amber-600">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/business-dev.jpg"
                alt="Business Development"
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
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Ready to explore opportunities in Southeast Asia?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Schedule a consultation with our experts to discuss your business objectives.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </>
  )
}
