import barba from "@barba/core";
import { deviceDetection } from "./deviceDetect.js";
/*GET ACTUAL PAGE AFTER RELOAD */
let pageAfterReload = document.getElementsByTagName("main")[0].className;
console.log("after reload: " + pageAfterReload);

/*GET ACTUAL PAGE CLASS*/
barba.hooks.before((data) => {
  let pages = {
    next: data.next.container.className,
    current: data.current.container.className,
  };
  deviceResolving(pages, undefined);
});

/*GET FUTURE PAGE CLASS*/
export let futurePage = undefined;
barba.hooks.before((data) => {
  futurePage = data.next.container.className;
});

/*/////////////////////////////////////////////Arrow nav//////////////////////////////////////////////*/
let mobileNav = document.getElementsByClassName("navMobile_wrapper")[0];
let pcDotNav = document.getElementsByClassName("dotWrapper")[0];
//eventlisteners
document
  .getElementsByTagName("body")[0]
  .addEventListener("load", menuBoldAnimation(undefined));
document
  .getElementsByTagName("body")[0]
  .addEventListener("load", menuClosing());
document
  .getElementsByTagName("body")[0]
  .addEventListener("load", deviceResolving(undefined, pageAfterReload));
window.addEventListener("resize", actionTrigger);
window.addEventListener("resize", menuClosing);

function actionTrigger() {
  let actualPage = document.getElementsByTagName("main")[0].className;
  deviceResolving(undefined, actualPage);
}

//hide-show nav
function deviceResolving(data, actPage) {
  if (
    deviceDetection() &&
    document.location.pathname != "/marker.html" &&
    document.location.pathname != "/references.html" &&
    document.location.pathname != "/aboutus.html" &&
    document.location.pathname != "/contact.html" &&
    document.location.pathname != "/form1.html" &&
    document.location.pathname != "/form2.html"
  ) {
    mobileNav.style.display = "initial";
    pcDotNav.style.display = "none";

    arrowNavigation(data, actPage);
  } else {
    mobileNav.style.display = "none";
    if (
      document.location.pathname != "/marker.html" &&
      document.location.pathname != "/references.html" &&
      document.location.pathname != "/aboutus.html" &&
      document.location.pathname != "/contact.html" &&
      document.location.pathname != "/form1.html" &&
      document.location.pathname != "/form2.html"
    ) {
      pcDotNav.style.display = "initial";
    }
  }
}

//hide-show arrows => according to page
function arrowNavigation(data = undefined, actPage = undefined) {
  let line = document.getElementsByClassName("line");
  if (data === undefined && actPage !== undefined) {
    if (actPage === "index1") {
      line[0].style.display = "none";
      line[1].style.display = "none";
      line[2].style.display = "inherit";
      line[3].style.display = "inherit";
    }
    if (actPage === "index2") {
      line[0].style.display = "inherit";
      line[1].style.display = "inherit";
      line[2].style.display = "inherit";
      line[3].style.display = "inherit";
    }
    if (actPage === "index3") {
      line[0].style.display = "inherit";
      line[1].style.display = "inherit";
      line[2].style.display = "none";
      line[3].style.display = "none";
    }
  }
  if (data !== undefined) {
    if (data.next === "index1") {
      line[0].style.display = "none";
      line[1].style.display = "none";
      line[2].style.display = "inherit";
      line[3].style.display = "inherit";
    }
    if (data.next === "index2") {
      line[0].style.display = "inherit";
      line[1].style.display = "inherit";
      line[2].style.display = "inherit";
      line[3].style.display = "inherit";
    }
    if (data.next === "index3") {
      line[0].style.display = "inherit";
      line[1].style.display = "inherit";
      line[2].style.display = "none";
      line[3].style.display = "none";
    }
  }
}

//add href to arrows
let up = document.getElementById("up");
let down = document.getElementById("down");

up.addEventListener("click", setEventUp);
down.addEventListener("click", setEventDown);

function setEventUp() {
  let actualPage = document.getElementsByTagName("main")[0].className;

  switch (actualPage) {
    case "index1":
      barba.go("/index.html");
      break;

    case "index2":
      barba.go("/index.html");
      break;

    case "index3":
      barba.go("/info.html");
      break;
  }
}

function setEventDown() {
  let actualPage = document.getElementsByTagName("main")[0].className;

  switch (actualPage) {
    case "index1":
      barba.go("/info.html");
      break;

    case "index2":
      barba.go("/offer.html");
      break;

    case "index3":
      barba.go("/offer.html");
      break;
  }
}
/*////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*LOGO EVENTLISTENER*/
document.getElementsByClassName("logo")[0].addEventListener(
  "click",
  () => {
    barba.go("/index.html");
  },
  false
);
/*////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* NAV ANIMATION */
function menuClosing() {
  console.log("menuclosing");
  let opt1 = document.getElementById("1hmb");
  let opt2 = document.getElementById("2hmb");
  let opt3 = document.getElementById("3hmb");
  let opt4 = document.getElementById("4hmb");

  opt1.addEventListener(
    "click",
    () => {
      animation();
    },
    false
  );
  opt2.addEventListener(
    "click",
    () => {
      animation();
    },
    false
  );
  opt3.addEventListener(
    "click",
    () => {
      animation();
    },
    false
  );
  opt4.addEventListener(
    "click",
    () => {
      animation();
    },
    false
  );

  function animation() {
    let hmbMenu =
      document.getElementsByClassName("toggleMenu")[0].firstElementChild;
    if (hmbMenu.checked == true) {
      setTimeout(() => {
        console.log("došlo");
        hmbMenu.checked = false;
      }, 1000);
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////
barba.hooks.after((data) => {
  menuBoldAnimation(data.current.container.classList[0]);
});
function menuBoldAnimation(data = undefined) {
  let page = document.getElementsByTagName("main")[0].classList[0];

  switch (page) {
    case "index1":
      document.getElementById("option1").style.color = "black";
      break;
    case "index2":
      document.getElementById("option1").style.color = "black";
      break;

    case "index3":
      document.getElementById("option1").style.color = "black";
      break;
    case "references":
      document.getElementById("option2").style.color = "black";
      break;
    case "about_us":
      document.getElementById("option3").style.color = "black";
      break;
    case "contact":
      document.getElementById("option4").style.color = "black";
      break;
  }

  if (data != undefined) {
    console.log(data);
    switch (data) {
      case "index1":
        document.getElementById("option1").style.color = "#525252";
        break;
      case "index2":
        document.getElementById("option1").style.color = "#525252";
        break;

      case "index3":
        document.getElementById("option1").style.color = "#525252";
        break;
      case "references":
        document.getElementById("option2").style.color = "#525252";
        break;
      case "about_us":
        document.getElementById("option3").style.color = "#525252";
        break;
      case "contact":
        document.getElementById("option4").style.color = "#525252";
        break;
    }
  }
}
