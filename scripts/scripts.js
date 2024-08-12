// Toggle responsive nav
const navSlide = () => {
  const sandwich = document.querySelector(".sandwich");
  const navLists = document.querySelector("nav");

  // Toggle the 'nav-active' class when the sandwich is clicked
  sandwich.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    sandwich.classList.toggle("toggle-sandwich");
  });
};

navSlide();
