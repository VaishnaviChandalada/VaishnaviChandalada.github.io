const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("load",()=>document.getElementById("loader").classList.add("hidden"));const themeToggle=document.getElementById("themeToggle"),savedTheme=localStorage.getItem("theme");if(savedTheme)document.documentElement.dataset.theme=savedTheme;themeToggle.addEventListener("click",()=>{const next=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=next;localStorage.setItem("theme",next)});const topBtn=document.getElementById("backToTop");window.addEventListener("scroll",()=>topBtn.classList.toggle("show",scrollY>500));topBtn.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
