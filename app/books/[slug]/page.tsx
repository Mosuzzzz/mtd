import React from 'react';

export default async function BookDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main style={{ padding: 20 }}>
      <h1>Book: {slug}</h1>
    </main>
  );
}
