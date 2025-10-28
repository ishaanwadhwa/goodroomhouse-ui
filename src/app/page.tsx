export const metadata = {
  title: "Where you belong — Good Room House, Jaipur",
  description:
    "A design-led restaurant and boutique hospitality brand in Jaipur. Quiet luxury near City Palace. Join the guest list.",
  alternates: { canonical: "/" },
  keywords: [
    "quiet luxury restaurant Jaipur",
    "boutique dining Jaipur",
    "design-led hospitality India",
    "Good Room House",
  ],
};
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";

export default function Home() {
  return (
    <>
      <Navbar />
      <ComingSoon />
      <footer className="sr-only">
        <nav aria-label="Secondary">
          <a href="/team">The Housemakers</a>
          <a href="/spirit">The Spirit of the House</a>
        </nav>
      </footer>
    </>
  );
}
