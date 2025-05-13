"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useLocale } from "next-intl"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const locale = useLocale()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-start gap-2">
              <div>
                <Image src="/images/logo-white.png" alt="Ascent Asia Advisory" width={40} height={40} />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-800 dark:text-white">Ascent Asia Advisory</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Scaling New Heights</div>
              </div>
            </Link>
            <p className="text-slate-500 dark:text-slate-400">
              We facilitate the internationalization of businesses into Singapore and Southeast Asia.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-slate-500 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-slate-500 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-slate-500 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/services/market-entry`}
                  className="text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white"
                >
                  Market Entry Strategy
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/regulatory`}
                  className="text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white"
                >
                  Regulatory Compliance
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/business-development`}
                  className="text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white"
                >
                  Business Development
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/partnerships`}
                  className="text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white"
                >
                  Strategic Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/advisory`}
                  className="text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white"
                >
                  Advisory Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-amber-500" />
                <span className="text-slate-600 dark:text-slate-400">
                  One Raffles Place, #10-62
                  <br />
                  Singapore 048616
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-amber-500" />
                <Link
                  href="tel:+6565123456"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                >
                  +65 6512 3456
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-amber-500" />
                <Link
                  href="mailto:info@ascent.asia"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                >
                  info@ascent.asia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-white">Subscribe</h3>
            <p className="mb-4 text-slate-500 dark:text-slate-400">
              Stay updated with our newsletter for the latest insights on business in Southeast Asia.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 placeholder:text-slate-500 dark:placeholder:text-slate-500"
              />
              <Button className="bg-amber-500 hover:bg-amber-600 w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <div className="text-slate-500 dark:text-slate-400">
              © {currentYear} Ascent Asia Advisory. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href={`/${locale}/privacy`}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
