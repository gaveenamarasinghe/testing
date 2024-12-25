// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const paymentForm = document.getElementById("payment-form");
    const paypalButton = document.getElementById("paypal-btn");
  
    // Form validation logic
    paymentForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission for custom validation
  
      // Get input values
      const cardHolder = document.getElementById("card-holder").value.trim();
      const cardNumber = document.getElementById("card-number").value.trim();
      const expiry = document.getElementById("expiry").value.trim();
      const cvv = document.getElementById("cvv").value.trim();
  
      // Validation checks
      if (!cardHolder || cardHolder.length < 3) {
        alert("Please enter a valid card holder name.");
        return;
      }
      if (!/^\d{16}$/.test(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return;
      }
      if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        alert("Please enter a valid expiry date in MM/YY format.");
        return;
      }
      if (!/^\d{3}$/.test(cvv)) {
        alert("Please enter a valid 3-digit CVV.");
        return;
      }
  
      // If all validations pass
      alert("Payment successful!");
      paymentForm.reset(); // Reset form after submission
    });
  
    // PayPal button interaction
    paypalButton.addEventListener("click", () => {
      alert("Redirecting to PayPal...");
      // Add functionality to redirect to PayPal's payment gateway here
      window.location.href = "https://www.paypal.com";
    });
  });
  