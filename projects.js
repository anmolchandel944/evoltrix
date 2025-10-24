const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".project-card");

searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const content = card.innerText.toLowerCase();
    card.style.display = content.includes(filter) ? "block" : "none";
  });
});
