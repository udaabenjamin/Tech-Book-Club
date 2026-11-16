document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tier = params.get("tier") === "pro" ? "pro" : "starter";
  const plans = {
    starter: {
      name: "Starter membership",
      price: "$19",
      benefits: ["1 book/month", "Online forums"],
    },
    pro: {
      name: "Pro membership",
      price: "$29",
      benefits: ["2 books/month", "Virtual meetups"],
    },
  };
  const plan = plans[tier];
  document.title = `${plan.name} checkout — Tech Book Club`;
  document.getElementById("selected-plan").textContent = plan.name;
  document.getElementById("plan-price").innerHTML =
    `${plan.price} <small>/ month</small>`;
  const list = document.getElementById("plan-benefits");
  list.replaceChildren(
    ...plan.benefits.map((benefit) => {
      const item = document.createElement("li");
      item.textContent = benefit;
      return item;
    }),
  );
});
