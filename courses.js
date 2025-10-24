


const searchCourse = document.getElementById("searchCourse");
const courseCards = document.querySelectorAll(".course-card");

searchCourse.addEventListener("input", () => {
  const query = searchCourse.value.toLowerCase();
  courseCards.forEach(card => {
    const content = card.innerText.toLowerCase();
    card.style.display = content.includes(query) ? "block" : "none";
  });
});
