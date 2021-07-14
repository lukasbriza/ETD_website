import barba from 'https://unpkg.com/@barba/core@2.9.7/dist/barba.mjs';


/* After transition setup */
barba.hooks.after((data) => {
    let info = data.next.container.classList[0];
    if (info =="index3" && data.current.container.classList[0] == "form"){
        document.getElementById("menu_wrapper").classList.remove("opacityDown");
        document.getElementById("menu_wrapper").classList.add("opacityUp");
        document.getElementById("menu_wrapper").style.display = "flex";
        document.getElementsByClassName("index3")[0].style.overflow = "hidden";
    }

    if (info == "form"){
        document.getElementById("menu_wrapper").style.display = "none";

        //after - arrow listener
        if (data.next.container.id == "form1Main"){
            document.getElementById("formBackArrow1").addEventListener("click",()=>{
                console.log("form1");
                barba.go("/index3.html");
            },false);

            document.getElementById("button5").addEventListener("click",()=>{
                window.alert("Děkuji za vyplnění formuláře!");
            });
        }
        if (data.next.container.id == "form2Main"){
            document.getElementById("formBackArrow2").addEventListener("click",()=>{
                console.log("form2");
                barba.go("/index3.html");
            },false);

            document.getElementById("button5").addEventListener("click",()=>{
                window.alert("Děkuji za vyplnění formuláře!");
            });
        }
        //couple animation listener
        document.getElementsByClassName("couple")[0].addEventListener("mouseenter",()=>{
            mouseEnterAnimation();
        });
    }
    
    if(info == "contact"){
        document.getElementById("button6").addEventListener("click",()=>{
            window.alert("Děkuji za vyplnění formuláře!");
        });
    }
    
});

window.addEventListener("load", ()=>{
    if(document.location.pathname == "/form1.html"){
        document.getElementById("formBackArrow1").addEventListener("click",()=>{
            console.log("form1");
            barba.go("/index3.html");
        })

        //couple animation listener
        document.getElementsByClassName("couple")[0].addEventListener("mouseenter",()=>{
            mouseEnterAnimation();
        });
    }
    if(document.location.pathname == "/form2.html"){
        document.getElementById("formBackArrow2").addEventListener("click",()=>{
            console.log("form2");
            barba.go("/index3.html");
        })

        //couple animation listener
        document.getElementsByClassName("couple")[0].addEventListener("mouseenter",()=>{
            mouseEnterAnimation();
        });
    }

    if(document.location.pathname == "/contact.html"){
        document.getElementById("button6").addEventListener("click",()=>{
            window.alert("Děkuji za vyplnění formuláře!");
        });
    }
},false);

if(document.location.pathname == "/form1.html" || document.location.pathname == "/form2.html"){
    document.getElementById("menu_wrapper").style.display = "none";
}


function mouseEnterAnimation(){
    document.getElementsByClassName("couple")[0].classList.add("animationClass")
}