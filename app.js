const gridcontainer = document.querySelector('.grid-container');

row_count = 16;
column_count = 16;

function createGrid() {
    for (i = 1; i <= row_count; i++) {
        const divrow = document.createElement('div');
        divrow.classList.add('row');
        gridcontainer.appendChild(divrow);
        for (j = 1; j <= column_count; j++) {
            const divbox = document.createElement('div');
            divbox.classList.add('gridbox');
            divrow.appendChild(divbox);
        }
    }
}
createGrid();

const gridbox = document.querySelectorAll('.gridbox');

gridbox.forEach(function(item) {
    item.addEventListener('mouseover', () => {
        item.classList.add('active-box');
    });
});

function resetGrid() {
    gridbox.forEach(function(item) {
        item.classList.remove('active-box');
    });
}

const reset = document.querySelector("#reset");

reset.addEventListener('click', resetGrid);

function changeGrid() {

    let gridNumber = Number(prompt("Enter a number for the new Grid (100 or less): "));
    
    while (isNaN(gridNumber) || (gridNumber > 100)) {
        gridNumber = Number(prompt("Invalid entry! You must enter a number, and it must between 1 and 100: "));
    };

    row_count = gridNumber;
    column_count = gridNumber;
    
    //clears out current grid
    while(gridcontainer.firstChild) {
        gridcontainer.removeChild(gridcontainer.firstChild);
    }

    //builds new grid based off user input
    createGrid();

    const gridbox = document.querySelectorAll('.gridbox');

    gridbox.forEach(function(item) {
        item.addEventListener('mouseover', () => {
            item.classList.add('active-box');
        });
    });
    
    //redefining the reset button within this function so reset still works after change grid is ran
    function resetGrid() {
        gridbox.forEach(function(item) {
            item.classList.remove('active-box');
        });
    }
    const reset = document.querySelector("#reset");

    reset.addEventListener('click', resetGrid);
}

const button = document.querySelector(".button");

button.addEventListener('click', changeGrid);

