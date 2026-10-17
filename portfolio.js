document.addEventListener("DOMContentLoaded", () => {
const hour = new Date().getHours();
let greet = hour < 12 ? "Good Morning" :hour < 18 ? "Good Afternoon" : "Good Evening";
document.getElementById("greeting").textContent = greet + ", I'm Thembeka";
});