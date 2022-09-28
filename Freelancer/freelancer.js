//this is for the close-open button

let closee = document.querySelector(".close");
let menu = document.querySelector(".menu");
let list = document.querySelector("nav ul");
menu.addEventListener("click",()=>{
    list.style.right = "0";
    menu.style.display="none";
    closee.style.display="block";
    //change the z-index of the arrow 
    document.querySelector("label").style.opacity=0;
})

closee.addEventListener("click",()=>{
    list.style.right = "-100%";
    menu.style.display="block";
    closee.style.display="none";
    document.querySelector("label").style.opacity=1;
})
///this is for the arrow 
let arrow =document.querySelector(".content .right .arrow")
arrow.addEventListener("click",()=>{
    if(arrow.style.textAlign=="right"){
        arrow.style.textAlign="left";
        document.querySelector(".content .right .arrow ").style.transform = " rotate(0deg)";
        document.querySelector(".content .right .arrow span").style.transform = "translateY(-40%) rotate(0deg)";

    }
    else{
        arrow.style.textAlign="right";
        document.querySelector(".content .right .arrow ").style.transform = "rotate(360deg)";
        document.querySelector(".content .right .arrow span").style.transform = "translateY(-40%) rotate(90deg)";
    }
})