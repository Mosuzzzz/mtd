import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BookDetail({ params }: Props) {
  const { slug } = await params;

  return (
    <main style={{ padding: 20 }}>
      <h1>Book Detail</h1>
      <p>Slug: {slug}</p>
      <Image
        src={`/${slug}.png`}
        alt={slug}
        width={500}
        height={500}
      />
    </main>
  );
}