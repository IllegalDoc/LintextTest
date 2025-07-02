document
  .querySelector(".secondheader-searchlogo")
  .addEventListener("click", (e) => {
    document.querySelector(".secondheader-rightside").style.display = "none";
    document
      .querySelectorAll(".secondheader-leftside>:not(.secondheader-logo")
      .forEach((element) => {
        element.style.display = "none";
      });
    document.querySelector(".secondheader-searchbar").style.display = "flex";
    document
      .querySelector(".secondheader-searchbar")
      .animate([{ opacity: "0" }, { opacity: "1" }], {
        duration: 1500,
        easing: "ease",
      }).onfinish = () => {
      document.querySelector(".secondheader-searchbar").style.opacity = "1";
    };

    document.querySelector(".secondheader-leftside ").style.flex = "initial";
    document.querySelector(".secondheader-flex").style.alignItems = "center";
    document.querySelector(".secondheader-flex").style.gap = "110px";
  });

document
  .querySelector(".secondheader-closebutton")
  .addEventListener("click", (e) => {
    document.querySelector(".secondheader-leftside ").style.flex = "1";
    document.querySelector(".secondheader-flex").style.alignItems = "initial";
    document.querySelector(".secondheader-flex").style.gap = "0";

    document
      .querySelector(".secondheader-searchbar")
      .animate([{ opacity: "1" }, { opacity: "0" }], {
        duration: 2000,
        easing: "ease",
      }).onfinish = () => {
      document.querySelector(".secondheader-searchbar").style.opacity = "0";
    };
    document.querySelector(".secondheader-rightside").style.display = "flex";
    document
      .querySelectorAll(".secondheader-leftside>:not(.secondheader-logo")
      .forEach((element) => {
        element.style.display = "flex";
      });
    document.querySelector(".secondheader-searchbar").style.display = "none";
  });
