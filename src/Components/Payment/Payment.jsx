import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { total = 0, carts = [] } = state || {}; // Default to prevent errors
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  // const handleApprove = (orderId) => {
  //   // Save payment and cart data to history
  //   const history = JSON.parse(localStorage.getItem("history")) || [];
  //   const updatedHistory = [
  //     ...history,
  //     {
  //       orderId,
  //       items: carts,
  //       total,
  //     },
  //   ];
  //   localStorage.setItem("history", JSON.stringify(updatedHistory));

  //   // Clear cart
  //   localStorage.removeItem("cart");

  //   // Set payment as completed and navigate to history page with a reload
  //   setPaymentCompleted(true);
  //   setTimeout(() => {
  //     navigate("/history", { replace: true });
  //     window.location.reload(); // Reload the page
  //   }, 500); // Slight delay to ensure navigation completes
  // };

  const handleApprove = (orderId) => {
    // Fetch the cart data from localStorage before storing it in history
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Carts Data Before Saving:", storedCart);
  
    const history = JSON.parse(localStorage.getItem("history")) || [];
    const updatedHistory = [
      ...history,
      { orderId, items: storedCart, total },
    ];
  
    console.log("Updated History Data:", updatedHistory);
  
    // Save the updated history to localStorage
    localStorage.setItem("history", JSON.stringify(updatedHistory));
  
    // Clear the cart after payment
    localStorage.removeItem("cart");
  
    navigate("/history", { replace: true });

    window.location.reload();
  };
  
  

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AWDNXIOJlhhXL7JVh_CFqhPEycV-0R8tlMcKZ3GRX4kAIjYkeuzBQo6Z264NkDgQRqA4jHTAr2NKKRB_",
      }}
    >
      <div
        className="payment-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "200px",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Complete Your Payment</h3>
        <div style={{ marginBottom: "20px" }}>
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
        <div style={{ marginBottom: "20px", width: "400px" }}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: (total + 10).toFixed(2), // Include shipping
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                handleApprove(details.id); // Pass the order ID
              });
            }}
            onError={(err) => {
              console.error("Payment Error:", err);
              alert("An error occurred during the payment process.");
            }}
          />
        </div>
        {paymentCompleted && (
          <h2>Payment Successful! Redirecting to history...</h2>
        )}
      </div>
    </PayPalScriptProvider>
  );
};

export default Payment;
