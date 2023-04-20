let toggle_btn=document.querySelector("#toggle_btn")
let toggle=document.querySelector(".container .navbar .toggle")
let sidebar=document.querySelector(".container .sidebar")
let logo=document.querySelector(".container .navbar .logo button")
toggle_btn.addEventListener('click', open_sb)
function open_sb(){
    sidebar.classList.toggle("active")
    toggle.classList.toggle("active")
}
logo.addEventListener('click', logo_reload)
function logo_reload(){
    window.location.reload()
}