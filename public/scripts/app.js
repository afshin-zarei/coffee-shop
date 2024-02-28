const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
toggleThemeBtns.forEach((btn) => {
   btn.addEventListener("click", () => {
      if (localStorage.theme === "dark") {
         document.documentElement.classList.remove("dark");
         localStorage.theme = "light";
      } else {
         document.documentElement.classList.add("dark");
         localStorage.setItem("theme", "dark");
      }
   });
});

submenuOpenBtn.addEventListener("click", function add(event) {
   submenu.classList.toggle("submenu--open");
   event.currentTarget.parentElement.classList.toggle("text-orange-300");
   event.target.classList.toggle("rotate-180")
});
