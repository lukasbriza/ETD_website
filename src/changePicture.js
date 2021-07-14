import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
import barba from 'https://unpkg.com/@barba/core@2.9.7/dist/barba.mjs';
import {deviceDetection} from "./deviceDetect.js";
import {futurePage} from "./nav.js";
let once = true;
let once2 = true;

/*----------------INIT SWIPER----------------*/
function initSwiper(){
    var swiper = new Swiper(".mySwiper", {
        effect: "flip",
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className){
                return '<span class="' + className + '"><div></div></span>';         
            }
        },
      });
}
function initSwiper2(){
    var swiper = new Swiper(".mySwiper2", {
        effect: "flip",
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className){
                return '<span class="' + className + '"><div></div></span>';         
            }
        },
      });
}
/*-------------------------------------------*/

///////////////////////////////////////////////////////////////////////////
/*----------Event listeners------------*/
window.addEventListener('resize', ()=>{actionTrigger(1)},false); // want to play once wthen reach the breakpoint
window.addEventListener('load', ()=>{actionTrigger(2)},false);
barba.hooks.enter(()=>{
    let windowWidth = window.innerWidth;
    
    //index2
    if(windowWidth < 1100 && futurePage == "index2"){
        actionTrigger(3);
    }
    //index3
    if(windowWidth < 1011 && futurePage == "index3"){
        initSwiper2();
    }
})
////////////////////////////////////////////////////////////////////////////
function actionTrigger(branch){
    let windowWidth = window.innerWidth;

    //index2
    if(branch==1 && windowWidth < 1100 && once == true){
        initSwiper();
        once = false;
    }
    if(branch==1 && windowWidth >= 1100 && once == false){
        once = true;
    }
    if(branch==2 && document.location.pathname == "/index2.html"){
        initSwiper();
    }
    if(branch==3){
        initSwiper();
    }
    //index3
    if(branch==1 && windowWidth < 1011 && once2 == true){
        initSwiper2();
        once2 = false;
    }
    if(branch==1 && windowWidth >= 1100 && once2 == false){
        once2 = true;
    }
    if(branch==2 && document.location.pathname == "/index3.html"){
        initSwiper2();
    }
}