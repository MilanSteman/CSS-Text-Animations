const allSlideUpElements = document.querySelectorAll(".slide-up > span span");

setTimeout(() => {
  allSlideUpElements.forEach((element) => {
    element.style.transform = "translate(0, 0)";
  });
}, 500);
