document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const footerText = document.querySelector(".footer p");

  if (footerText) {
    footerText.textContent = `© ${currentYear} My Portfolio`;
  }
});