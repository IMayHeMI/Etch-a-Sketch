const container = document.querySelector(".container");

let size = 16 * 16;

let cells = [size];

Array.from(cells.forEach(() => {
    const div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);
}))