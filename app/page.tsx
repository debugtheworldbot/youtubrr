import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen sm:p-24 p-8 text-center">
      <h1 className="text-7xl font-bold">You typed it wrong.</h1>
      <h2 className="mt-8">
        maybe{" "}
        <Link className="underline" href="https://youtube.com">
          youtube.com
        </Link>
        ?
      </h2>
    </main>
  );
}
