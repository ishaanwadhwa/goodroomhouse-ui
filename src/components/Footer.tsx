import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 text-sm">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg text-brand">The good room house</h3>
          <p className="mt-2 text-foreground/70">Duayeri Mah. B. Hayrettin Sok. No: 25 50400 Urgup / Nevsehir / Turkey</p>
          <p className="mt-1">Phone: <a href="tel:+903843414422" className="hover:text-brand">+90 384 341 44 22</a></p>
          <p className="mt-1">E-mail: <a href="mailto:info@example.com" className="hover:text-brand">info@example.com</a></p>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">Explore</h4>
          <nav className="flex flex-col gap-1 text-foreground/80">
            <Link href="/menu" className="hover:text-brand">Menu</Link>
            <Link href="/reservations" className="hover:text-brand">Reservations</Link>
            <Link href="/events" className="hover:text-brand">Events</Link>
            <Link href="/gallery" className="hover:text-brand">Gallery</Link>
            <Link href="/about" className="hover:text-brand">About</Link>
            <Link href="/contact" className="hover:text-brand">Contact</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-medium">Legal</h4>
          <ul className="space-y-1 text-foreground/80">
            <li><Link href="#" className="hover:text-brand">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-brand">Terms of Use</Link></li>
            <li><Link href="#" className="hover:text-brand">Cancellation Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-foreground/60">© {new Date().getFullYear()} The good room house. All rights reserved.</div>
    </footer>
  );
}


