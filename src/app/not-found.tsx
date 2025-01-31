import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h2 className="text-white text-4xl font-bold mb-4">Not Found</h2>
      <p className="text-white/60 mb-8">Could not find the requested article.</p>
      <Link href="/" className="text-white underline underline-offset-4 hover:text-white/80 transition-colors">
        Return to articles
      </Link>
    </div>
  )
}

