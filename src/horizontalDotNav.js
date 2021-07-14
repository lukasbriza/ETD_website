import barba from 'https://unpkg.com/@barba/core@2.9.7/dist/barba.mjs';
import {deviceDetection} from "./deviceDetect.js";
import {futurePage} from "./nav.js";
///////////////////////////////////////////////////////////////////////////
/*------------Once indicator------------*/
let onceIndicator = true;
///////////////////////////////////////////////////////////////////////////
/*----------Event listeners------------*/
window.addEventListener('resize', ()=>{actionTrigger(1)},false); // want to play once wthen reach the breakpoint
window.addEventListener('load', ()=>{actionTrigger(2)},false);
barba.hooks.enter(()=>{
    if(deviceDetection() && futurePage == "index1"){
        actionTrigger(3);
    }
})
////////////////////////////////////////////////////////////////////////////
/*-----------Action trigger----------- */
function actionTrigger(branch){
    if(document.location.pathname == "/index1.html"){    
        let horizontalBorderNav1 = document.getElementById("radiol1");
        let horizontalBorderNav2 = document.getElementById("radiol2");
        let horizontalNav1 = document.getElementById("radio1");
        let horizontalNav2 = document.getElementById("radio2");
        let textWrapper = document.getElementById("lp_text_wrapper");
        let imgWrapper = document.getElementById("imgDancer");
        let animationTime = 500;
        switchFn(branch);

        async function switchFn(branch){
            let promise = new Promise(function(resolve,reject){
                switch(branch){
                    case 1:
                        if(deviceDetection()==true && onceIndicator == true){
                            onceIndicator = false;
                            clickListenersAdd();
                            initStateMob();
                            return
                        }else if(deviceDetection()==false && onceIndicator == false){
                            onceIndicator = true;
                            clicListenersRemove();
                            initStatePc();
                            return
                        }
                        break;
                    case 2:
                        if(deviceDetection()==true){
                            clickListenersAdd()
                            initStateMob();
                        }else if(deviceDetection()==false){
                            initStatePc();
                        }
                        break;
                    case 3:
                        clickListenersAdd();
                        initStateMob();
                        break;
                }
                resolve();
            });
            await promise;
        }
        
        /*---------Click event listeners--------*/
        function clickListenersAdd(){
            horizontalBorderNav1.addEventListener("click", setHorizontalDot1);
            horizontalBorderNav2.addEventListener("click", setHorizontalDot2);
        }
        function clicListenersRemove(){
            let old_element1 = horizontalBorderNav1;
            let old_element2 = horizontalBorderNav2;
            let new_element1 = old_element1.cloneNode(true);
            let new_element2 = old_element2.cloneNode(true);

            old_element1.parentNode.replaceChild(new_element1, old_element1);
            old_element2.parentNode.replaceChild(new_element2, old_element2);
        }
        /*-----------Set animations-------------*/
        function setHorizontalDot1 (){
            horizontalNav1.style.background = "black";
            horizontalNav2.style.background = "transparent";
        
            /* ANIMATION SETTING START */
            imgWrapper.style.opacity = "0";
            setTimeout(()=>{imgWrapper.style.zIndex = "-10";}, animationTime);

            textWrapper.style.zIndex = "1";
            setTimeout(()=>{textWrapper.style.opacity = "1";}, animationTime);
            /* ANIMATION SETTING END */
        }
        function setHorizontalDot2(){
            horizontalNav1.style.background = "transparent";
            horizontalNav2.style.background = "black";
        
            /* ANIMATION SETTING START */
            textWrapper.style.opacity = "0";
            setTimeout(()=>{textWrapper.style.zIndex = "-10";}, animationTime);

            imgWrapper.style.zIndex = "1";
            setTimeout(()=>{imgWrapper.style.opacity = "1";}, animationTime);
            /* ANIMATION SETTING END */
        } 
        /*-----Initial states of devices------- */
        function initStateMob(){
            imgWrapper.style.opacity = "0";
            setTimeout(()=>{imgWrapper.style.zIndex = "-10";}, animationTime);

            textWrapper.style.zIndex = "1";
            setTimeout(()=>{textWrapper.style.opacity = "1";}, animationTime);

            horizontalNav2.style.background = "transparent";
            horizontalNav1.style.background = "black";
        }
        function initStatePc(){
            textWrapper.style.zIndex = "1";
            textWrapper.style.opacity = "1";
            imgWrapper.style.zIndex = "1";
            imgWrapper.style.opacity = "1";
        }
    } 
}
////////////////////////////////////////////////////////////////////////////



 



