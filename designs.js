// Select color input
// Select size input
var pixelCanvas = document.getElementById("pixelCanvas");
var sizePicker = document.getElementById("sizePicker");



sizePicker.addEventListener('submit', function(e) {  //Listen for the form.
  e.preventDefault(); //Stoping page from reload.
  makeGrid();
});

function makeGrid(){
  var gridHeight = document.getElementById("inputHeight").value;
  var gridWidth = document.getElementById('inputWidth').value;

  if(pixelCanvas.innerHTML != "") //In case the canvase is filled, clear it.
    pixelCanvas.innerHTML = "";

  for (let i = 1; i <= gridHeight; i++) {         //Outer loop for rows.
    let gridRow = document.createElement('tr');
    pixelCanvas.appendChild(gridRow);

    for (let j = 1; j <= gridWidth; j++) {        //Inner loop for columns.
      let gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
      gridCell.addEventListener('click', function() {   //Add a listener to each cell.
        const color = document.getElementById('colorPicker').value;
        this.style.backgroundColor = color;
      })
     }

  }
}
