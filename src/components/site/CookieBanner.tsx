import CookieConsent from "react-cookie-consent";
import { ShieldCheck, Cookie } from "lucide-react";
import { motion } from "framer-motion";

export default function CookieBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <CookieConsent
        location="bottom"
        buttonText="Accept All"
        declineButtonText="Reject"
        enableDeclineButton
        cookieName="kmb_cookie_consent"
        expires={365}
        disableStyles
        containerClasses="fixed bottom-6 left-1/2 z-[9999] w-[95%] max-w-6xl -translate-x-1/2 rounded-3xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl"
        contentClasses="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between"
        buttonWrapperClasses="flex flex-wrap items-center gap-3"
        buttonClasses="rounded-xl bg-gradient-to-r from-[#163A7D] to-[#3056D3] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
        declineButtonClasses="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100 active:scale-95"
      >
        <div className="flex items-start gap-4">
          {/* Animated Cookie Icon */}
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [0, -8, 8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50"
          >
            <Cookie className="h-7 w-7 text-[#163A7D]" />
          </motion.div>

          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-green-600" />

              <h3 className="text-lg font-bold text-gray-900">Your Privacy Matters</h3>
            </div>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
              KM Biosciences Limited uses cookies to enhance your browsing experience, analyse
              website traffic and improve our services. By clicking <strong>Accept All</strong>, you
              consent to the use of cookies in accordance with our{" "}
              <a
                href="/privacy-policy"
                className="font-semibold text-[#163A7D] underline underline-offset-2 hover:text-[#3056D3]"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/cookie-policy"
                className="font-semibold text-[#163A7D] underline underline-offset-2 hover:text-[#3056D3]"
              >
                Cookie Policy
              </a>
              .
            </p>
          </div>
        </div>
      </CookieConsent>
    </motion.div>
  );
}
