const container = document.querySelector(".container");
const sizeButton = document.querySelector("#sizeButton")
const cellSize = 30;

let size = 16 * 16;

Array.from({length : size}).forEach(() => {
    const div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);           
    div.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = 
        `rgb(${Math.floor(Math.random() * 255) + 1},
        ${Math.floor(Math.random() * 255) + 1},
        ${Math.floor(Math.random() * 255) + 1})`;       
    })
})

sizeButton.addEventListener("click", () => {
    size = prompt("Choose your size from 8 to 64"); 
    const num = Number(size);
    if(num != null && num >= 8 && num <= 64){
        resize();
    } 
    else
        alert("Please, use the correct value")   
});

function resize(){ 
    container.innerHTML = "";
    
    container.style.width = cellSize * size + "px";
    
    Array.from({length : size * size}).forEach(() => {
    const div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);
    div.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "wheat";       
    })
})
}