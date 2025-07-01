document
  .querySelector(".secondheader-searchlogo")
  .addEventListener("click", (e) => {
    document.querySelector(".secondheader-rightside").style.display = "none";
    document
      .querySelectorAll(".secondheader-leftside>:not(.secondheader-logo")
      .forEach((element) => {
        element.style.display = "none";
      });
  });
