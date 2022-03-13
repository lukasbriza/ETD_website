import barba from "@barba/core";
import { deviceDetection } from "./deviceDetect.js";

/* PC DOT NAV START*/
let dot = {
  1: document.getElementById("1"),
  2: document.getElementById("2"),
  3: document.getElementById("3"),
};
//////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener("resize", resizeControl);
document
  .getElementsByTagName("body")[0]
  .addEventListener("load", afterLoadDot());
document
  .getElementsByClassName("dot")[0]
  .addEventListener("click", dotChanging);
document
  .getElementsByClassName("dot")[1]
  .addEventListener("click", dotChanging);
document
  .getElementsByClassName("dot")[2]
  .addEventListener("click", dotChanging);

barba.hooks.after((data) => {
  let nextContainer = data.next.container.classList[0];
  if (
    nextContainer == "index1" ||
    nextContainer == "index2" ||
    nextContainer == "index3"
  ) {
    if (deviceDetection() == false) {
      document.getElementsByClassName("dotWrapper")[0].style.display =
        "initial";
      afterLoadDot(nextContainer);
    }
  } else {
    document.getElementsByClassName("dotWrapper")[0].style.display = "none";
  }
});
/////////////////////////////////////////////////////////////////////////////////////////
function dotChanging() {
  barba.hooks.leave((data) => {
    let fromE = data.current.container.classList[0];
    switch (fromE) {
      case "index1":
        dot[1].style.display = "none";
        break;

      case "index2":
        dot[2].style.display = "none";
        break;

      case "index3":
        dot[3].style.display = "none";
        break;
    }
    let toE = data.next.container.classList[0];
    switch (toE) {
      case "index1":
        dot[1].style.display = "initial";
        break;

      case "index2":
        dot[2].style.display = "initial";
        break;

      case "index3":
        dot[3].style.display = "initial";
        break;
    }
  });
}

function afterLoadDot(data = undefined) {
  if (data != undefined) {
    console.log("afterload jsem tu");
    if (data == "index1") {
      document.getElementById("1").style.display = "initial";
    }
    if (data == "index2") {
      document.getElementById("2").style.display = "initial";
    }
    if (data == "index3") {
      document.getElementById("3").style.display = "initial";
    }
  }
  let location = document.location.pathname;
  if (
    location == "/index.html" ||
    location == "/" ||
    location == "/info.html" ||
    location == "/offer.html"
  ) {
    if (deviceDetection() == false) {
      console.log("devicedetext ok");
      document.getElementsByClassName("dotWrapper")[0].style.display =
        "initial";
      let mainElClass = document.getElementsByTagName("main")[0].className;
      switch (mainElClass) {
        case "index1":
          dot[1].style.display = "initial";
          dot[2].style.display = "none";
          dot[3].style.display = "none";
          break;
        case "index2":
          dot[1].style.display = "none";
          dot[2].style.display = "initial";
          dot[3].style.display = "none";
          break;
        case "index3":
          dot[1].style.display = "none";
          dot[2].style.display = "none";
          dot[3].style.display = "initial";
          break;
      }
    }
  } else {
    document.getElementsByClassName("dotWrapper")[0].style.display = "none";
  }
}

function resizeControl() {
  let location = document.location.pathname;
  let location1 = "/index.html";
  let loc1Alternation = "/";
  let location2 = "/info.html";
  let location3 = "/offer.html";

  if (deviceDetection() == false) {
    if (location == location1 || location == loc1Alternation) {
      dot[1].style.display = "initial";
      dot[2].style.display = "none";
      dot[3].style.display = "none";
    }
    if (location == location2) {
      dot[1].style.display = "none";
      dot[2].style.display = "initial";
      dot[3].style.display = "none";
    }
    if (location == location3) {
      dot[1].style.display = "none";
      dot[2].style.display = "none";
      dot[3].style.display = "initial";
    }
  }
}
/* PC DOT NAV END*/
