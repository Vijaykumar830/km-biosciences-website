import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Reject"
      enableDeclineButton
      cookieName="kmb_cookie_consent"
      style={{
        background: "#163A7D",
      }}
      buttonStyle={{
        background: "#ffffff",
        color: "#163A7D",
        borderRadius: "8px",
        padding: "10px 18px",
      }}
      declineButtonStyle={{
        background: "#444",
        color: "#fff",
        borderRadius: "8px",
        padding: "10px 18px",
      }}
    >
      We use cookies to improve your browsing experience, analyse website traffic,
      and enhance our services. By clicking "Accept All", you consent to our use
      of cookies. You can change your preferences at any time.
    </CookieConsent>
  );
}