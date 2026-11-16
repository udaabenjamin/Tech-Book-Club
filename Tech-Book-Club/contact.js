document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enterprise-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    document.getElementById("form-status").textContent =
      "Your details passed the form checks. This demo is not connected to an inquiry service, so nothing has been sent.";
  });
});
