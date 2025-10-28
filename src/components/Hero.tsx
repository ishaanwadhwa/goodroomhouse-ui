import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate pt-20 md:pt-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2000&auto=format&fit=crop"
          alt="Restaurant ambience"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background"></div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-40 text-center">
        <h1 className="font-display text-4xl md:text-6xl text-white tracking-wide">
          There is a voice that doesn’t use words
        </h1>
        <p className="mt-4 text-white/90 max-w-2xl mx-auto">
          Listen to it in every detail—wine, poetry, and a table set for wonder.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/reservations" className="px-6 py-3 rounded-md bg-accent text-text-inverse hover:bg-accent-hover transition-colors shadow-soft">
            Reserve a Table
          </Link>
          <Link href="/menu" className="px-6 py-3 rounded-md text-accent ring-1 ring-accent hover:bg-accent/10 transition-colors shadow-soft/0">
            Explore Menu
          </Link>
        </div>
      </div>
    </section>
  );
}


