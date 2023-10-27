window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navBar");
  if (window.scrollY > 370) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  const navButton = document.getElementById("start");
  if (window.scrollY > 370) {
    navButton.classList.add("scrolled");
  } else {
    navButton.classList.remove("scrolled");
  }
});
