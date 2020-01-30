const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li");
// let size = size + "px";
let fontSize = 10;

btn.addEventListener("click", () => {
    fontSize++;
    for (let i = 0; i < liItems.length; i++) {
        liItems[i].style.display = "block";
        liItems[i].style.fontSize = `${fontSize}px`;
    };
});