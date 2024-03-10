
import axios from "axios";

export async function verifyCaptchaAction(token) {
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
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
