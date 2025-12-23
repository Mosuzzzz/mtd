import Link from "next/link";

const book = ["HP1", "HP2", "HP3"];

export default function BlogPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Book List</h1>

      <ul>
        {book.map((slug) => (
          <li key={slug}>
            <Link href={`/products/book/${slug}`}>
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
