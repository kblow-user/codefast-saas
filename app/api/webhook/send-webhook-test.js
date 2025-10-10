import fs from "fs";
import fetch from "node-fetch";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_API_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Make sure you have these set in your shell or .env
if (!stripeSecretKey || !webhookSecret) {
  console.error("Set STRIPE_API_KEY and STRIPE_WEBHOOK_SECRET in your env!");
  process.exit(1);
}

const stripe = new Stripe(stripeSecretKey, { apiVersion: "2025-02-11" });

// Read the test event JSON
const payload = fs.readFileSync("./test-event.json", "utf8");

// Generate a valid signature header like Stripe would send
const header = stripe.webhooks.generateTestHeaderString({
  payload,
  secret: webhookSecret,
  timestamp: Math.floor(Date.now() / 1000),
});

const webhookUrl = "http://localhost:3000/api/webhook"; // change if needed

async function sendTestWebhook() {
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Stripe-Signature": header,
    },
    body: payload,
  });

  const text = await res.text();
  console.log("Response from webhook:", text);
}

sendTestWebhook().catch(console.error);
