const toggle = document.querySelector(".toggle");
const open = document.querySelector(".open")
const close = document.querySelector(".close")
const header = document.querySelector("header")

toggle.addEventListener("click", () => {
    open.classList.toggle("active");
    close.classList.toggle("active");
    header.classList.toggle("active")
})

var buttons = document.getElementsByClassName('btn-nav');
for (var i = 0, len = buttons.length; i < len; i++) {
    buttons[i].onclick = function (){
        open.classList.toggle("active");   
        close.classList.toggle("active");
        header.classList.toggle("active");
    }
}