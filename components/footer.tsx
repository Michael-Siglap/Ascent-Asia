"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AnimateInView from "@/components/animate-in-view"
import Logo from "@/components/logo-with-filter"

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <AnimateInView delay={0.1} direction="up">
            <div className="space-y-4">
              <Link href="/" className="flex items-start gap-2">
                <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
                  <Logo white={true} />
                </motion.div>
                <div>
                  <div className="text-lg font-bold text-slate-800 dark:text-white">Ascent Asia Advisory</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Scaling New Heights</div>
                </div>
              </Link>
              <p className="text-slate-500 dark:text-slate-400">
                We facilitate the internationalization of businesses into Singapore and Southeast Asia.
              </p>
              <div className="flex space-x-4">
                <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 500 }}>
                  <Link href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5 text-slate-500 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 500 }}>
                  <Link href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5 text-slate-500 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 500 }}>
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-slate-500 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.2} direction="up">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-white">Services</h3>
              <ul className="space-y-2">
                <motion.li whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 500 }}>
                  <Link
                    href="/services/market-entry"
                    className="text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white"
                  >
                    Market Entry Strategy
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 500 }}>
                  <Link
                    href="/services/regulatory"
                    className="text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white"
                  >
                    Regulatory Compliance
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 500 }}>
                  <Link
                    href="/services/business-development"
                    className="text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white"
                  >
                    Business Development
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 500 }}>
                  <Link
                    href="/services/partnerships"
                    className="text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white"
                  >
                    Strategic Partnerships
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 500 }}>
                  <Link
                    href="/services/advisory"
                    className="text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-white"
                  >
                    Advisory Services
                  </Link>
                </motion.li>
              </ul>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.3} direction="up">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-white">Contact Us</h3>
              <ul className="space-y-3">
                <motion.li
                  className="flex items-start"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <MapPin className="mr-2 h-5 w-5 text-amber-500" />
                  <span className="text-slate-600 dark:text-slate-400">
                    One Raffles Place, #10-62
                    <br />
                    Singapore 048616
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <Phone className="mr-2 h-5 w-5 text-amber-500" />
                  <Link
                    href="tel:+6565123456"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                  >
                    +65 6512 3456
                  </Link>
                </motion.li>
                <motion.li
                  className="flex items-center"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <Mail className="mr-2 h-5 w-5 text-amber-500" />
                  <Link
                    href="mailto:info@ascent.asia"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                  >
                    info@ascent.asia
                  </Link>
                </motion.li>
              </ul>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.4} direction="up">
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
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button className="bg-amber-500 hover:bg-amber-600 w-full">Subscribe</Button>
                </motion.div>
              </div>
            </div>
          </AnimateInView>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <div className="text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Ascent Asia Advisory. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
                <Link
                  href="/privacy"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
                <Link
                  href="/terms"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                >
                  Terms of Service
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
