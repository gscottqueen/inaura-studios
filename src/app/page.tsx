
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to Inaura Studios</h1>
        <p>Advanced visualizations for a more engaged world.</p>

        <nav className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Explore Our Sections</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/studio" className="text-blue-600 hover:text-blue-800 underline">
                Studio
              </Link>
            </li>
            <li>
              <Link href="/lab" className="text-blue-600 hover:text-blue-800 underline">
                Lab
              </Link>
            </li>
            <li>
              <Link href="/future-good" className="text-blue-600 hover:text-blue-800 underline">
                Future Good
              </Link>
            </li>
            <li>
              <Link href="/publications" className="text-blue-600 hover:text-blue-800 underline">
                Publications
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <footer />
    </div>
  );
}
