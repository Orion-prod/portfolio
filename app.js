const toggle = document.querySelector(".toggle");
const open = document.querySelector(".open")
const close = document.querySelector(".close")
const header = document.querySelector("header")

toggle.addEventListener("click", () => {
    open.classList.toggle("active");
    close.classList.toggle("active");
    header.classList.toggle("active")
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
        header.style.opacity = 0.5;
    } else {
        header.style.opacity = 1;
    }
})

header.addEventListener("mouseover", () => {
    header.style.opacity = 1;
})

header.addEventListener("mouseout", () => {
    header.style.opacity = 0.5;
})

var buttons = document.getElementsByClassName('btn-nav');
for (var i = 0, len = buttons.length; i < len; i++) {
    buttons[i].onclick = function (){
        open.classList.toggle("active");   
        close.classList.toggle("active");
        header.classList.toggle("active");
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
for (var i = 0, len = img.length; i < len; i++) {
    img[i].onclick = function (){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-img")[0];
console.log(span)

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

const body = document.getElementById("pmSubject");

function sendMail() {
    window.open("mailto:mathisubaud2005@gmail.com?subject=Question portfolio&body=" + body.value);
};