let burger = document.querySelector(".burger"),
    header = document.querySelector("header"),
    closeBtn = document.querySelector(".burger-close");

burger.onclick = toggleMenu;
document.onscroll = closeMenu;

function toggleMenu (e){
  e.preventDefault();
  header = document.querySelector("header");
  header.classList.toggle("active-burger");
}

function closeMenu (){
  header = document.querySelector("header");
  header.classList.remove("active-burger");
}