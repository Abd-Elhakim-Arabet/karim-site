import { articles } from '@/data/articles';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params; // Await the params promise
  const articleId = resolvedParams.id;

  const article = articles.find((article) => article.id === articleId);

  if (!article) {
    return notFound(); // Ensure it's called when article is not found
  }

  return (
    <div className="min-h-screen bg-black">
      <main className="max-w-3xl mx-auto px-4 py-16">
        <Link 
          href="/" 
          className="inline-flex items-center text-white/60 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to articles
        </Link>

        <article className="prose prose-invert">
          <div className="not-prose rounded-lg overflow-hidden mb-8 aspect-[2/1] relative">
            <Image
              src={article.coverImage || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <header className="mb-8 not-prose">
            <div className="flex items-center gap-3 text-sm text-white/60 mb-4">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{article.readingTime}</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
          </header>

          <div className="text-white/80">
            <p className="text-lg mb-6">{article.excerpt}</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Introduction</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Main Points</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>First important point about {article.title}</li>
              <li>Second crucial aspect to consider</li>
              <li>Third key element of the discussion</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}