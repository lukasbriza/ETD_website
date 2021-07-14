import barba from 'https://unpkg.com/@barba/core@2.9.7/dist/barba.mjs';

/*------------------ HOOKS -------------------*/
barba.hooks.beforeEnter((data) => {
    let markerPage = data.next.container.classList[0];

    if (document.location.pathname == "/marker.html"){
        document.getElementById("back_arrow_path").addEventListener("click", backButton);
    }
})
window.addEventListener("load", () =>{
    if(document.location.pathname == "/marker.html"){
        document.getElementById("back_arrow_path").addEventListener("click", ()=>{
            let socialWrapper = document.getElementsByClassName("social_wrapper")[0];
            socialWrapper.classList.add("opacityDown");
            
            
            barba.go("/index3.html");
        });
    
        let describer = document.getElementById("icon_describe");
        let fb = document.getElementById("fbA");
        let ing = document.getElementById("ingA");
        let yb = document.getElementById("ybA");
    
        describer.style.opacity = "1";
    
        fb.style.opacity = "1";
        fb.style.marginBottom = "0px";
    
        ing.style.opacity = "1";
        ing.style.marginBottom = "0px";
    
        yb.style.opacity = "1";
        yb.style.marginBottom = "-20px";

        //hide menu
        let menu = document.getElementById("menu_wrapper");
        menu.style.display = "none";
    }
})

barba.hooks.after((data) => {
    let info = data.next.container.classList[0];
    if (info =="index3" && data.current.container.classList[0] == "marker_page"){
        document.getElementById("menu_wrapper").classList.remove("opacityDown");
        document.getElementById("menu_wrapper").classList.add("opacityUp");
        document.getElementById("menu_wrapper").style.display = "flex";
        document.getElementsByClassName("index3")[0].style.overflow = "hidden";
    }

    if(document.location.pathname == "/marker.html"){
        let describer = document.getElementById("icon_describe");
        let fb = document.getElementById("fbA");
        let ing = document.getElementById("ingA");
        let yb = document.getElementById("ybA");

        describer.classList.add("opacityUp");

        setTimeout(() =>{
            /*FB*/

            fb.style.animationDuration = "0.5s";
            fb.style.animationFillMode = "forwards";
            fb.style.animationTimingFunction = "easeIn";
            fb.style.animationName = "iconOn";
            /*ING*/
            ing.style.animationDuration = "0.5s";
            ing.style.animationFillMode = "forwards";
            ing.style.animationTimingFunction = "easeIn";
            ing.style.animationName = "iconOn";
            ing.style.animationDelay = "0.3s";
            /*YB*/
            yb.style.animationDelay = "0.6s";
            yb.style.animationDuration = "0.5s";
            yb.style.animationFillMode = "forwards";
            yb.style.animationTimingFunction = "easeIn";
            yb.style.animationName = "iconOn2";
        },1000);

        setTimeout(() =>{
            fb.style.opacity = "1";
            fb.style.marginBottom = "0px";

            ing.style.opacity = "1";
            ing.style.marginBottom = "0px";

            yb.style.opacity = "1";
            yb.style.marginBottom = "-20px";

        },2800)
    }
})
/*-------------------------------------------*/
function backButton(){

    let socialWrapper = document.getElementsByClassName("social_wrapper")[0];
    socialWrapper.classList.add("opacityDown");
    barba.go("/index3.html");
}


