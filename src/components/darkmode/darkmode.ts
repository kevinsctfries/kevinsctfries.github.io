let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#darkmodeBtn");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle?.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    console.log("enabled");
  } else {
    disableDarkMode();
    console.log("disabled");
  }
});