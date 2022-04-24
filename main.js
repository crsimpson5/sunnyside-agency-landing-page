const headerNav = document.querySelector(".header .nav");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  if (headerNav.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  headerNav.classList.add("open");
  document.body.addEventListener("click", clickOut);
  arrow.classList.add("paused");
}

function closeMenu() {
  headerNav.classList.remove("open");
  document.body.removeEventListener("click", clickOut);
  arrow.classList.remove("paused");
}

function clickOut(e) {
  const path = e.composedPath();

  if (path.some((el) => el.classList?.contains("hamburger"))) {
    return;
  }

  closeMenu();
}

hamburger.addEventListener("click", toggleMenu);

const mainContent = document.getElementById("main-content");
const arrow = document.querySelector(".arrow-down");

// Stop arrow animation after scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        arrow.classList.add("paused");
        observer.disconnect();
      }
    });
  },
  {
    threshold: 0.1
  }
);

observer.observe(mainContent);
