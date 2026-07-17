import CookieConsent from "react-cookie-consent";
import { ShieldCheck, Cookie } from "lucide-react";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Reject"
      enableDeclineButton
      cookieName="kmb_cookie_consent"
      expires={365}
      disableStyles
      containerClasses="fixed bottom-6 left-1/2 z-[9999] w-[95%] max-w-6xl -translate-x-1/2 rounded-3xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl animate-slide-up"
      contentClasses="flex flex-col lg:flex-row items-center gap-5 px-6 py-5"
      buttonWrapperClasses="flex flex-wrap items-center gap-3"
      buttonClasses="rounded-xl bg-gradient-to-r from-[#163A7D] to-[#3056D3] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
      declineButtonClasses="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
          <Cookie className="h-7 w-7 text-[#163A7D]" />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-bold text-gray-900">
              Your Privacy Matters
            </h3>
          </div>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
            KM Biosciences Limited uses cookies to improve your browsing
            experience, analyse website traffic and enhance our services. By
            clicking <strong>Accept All</strong>, you consent to the use of
            cookies in accordance with our Privacy & Cookie Policy.
          </p>
        </div>
      </div>
    </CookieConsent>
  );
}