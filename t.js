document
  .querySelector(".secondheader-searchlogo")
  .addEventListener("click", (e) => {
    if (parseInt(window.innerWidth) < 987) {
      document.querySelector(".searchbar-logo").style.display = "none";
      document.querySelector(".secondheader-menulogo").style.display = "none";
    }
    document.querySelector(".secondheader-leftside").style.display = "none";
    document.querySelector(".secondheader-rightside").style.display = "none";
    document.querySelector(".secondheader-searchbar").style.display = "flex";
    document
      .querySelector(".secondheader-searchbar")
      .animate([{ opacity: "0" }, { opacity: "1" }], {
        duration: 1500,
        easing: "ease",
      }).onfinish = () => {
      document.querySelector(".secondheader-searchbar").style.opacity = "1";
    };
  });

document
  .querySelector(".secondheader-closebutton")
  .addEventListener("click", (e) => {
    if (parseInt(window.innerWidth) < 987) {
      document.querySelector(".secondheader-menulogo").style.display = "flex";
      console.log("ca marche");
    }
    document.querySelector(".secondheader-leftside").style.display = "flex";
    document.querySelector(".secondheader-rightside").style.display = "flex";

    document.querySelector(".secondheader-searchbar").style.display = "none";
  });

const hamburger = document.querySelector(".secondheader-menulogo");
const menu = document.querySelector(".secondheader-menu");

hamburger.addEventListener("click", (e) => {
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    document
      .querySelector(".secondheader-menulogo img ")
      .setAttribute("src", "images/crossbutton.svg");
    lockScroll();
  } else {
    document
      .querySelector(".secondheader-menulogo img ")
      .setAttribute("src", "images/hamburger.svg");
    unlockScroll();
  }
});
function lockScroll() {
  document.body.style.overflow = "hidden";
}
function unlockScroll() {
  document.body.style.overflow = "";
}

window.addEventListener("resize", (e) => {
  if (parseInt(window.innerWidth) > 987) {
    document.querySelector(".secondheader-menulogo").style.display = "none";
    document.querySelector(".secondheader-menu").classList.remove("open");
    document
      .querySelector(".secondheader-menulogo img ")
      .setAttribute("src", "images/hamburger.svg");
  } else {
    if (
      document.querySelector(".secondheader-searchbar").style.display === "none"
    ) {
      document.querySelector(".secondheader-menulogo").style.display = "flex";
    }
  }
});
