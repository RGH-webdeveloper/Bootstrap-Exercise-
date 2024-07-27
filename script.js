let closeBtn = document.querySelector(".close_btn");
closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
});
let lightModeBtn = document.getElementById("light_mode_btn");
let darkModeBtn = document.getElementById("dark_mode_btn");
let saveModeTheme = localStorage.getItem("themeMode");
lightModeBtn.addEventListener("click", () => {
  document.documentElement.setAttribute("data-bs-theme", "light");
  lightModeBtn.classList.add("active")
  darkModeBtn.classList.remove("active")
  localStorage.setItem("themeMode", "light");
});
darkModeBtn.addEventListener("click", () => {
  document.documentElement.setAttribute("data-bs-theme", "dark");
  darkModeBtn.classList.add("active")
  lightModeBtn.classList.remove("active")
  localStorage.setItem("themeMode", "dark");
});
if (saveModeTheme == "dark") {
  document.documentElement.setAttribute("data-bs-theme", "dark");
  darkModeBtn.classList.add("active")
  lightModeBtn.classList.remove("active")
} else {
  document.documentElement.setAttribute("data-bs-theme", "light");
  lightModeBtn.classList.add("active")
  darkModeBtn.classList.remove("active")
}
