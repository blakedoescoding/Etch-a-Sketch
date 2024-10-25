// Create a webpage with 16x16 grid of square divs
// Create them in JS not with HTML
// It's best to put grid squares inside a container div, this div can be written in your html
// Use flexbox to make the divs appear as a grid. Only use Flexbox. 

const container = document.querySelector(".container");
const enterSizeButton = document.querySelector("#enterInt");
const clearButton = document.querySelector("#clearButton");
const colorButton = document.querySelector("#colors");
//Custom CSS property from here
const squareSize = 30;

let selectedColor = "blue";


enterSizeButton.addEventListener("click", () => {
    const newSize = parseInt(prompt("Please enter an Integer to change the size:"));

    if (!isNaN(newSize) && newSize > 0){
        createGrid(newSize);
    }
    else {
        alert("Please enter a valid integer above 0");
    }
    
});

clearButton.addEventListener("click", () => {
    //when Clear is clicked, select all the divs in the container
    const squares = container.querySelectorAll("div");
    //And set the background color to an empty string
    squares.forEach((square) => {
        square.style.backgroundColor = '';
    });
});

//You need to use event.target.value to get value of selected option in dropdown menu. 
colorButton.addEventListener("click", (event) => {
    selectedColor = event.target.value;
});



let isMouseDown = false;

//sets a event listener on document so that when mouse is pressed, isMouseDown is true
document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

//sets a event listener on document so that when mouse is up, isMouseDown is false
document.addEventListener("mouseup", () => {
    isMouseDown = false; 
});


function createGrid(size){
    //Clears the html from the container when function is called
    container.innerHTML = '';

    //Setting the documwnt to have this custom property --square-size to have the variable entered in pixels
    document.documentElement.style.setProperty('--square-size', `${squareSize}px`);

    //Then, I set the container width to use calc for calculations, for the size of the square * whatever the size is the user enters
    container.style.width = `calc(var(--square-size) * ${size})`;

    //loops theough row and col and created new div based on size variable
    for (let row = 0; row < size; row++){
        for (let col = 0; col < size; col++){
            const square = document.createElement("div");
            //when the mouseenters the div element, the callback function looks if the isMouseDown is true, if it is then it adds color, if not then nothing is added
            square.addEventListener("mouseenter", () => {
                if (isMouseDown){
                    square.style.backgroundColor = selectedColor;
                }
            });

            //then appends those divs to the container
    
            container.appendChild(square);
        }
    }
}

//Inital size is 16 by 16
createGrid(16);

