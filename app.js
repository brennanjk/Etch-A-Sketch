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
