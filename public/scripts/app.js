const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-close-btn");
const nav =document.querySelector(".nav");
const cartOpenBtn = document.querySelector(".cart-icon");
const cartCloseBtn = document.querySelector(".cart-close-btn");
const shoppingCart = document.querySelector(".shopping-cart");
const overlay = document.querySelector(".overlay");

function closeMobileMenu() {
   nav.classList.remove("right-0");
   nav.classList.add("-right-64");
   overlay.classList.remove("overlay--visible");
}
function closeMobileShoppingCart() {
   shoppingCart.classList.remove("left-0");
   shoppingCart.classList.add("-left-64");
   overlay.classList.remove("overlay--visible");
}
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

submenuOpenBtn.addEventListener("click", (event) => {
   submenu.classList.toggle("submenu--open");
   event.currentTarget.parentElement.classList.toggle("text-orange-300");
   event.target.classList.toggle("-rotate-180")
});

navOpenBtn.addEventListener("click", () => {
   nav.classList.remove("-right-64");
   nav.classList.add("right-0");
   overlay.classList.add("overlay--visible");
   overlay.addEventListener("click", closeMobileMenu)

});
navCloseBtn.addEventListener("click", closeMobileMenu);

cartOpenBtn.addEventListener("click", () => {
   shoppingCart.classList.remove("-left-64");
   shoppingCart.classList.add("left-0");
   overlay.classList.add("overlay--visible");
   overlay.addEventListener("click", closeMobileShoppingCart)

});
cartCloseBtn.addEventListener("click", closeMobileShoppingCart);
