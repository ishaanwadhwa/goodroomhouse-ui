import Link from "next/link";

export const metadata = {
  title: "The Housemakers — Good Room House, Jaipur",
  description:
    "Founders Ajay Saini and Sahar Saini — the duo shaping Good Room House. Heritage, craft, and modern hospitality.",
  alternates: { canonical: "/team" },
  keywords: [
    "Good Room House founders",
    "Housemakers Jaipur",
    "quiet luxury hospitality India",
  ],
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-primary-dark text-text-inverse px-6 py-28">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8">
          <Link href="/" className="text-sm text-text-light hover:text-accent">← Back</Link>
        </div>
        <h1 className="font-display text-4xl md:text-5xl">The Housemakers</h1>
        <h2 className="sr-only">Founders Ajay Saini and Sahar Saini</h2>
        <p className="mt-2 text-sm italic text-text-inverse/80">Those who built the room — and filled it with soul.</p>
        <p className="mt-6 text-text-inverse/85 max-w-3xl leading-relaxed">
          Behind Good Room House is a duo that blends legacy with instinct — a father’s vision and a daughter’s
          modern sensibility. Together, they’ve created a brand that feels both timeless and alive — where design
          meets emotion, and hospitality feels human again.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 pb-24">
          {/* Ajay */}
          <div className="border border-border bg-background text-text p-8 shadow-soft hover:shadow-deep transition will-change-transform hover:-translate-y-0.5">
            <h3 className="font-display text-2xl">Ajay Saini</h3>
            <p className="text-sm tracking-wide opacity-80">Founder & CEO — The Visionary</p>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed">
              <p>A restaurateur, a storyteller, and the original dreamer behind Good Room House. Ajay built his legacy on understanding what makes a space feel right — not just in its design, but in its soul.</p>
              <p>The architecture of belonging — that’s his craft. His eye for detail and warmth for people define everything the House stands for.</p>
            </div>
            <p className="mt-4 text-xs italic opacity-80">“Every corner should feel like it remembers you.”</p>
          </div>

          {/* Sahar (add left border as divider on large screens) */}
          <div className="border lg:border-l border-border bg-background-soft text-text p-8 shadow-soft hover:shadow-deep transition will-change-transform hover:-translate-y-0.5">
            <h3 className="font-display text-2xl">Sahar Saini</h3>
            <p className="text-sm tracking-wide opacity-80">Founder & COO — The Heart of the House</p>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed">
              <p>The daughter of the vision, and the keeper of its vibe. Sahar brings the pulse — the music, the warmth, the spirit that makes Good Room House come alive.</p>
              <p>She curates not just spaces, but moments — from the scent in the lobby to the energy of an evening. For her, hospitality isn’t service — it’s seduction.</p>
            </div>
            <p className="mt-4 text-xs italic opacity-80">“The vibe is the experience. The experience is everything.”</p>
          </div>
        </div>

        {/* Founders' Note */}
        <section className="mt-16 border-t border-border/50 pt-10 max-w-3xl">
          <h2 className="font-display text-2xl">Founders’ Note</h2>
          <p className="mt-4 text-text-inverse/85 leading-relaxed">
            Good Room House was never meant to be just a hotel. It’s a conversation — between design, desire, and people.
            A place where detail becomes memory, and arrival feels like a return.
          </p>
          <p className="mt-4 text-sm italic text-text-inverse/75">— Ajay & Sahar</p>
        </section>
      </section>
      <footer className="sr-only">
        <nav aria-label="Secondary">
          <a href="/spirit">The Spirit of the House</a>
          <a href="/">Home</a>
        </nav>
      </footer>
    </main>
  );
}


