let gridContainer = document.querySelector(".container");

const resetButton = document.querySelector(".btn-reset");

resetButton.addEventListener("click", () => {
    let newGrid = Number(prompt("Input the new grid size: ", ""));
    if (!Number.isInteger(newGrid)) {
        alert("Input a whole number")
    } else {
        if (newGrid <= 0 || newGrid > 100) {
            alert("Please input a value between 1 - 100");
        } else {
            clearGrid();
            generateGrid(newGrid);
        }
    }
})

function generateGrid(n) {
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            let newDiv = document.createElement("div");
            gridContainer.appendChild(newDiv);
            newDiv.classList.add("grid-box");

            newDiv.onmouseover = () => {
                newDiv.style.background = "#e5ff00";
            }
        }
    }
    gridContainer.style.width = (40 * n) + "px";
    gridContainer.style.height = (40 * n) + "px";
}

function clearGrid() {
    document.querySelectorAll(".grid-box").forEach(e => e.remove());
}

generateGrid(16);
