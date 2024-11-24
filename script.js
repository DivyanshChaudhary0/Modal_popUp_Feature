
const images = document.querySelector(".images");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal img");
const body = document.querySelector("body");

images.addEventListener("click",function(e){
    modal.style.display = "flex";
    modalImage.setAttribute("src",`${e.target.src}`);
    console.log(e.target.src);
})

window.addEventListener("click",function(e){
    if(e.target === modal){
        modal.style.display = "none";
    }
})