"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary-dark text-text-inverse overflow-hidden">
      {/* background texture + vignette */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.6)_100%)]" />

      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12">
          <motion.div className="relative" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            {/* subtle glow behind logo */}
            <span className="pointer-events-none absolute inset-0 blur-3xl opacity-20" style={{ background: "radial-gradient(40% 40% at 50% 60%, #C4A26C33 0%, transparent 70%)" }} />
            <Image src="/logo.png" alt="Good Room House" width={1400} height={350} priority className="relative mx-auto h-auto w-72 md:w-96 lg:w-[36rem]" />
          </motion.div>

          <div className="w-full md:ml-12">
          <motion.h1
            className="mt-2 md:mt-4 font-display text-4xl md:text-6xl tracking-[0.02em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            Where you belong.
          </motion.h1>

          <motion.p
            className="mt-4 md:mt-6 max-w-2xl mx-auto font-body text-text-inverse/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Not another hotel. A home for those who crave story, space, and substance. A new era of soulful, design-led hospitality — built on belonging, not branding.
          </motion.p>

          <motion.form
            onSubmit={onSubmit}
            className="mt-8 md:mt-10 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-11 md:h-12 px-4 w-72 md:w-96 bg-transparent border border-accent-gold text-text-inverse placeholder:text-text-inverse/60 focus:outline-none focus:ring-1 focus:ring-accent-gold focus:border-accent-gold transition"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="h-11 md:h-12 px-6 border border-accent-gold text-text-inverse bg-transparent hover:bg-accent-gold hover:text-primary-dark transition-colors uppercase tracking-widest text-xs md:text-sm font-medium"
            >
              {status === "loading" ? "Joining…" : "Join"}
            </button>
          </motion.form>

          <p className="mt-8 md:mt-10 text-xs italic text-text-inverse/70">“Quiet luxury isn’t about having more. It’s about feeling more.”</p>

          {status === "success" && (
            <p className="text-sm text-accent" aria-live="polite">Thanks — we\'ll be in touch.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-accent" aria-live="polite">Please enter a valid email.</p>
          )}

          </div>

          <p className="pt-6 text-xs text-text-light">GOOD ROOM HOUSE © {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
}


