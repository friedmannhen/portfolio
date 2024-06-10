$(document).foundation();

document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".grid-container.portfolio-index");
  var indicatorUp = document.querySelector(".scroll-indicator-up");
  var indicatorDown = document.querySelector(".scroll-indicator-down");

  function checkScroll() {
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight
    ) {
      indicatorDown.style.display = "none";
    } else {
      indicatorDown.style.display = "block";
    }

    if (container.scrollTop === 0) {
      indicatorUp.style.display = "none";
    } else {
      indicatorUp.style.display = "block";
    }
  }

  container.addEventListener("scroll", checkScroll);

  // Initial check in case content is already scrolled
  checkScroll();
// smily jumpy
  var shortAbout = document.querySelector(".portfolio-me span");
  var smily = document.querySelector(".portfolio-me a i");

  shortAbout.addEventListener("mouseenter", function () {
    smily.classList.add("fa-bounce");
  });

  shortAbout.addEventListener("mouseleave", function () {
    smily.classList.remove("fa-bounce");
  });
});
