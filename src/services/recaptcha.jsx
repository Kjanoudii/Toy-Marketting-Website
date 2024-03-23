"use server";

import axios from "axios";

export async function verifyCaptchaAction(token) {
  const secretKey = "6LfI-QEpAAAAAJNHpWtx1WHiqRhDFIRGcCbUl6du";
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    );

    const { success, score } = response.data;

    if (success && score > 0.5) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return false;
  }
}
