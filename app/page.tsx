import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to "67162110050-9 ปฏิภาณ ไชยคุณ" Shop</h1>
      <Header />
      <Link href="/products/book">Go to Books</Link>
    </div>
  );
}
