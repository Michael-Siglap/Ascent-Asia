export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="max-w-2xl mb-8">
        We're currently updating our about page. Please check back soon for more information about our company.
      </p>
      <a
        href={`/${locale}`}
        className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
      >
        Return to Home
      </a>
    </div>
  )
}
