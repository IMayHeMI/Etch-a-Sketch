const container = document.querySelector(".container");
const sizeButton = document.querySelector("#sizeButton")
const resetButton = document.querySelector("#resetButton")
const cellSize = 30;

let size = 16;
let isMouseButtonHold = false;

window.addEventListener("mousedown", () => isMouseButtonHold = true)
window.addEventListener("mouseup", () => isMouseButtonHold = false)

Array.from({length : size * size}).forEach(() => {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.setAttribute('draggable', 'false');
    container.appendChild(div);           
    div.dataset.alpha = 0;
    div.addEventListener("mouseover", event => {
        if(isMouseButtonHold) darkening(event.target);

        // event.target.style.backgroundColor = 
        // `rgb(${Math.floor(Math.random() * 255) + 1},
        // ${Math.floor(Math.random() * 255) + 1},
        // ${Math.floor(Math.random() * 255) + 1})`;                            
    });
    div.addEventListener('mousedown', event => {
        if(isMouseButtonHold) darkening(event.target);
    });
})

sizeButton.addEventListener("click", () => {
    size = prompt("Choose your size from 8 to 64"); 
    const num = Number(size);
    if(num != null && num >= 8 && num <= 64){
        resize();
    } 
    else
        alert("Please, use the correct value from 8 to 64")   
});

function resize(){ 
    container.innerHTML = "";
    
    container.style.width = cellSize * size + "px";
    
    Array.from({length : size * size}).forEach(() => {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.setAttribute('draggable', 'false');
    container.appendChild(div);
    div.addEventListener("mouseover", event => {
        if(isMouseButtonHold) darkening(event.target);              
    });
    div.addEventListener('mousedown', event => {
         darkening(event.target)
    })
})
}

function darkening(cell){
    let alpha = parseFloat(cell.dataset.alpha) || 0;
    if (alpha < 1){
        alpha += 0.1;
        if (alpha > 1) alpha = 1;
        cell.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
        cell.dataset.alpha = alpha;
    }
}

resetButton.addEventListener("click", resize);