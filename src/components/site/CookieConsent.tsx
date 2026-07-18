import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
const STORAGE_KEY = "kmb-cookie-consent";
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);
  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, at: new Date().toISOString() }),
      );
    } catch {
      /* ignore */
    }
    setVisible(false);
  };
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie preferences"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white/95 shadow-card backdrop-blur">
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full grad-brand text-white shadow-soft">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="flex-1 text-sm text-[color:var(--ink)]/80">
                <p className="font-semibold text-[color:var(--ink)]">
                  We use cookies to optimise performance
                </p>
                <p className="mt-1">
                  KM Biosciences uses essential and analytics cookies to enhance
                  site speed, remember preferences and improve your experience.
                  See our compliance page for details.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
                <button
                  onClick={() => decide("declined")}
                  className="rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--ink)] transition hover:bg-[color:var(--secondary)]"
                >
                  Decline
                </button>
                <button
                  onClick={() => decide("accepted")}
                  className="rounded-full grad-button px-5 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Accept cookies
                </button>
                <button
                  onClick={() => decide("declined")}
                  aria-label="Close"
                  className="ml-1 hidden rounded-full p-2 text-[color:var(--ink)]/60 hover:bg-[color:var(--secondary)] sm:inline-flex"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}