import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51M8AOfGDXd6MgxzGLAvnRNiF7jLEv4b2cnZPmonIRB4LeBKpJeBNZdwPUyqUCZ3UVeXlT6TCPtrEaOBGHlpksdd200laERszUa"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div
        style={{
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: !stripe ? "#ccc" : "#5469d4",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: !stripe ? "not-allowed" : "pointer",
          fontWeight: "500",
        }}
      >
        Pay $10.00
      </button>
    </form>
  );
};

const StripeCheckoutForm = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1234567890', // Replace with your actual price ID
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/pay`,
    });

    if (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <button
        onClick={handleCheckout}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#635bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        Buy with Stripe Checkout
      </button>
    </div>
  );
};

const PaymentLinkButton = () => {
  const handlePaymentLink = () => {
    // Replace with your actual Stripe Payment Link
    window.open('https://buy.stripe.com/test_your_payment_link_here', '_blank');
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <button
        onClick={handlePaymentLink}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#00d924",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        Pay via Payment Link
      </button>
    </div>
  );
};

const PayPage = () => {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Georgia, serif",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          color: "#333",
          fontSize: "2.5rem",
        }}
      >
        Payment Options for Static Sites
      </h1>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
        
        {/* Option 1: CardElement */}
        <div style={{ padding: "2rem", border: "1px solid #e0e0e0", borderRadius: "8px" }}>
          <h2 style={{ color: "#333", marginBottom: "1rem" }}>1. Card Element</h2>
          <p style={{ color: "#666", marginBottom: "1rem", lineHeight: "1.5" }}>
            <strong>Best for:</strong> Custom payment forms with full control over styling and UX.
            Collects payment method details but requires backend to process payments.
          </p>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>

        {/* Option 2: Stripe Checkout */}
        <div style={{ padding: "2rem", border: "1px solid #e0e0e0", borderRadius: "8px" }}>
          <h2 style={{ color: "#333", marginBottom: "1rem" }}>2. Stripe Checkout</h2>
          <p style={{ color: "#666", marginBottom: "1rem", lineHeight: "1.5" }}>
            <strong>Best for:</strong> Quick setup with hosted payment pages. Redirects users to Stripe's 
            secure checkout page. Handles payment processing automatically.
          </p>
          <StripeCheckoutForm />
        </div>

        {/* Option 3: Payment Links */}
        <div style={{ padding: "2rem", border: "1px solid #e0e0e0", borderRadius: "8px" }}>
          <h2 style={{ color: "#333", marginBottom: "1rem" }}>3. Payment Links</h2>
          <p style={{ color: "#666", marginBottom: "1rem", lineHeight: "1.5" }}>
            <strong>Best for:</strong> Simplest option - no code required. Create payment links in 
            Stripe Dashboard. Perfect for static sites with no backend.
          </p>
          <PaymentLinkButton />
        </div>

      </div>

      {/* Comparison Table */}
      <div style={{ marginTop: "3rem", padding: "2rem", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
        <h2 style={{ color: "#333", marginBottom: "2rem", textAlign: "center" }}>Comparison</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#e9ecef" }}>
                <th style={{ padding: "0.75rem", textAlign: "left", border: "1px solid #dee2e6" }}>Method</th>
                <th style={{ padding: "0.75rem", textAlign: "left", border: "1px solid #dee2e6" }}>Backend Required</th>
                <th style={{ padding: "0.75rem", textAlign: "left", border: "1px solid #dee2e6" }}>Customization</th>
                <th style={{ padding: "0.75rem", textAlign: "left", border: "1px solid #dee2e6" }}>Setup Complexity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Card Element</td>
                <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Yes</td>
                <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>High</td>
                <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Medium</td>
              </tr>
              <tr style={{ backgroundColor: "#f8f9fa" }}>
                <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Stripe Checkout</td>
                <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Minimal</td>
                <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Medium</td>
                <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Low</td>
              </tr>
              <tr>
                <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Payment Links</td>
                <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>No</td>
                <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Low</td>
                <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Very Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PayPage;
