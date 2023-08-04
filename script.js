/* target elements menu-links and hamburger-icon and add or remove the open class*/
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function newTabLinkedIn() {
  window.open(
    "https://www.linkedin.com/in/chang-spencer/",
    "_blank",
    "noopener noreferrer"
  );
}

function newTabGitHub() {
  window.open(
    "https://github.com/spencerchang129?tab=repositories",
    "_blank",
    "noopener noreferrer"
  );
}
