import type { Article } from "@/types/article"
import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.id}`}
      className="group block overflow-hidden rounded-lg border border-white/10 hover:border-white/20 transition-colors"
    >
      <div className="aspect-[2/1] relative overflow-hidden">
        <Image
          src={article.coverImage || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-white/60 mb-3">
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>•</span>
          <span>{article.readingTime}</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">{article.title}</h2>
        <p className="text-white/80">{article.excerpt}</p>
      </div>
    </Link>
  )
}

