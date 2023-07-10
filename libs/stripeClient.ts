import { loadStripe, Stripe } from "@stripe/stripe-js";

const { NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY } = process.env;

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }

  return stripePromise;
};
