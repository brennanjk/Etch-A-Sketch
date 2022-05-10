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

// currently this is appending a new grid to the default grid - need to work out logic to REPLACE the default grid
function changeGrid() {

    let gridNumber = Number(prompt("Enter a number for the new Grid: "));
    row_count = gridNumber;
    column_count = gridNumber;
    
    while(gridcontainer.firstChild) {
        gridcontainer.removeChild(gridcontainer.firstChild);
    }

    createGrid();
}

