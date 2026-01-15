const toggle = document.getElementById("darkToggle");
const body = document.body;

// load mode sebelumnya
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙";
    }
});
