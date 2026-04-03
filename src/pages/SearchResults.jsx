import { Link, useSearchParams } from 'react-router-dom'
import { searchSite, sitePages } from '../data/siteKnowledge'

const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')?.trim() || ''
  const results = query ? searchSite(query, 12) : []
  const featuredPages = sitePages.filter((page) =>
    ['/', '/programs', '/admissions', '/contact', '/login', '/register'].includes(page.path)
  )

  return (
    <div className="min-h-screen bg-slate-50 text-primary-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full bg-primary-100 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-primary-700">
            Site Search
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase tracking-tight text-primary-900 sm:text-5xl">
            {query ? `Results for "${query}"` : 'Search the Website'}
          </h1>
          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-primary-600">
            Find pages, programs, admissions guidance, contact details, alumni information, and
            portal content from across the Bugema University IT Department site.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {query ? (
          results.length ? (
            <div className="space-y-5">
              {results.map((result) => (
                <Link
                  key={result.path}
                  to={result.path}
                  className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg"
                >
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-accent-600">
                    {result.path}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-primary-900">{result.title}</h2>
                  <p className="mt-3 text-base font-medium leading-relaxed text-primary-700">
                    {result.description}
                  </p>
                  <p className="mt-4 rounded-2xl bg-primary-50 px-4 py-3 text-sm text-primary-800">
                    {result.snippet}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-primary-300 bg-white p-8 text-center shadow-sm">
              <h2 className="text-2xl font-black text-primary-900">No matches found</h2>
              <p className="mt-3 text-primary-600">
                Try a broader search like "programs", "admissions", "contact", or "portal".
              </p>
            </div>
          )
        ) : null}

        <div className="mt-12">
          <h2 className="text-2xl font-black uppercase tracking-tight text-primary-900">
            Popular Destinations
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {featuredPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-lg"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-accent-600">
                  {page.path}
                </p>
                <h3 className="mt-2 text-xl font-black text-primary-900">{page.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-700">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SearchResults
