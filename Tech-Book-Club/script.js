document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href="#membership"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.getElementById("membership");
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
