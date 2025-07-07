const container = document.querySelector(".container");

let size = 16 * 16;

Array.from({length : size}).forEach(() => {
    const div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);
    div.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "wheat";       
    })
})