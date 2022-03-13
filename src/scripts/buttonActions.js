import barba from "@barba/core";
import { futurePage } from "./nav.js";

//transition progress
barba.hooks.after(() => {
  if (futurePage == "index1") {
    let buttonMP = document.getElementById("button1");

    buttonMP.addEventListener(
      "click",
      () => {
        barba.go("/info.html");
      },
      false
    );
  }
  if (futurePage == "index2") {
    let buttonIP = document.getElementById("button2");

    buttonIP.addEventListener(
      "click",
      () => {
        barba.go("/offer.html");
      },
      false
    );
  }
  if (futurePage == "index3") {
    console.log("heeereeee");
    let buttonPP1 = document.getElementById("button3");
    let buttonPP2 = document.getElementById("button4");
    let buttonQM = document.getElementsByClassName("question_marker")[0];

    let btnSwiper1 = document.getElementById("button3s");
    let btnSwiper2 = document.getElementById("button4s");

    //marker page

    buttonQM.addEventListener(
      "click",
      () => {
        animationEnter();
      },
      false
    );

    //form1 page
    buttonPP1.addEventListener(
      "click",
      () => {
        animationEnter();
        barba.go("/form1.html");
      },
      false
    );
    btnSwiper1.addEventListener(
      "click",
      () => {
        animationEnter();
        barba.go("/form1.html");
      },
      false
    );
    //form2 page
    buttonPP2.addEventListener(
      "click",
      () => {
        animationEnter();
        barba.go("/form2.html");
      },
      false
    );
    btnSwiper2.addEventListener(
      "click",
      () => {
        animationEnter();
        barba.go("/form2.html");
      },
      false
    );
  }
});

//handle reload actions
window.addEventListener("load", () => {
  if (
    document.location.pathname == "/index.html" ||
    document.location.pathname == "/"
  ) {
    let buttonMP = document.getElementById("button1");

    buttonMP.addEventListener(
      "click",
      () => {
        barba.go("/info.html");
      },
      false
    );
  }
  if (document.location.pathname == "/info.html") {
    let buttonIP = document.getElementById("button2");

    buttonIP.addEventListener(
      "click",
      () => {
        barba.go("/offer.html");
      },
      false
    );
  }
  if (document.location.pathname == "/offer.html") {
    let buttonPP1 = document.getElementById("button3");
    let buttonPP2 = document.getElementById("button4");
    let buttonQM = document.getElementsByClassName("question_marker")[0];

    //marker page
    buttonQM.addEventListener(
      "click",
      () => {
        animationEnter();
        barba.go("/marker.html");
      },
      false
    );

    //form1 page
    buttonPP1.addEventListener(
      "click",
      () => {
        animationEnter();
        barba.go("/form1.html");
      },
      false
    );
    //form2 page
    buttonPP2.addEventListener(
      "click",
      () => {
        animationEnter();
        barba.go("/form2.html");
      },
      false
    );
  }
});

function animationEnter() {
  console.log("enterAn");
  let menu = document.getElementById("menu_wrapper");
  console.log(menu);
  menu.classList.remove("opacityUp");
  menu.classList.add("opacityDown");
  console.log(menu);

  let page = document.getElementsByClassName("index3")[0];
  page.style.overflow = "visible";

  setTimeout(() => {
    menu.style.display = "none";
  }, 1000);
}
