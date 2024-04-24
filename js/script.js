document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});


function supernova_slider() {
  let nextBtn = document.querySelector(".gallery .buttons .next"),
    prevBtn = document.querySelector(".gallery .buttons .prev"),
    slide = document.querySelectorAll(".gallery .photos .block"),
    i = 0;

  prevBtn.onclick = (event) => {
    event.preventDefault();

    slide[i].classList.remove("active");
    i--;

    if (i < 0) {
      i = slide.length - 1;
    }
    slide[i].classList.add("active");
  };

  nextBtn.onclick = (event) => {
    event.preventDefault();

    slide[i].classList.remove("active");
    i++;

    if (i >= slide.length) {
      i = 0;
    }

    slide[i].classList.add("active");
  };

  slider_callback();
  let sliderInterval = window.setInterval(slider_callback, 3000);

  function slider_callback() {
    nextBtn.click();
  }
}

supernova_slider();