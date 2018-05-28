var btn = document.getElementById("btn");
btn.addEventListener('click', ()=>{
  var hoge = document.getElementById("navbarText");
  if (hoge.classList.contains("collapse")) {
    hoge.classList.remove("collapse");
  }else{
    hoge.classList.add("collapse");
  }
})