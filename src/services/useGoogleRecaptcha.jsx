import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export function RecaptchaProviders({ children }) {
  const siteKey = "6LfI-QEpAAAAADGyB4_PzHxZivin-6ehEhr1rFx9";
  return (
    <div className="w-full">
      <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
        {children}
      </GoogleReCaptchaProvider>
    </div>
  );
}
