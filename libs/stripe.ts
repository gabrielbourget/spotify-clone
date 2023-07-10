import Stripe from "stripe";

const { STRIPE_SECRET_KEY } = process.env;

export const stripe = new Stripe(
  STRIPE_SECRET_KEY!,
  {
    apiVersion: "2022-11-15",
    appInfo: {
      name: "Spotify Clone",
      version: "0.1.0",
    }
  }
);
