let slideelements=document.querySelectorAll(".slide-element");

let count=1;
setInterval(() => {
    count++;
    let currentElement=document.querySelector(".current");

    currentElement.classList.remove("current");

    if(count>slideelements.length){
        slideelements[0].classList.add("current");
        
    }else{
        currentElement.nextElementSibling.classList.add("current");
    }
 
}, 2000);