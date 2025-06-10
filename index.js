const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email-input");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (e) {
  const email = emailInput.value;

  if (localStorage.getItem("submittedEmail") === email) {
    e.preventDefault();
    errorMessage.style.display = "block";
    return false;
  }

  localStorage.setItem("submittedEmail", email);
  errorMessage.style.display = "none";

  setTimeout(() => {
    form.style.display = "none";
    document.getElementById("thank-you-message").style.display = "block";
  }, 500);
});
