var btn = document.getElementById("btn");
var navbar = document.getElementById("navbar");
btn.addEventListener('click', ()=>{
  var hidenav = document.getElementById("navbarText");
  if (hidenav.classList.contains("collapse")) {
    navbar.classList.add("bg-white");
    hidenav.classList.remove("collapse");
  }else{
    navbar.classList.remove("bg-white");
    hidenav.classList.add("collapse");
  }
})