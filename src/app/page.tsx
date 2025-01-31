import { articles } from "@/data/articles"
import { ArticleCard } from "@/components/article-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main className="max-w-3xl mx-auto px-4 py-16">
        <header className="mb-16">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">KARIM</h1>
          <p className="text-white/60">Thoughts on design, development, and the digital world.</p>
        </header>

        <div className="grid gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  )
}

