import Link from "next/link";

export const metadata = {
  title: "The Blueprint — Good Room House, Jaipur",
  description:
    "Our vision and philosophy — hospitality that moves you, not just serves you. Quiet luxury near City Palace, Jaipur.",
  alternates: { canonical: "/spirit" },
  keywords: [
    "brand vision Good Room House",
    "The Blueprint Jaipur",
    "design-led hospitality philosophy",
  ],
};

export default function SpiritPage() {
  return (
    <main className="min-h-screen bg-primary-dark text-text-inverse px-6 py-28">
      <section className="mx-auto max-w-3xl text-center">
        <div className="mb-8 text-left">
          <Link href="/" className="text-sm text-text-light hover:text-accent">← Back</Link>
        </div>
        <h1 className="font-display text-4xl md:text-5xl">The Blueprint</h1>
        <h2 className="sr-only">Brand vision and philosophy</h2>
        <p className="mt-4 text-text-inverse/90 leading-relaxed">
          Every house begins with a vision. Ours was simple — to create a space that feels both rare and real.
          A place where light, texture, and time move slowly. The Blueprint is our guiding belief: hospitality
          should move you, not just serve you.
        </p>
        <p className="mt-8 text-sm italic text-text-inverse/80">“Built on belonging. Designed for meaning.”</p>
      </section>
      <footer className="sr-only">
        <nav aria-label="Secondary">
          <a href="/team">The Housemakers</a>
          <a href="/">Home</a>
        </nav>
      </footer>
    </main>
  );
}


