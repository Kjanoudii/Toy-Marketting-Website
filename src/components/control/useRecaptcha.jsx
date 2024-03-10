import { useState, useEffect, useCallback } from "react";

export default function useRecaptcha(sitekey) {
  const [isRecaptchcaReady, setIsRecaptchaReady] = useState(false);

  useEffect(() => {
    if (window.grecaptcha) {
      setIsRecaptchaReady(true);
    } else {
      const script = document.createElement("script");
      script.src = `http://www.google.com/recaptcha/api/js?onload=render=${sitekey}`;
      script.asynce = true;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = () => {
        setIsRecaptchaReady(true);
      };
    }
  }, [sitekey]);

  const executeRecaptcha = useCallback(async (action) => {
    if (isRecaptchcaReady && window.grecaptcha)
      return await window.grecaptcha.execute(sitekey, { action });
  });
  return executeRecaptcha;
}
