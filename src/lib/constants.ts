type Socials = {
  x: string;
  instagram: string;
  facebook: string;
};

const socials: Socials = {
  x: "https://x.com/webfrst",
  instagram: "https://www.instagram.com/webfrst",
  facebook: "https://www.facebook.com/webfrst",
};

// Helper function to safely get environment variables
const getEnv = (key: string, fallback: string = ""): string => {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return import.meta.env[key] || fallback;
  }
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] || fallback;
  }
  return fallback;
};

export const constants = {
    RESEND_API_KEY: getEnv("RESEND_API_KEY"),
    RESEND_AUDIENCE_ID: getEnv("RESEND_AUDIENCE_ID"),
    RESEND_ACTIONS_KEY: getEnv("RESEND_ACTIONS_KEY"),
    TURNSTILE_SITE_KEY: getEnv("TURNSTILE_SITE_KEY", "Add your Turnstile Site Key"),
    TURNSTILE_SECRET_KEY: getEnv("TURNSTILE_SECRET_KEY"),
    OPENPANEL_CLIENT_ID: getEnv("OPENPANEL_CLIENT_ID"),

  BRAND_NAME: "FRST",
  CONTACT_EMAIL: "hi@frst.uk",
  SUPPORT_EMAIL: "halp@frst.uk",
  SOCIALS: socials,
};
