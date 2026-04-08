import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">BuyBuy Store</h1>
      <p className="mt-2">Welcome to the Next.js version.</p>
      <Link href="/home" className="underline">
        Enter Store
      </Link>
    </div>
  );
}