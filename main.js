window.onload = ()=>{
  var containers = document.getElementsByClassName("wrap");
  containers = Array.from(containers);
  containers.forEach(container=>{
    container.classList.remove("fade");
  });
};

var btn = document.getElementById("btn");
var navbar = document.getElementById("navbar");
btn.addEventListener('click', ()=>{
  var hidenav = document.getElementById("navbarText");
  hidenav.classList.toggle("collapse");
  navbar.classList.toggle("bg-white");
  hidenav.classList.toggle("fadeNav");
  // if (hidenav.classList.contains("collapse")) {
  //   //表示されてる時
  //   navbar.classList.add("bg-white");
  //   hidenav.classList.remove("collapse");
  // }else{
  //   //押されてない時
  //   navbar.classList.remove("bg-white");
  //   hidenav.classList.add("collapse");
  // }
})