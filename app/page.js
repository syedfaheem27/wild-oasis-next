import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello Next!</h1>

      <Link href="/cabins">Explore Luxury cabins</Link>
    </>
  );
}
