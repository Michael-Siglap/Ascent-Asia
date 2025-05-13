"use client"

import LoadingSpinner from "@/components/loading-spinner"

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-900">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white">Loading...</h2>
        <p className="text-slate-500 dark:text-slate-400">Please wait while we prepare your experience</p>
      </div>
    </div>
  )
}
