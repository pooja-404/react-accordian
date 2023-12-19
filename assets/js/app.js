let accbox = document.querySelectorAll(".accbox");
accbox.forEach((e) => e.addEventListener("click", () => {
    let hide = e.classList.contains("active");
    accbox.forEach((e) => {
        e.classList.remove("active");
    })
    if (!hide) {
        e.classList.toggle("active");
    }
}))
