// NOVA ROBOTICS starter interactions.
// Replace this placeholder with an email address you control before publishing.
const CONTACT_EMAIL = "yourname@gmail.com";

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "Close ✕" : "Menu ☰";
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "Menu ☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (CONTACT_EMAIL === "replace-with-your-email@example.com") {
    alert("Before using the contact form, open script.js and replace CONTACT_EMAIL with an email address you control. The form does not send or store information by itself.");
    return;
  }
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`NOVA ROBOTICS inquiry: ${form.get("interest")}`);
  const body = encodeURIComponent(
    `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nInterest: ${form.get("interest")}\n\nMessage:\n${form.get("message")}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
