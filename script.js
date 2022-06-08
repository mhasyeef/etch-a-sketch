const container = document.querySelector('.container')
const slider = document.querySelector('#size')
const btnSize = document.querySelector('#button')
const btnRnbw = document.querySelector('#rainbow')
const btnClear = document.querySelector('#clear')
const colorPick = document.querySelector('#colorpicker')

let size = 32;

function autoPopulate(size){
    container.style.setProperty('--size', size)

    for(let i = 0; i < size*size; i++){         //size*size to get the grid total number
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
       
        grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = "black";

        });
    }
}

autoPopulate(size);

//to generate random color
function generateRandomColor(){   
    let maxVal = 0xFFFFFF;
    let randomColor = Math.random() * maxVal;
    randomColor = Math.floor(randomColor); //converted floating pt to integer
    randomColor = randomColor.toString(16); //converted integer to hexadecimal
    let randColor = randomColor.padStart(6, 0); //in the event length is < 6, adds 0 to the begining
    return `#${randColor.toUpperCase()}`
    
}

function reset(){
    container.innerHTML = '';
    
}

//to adjust size
slider.addEventListener('input', () => {
    let sliderVal = document.getElementById('size').value;
    reset();
    autoPopulate(sliderVal);
});

//color picker
colorPick.addEventListener('input' , () => {
    let newColor = document.getElementById('colorpicker').value;
    let grid = container.children;
    for(let i = 0; i  < size * size; i++){
        grid[i].addEventListener('mouseover', (e) => {
            console.log(grid[i]);
            e.target.style.backgroundColor = newColor;
        })
    }
})

//rainbow
btnRnbw.addEventListener('click', () => {
    let grid = container.children;
    for(let i = 0; i  < size * size; i++){
        grid[i].addEventListener('mouseover', (e) => {
            console.log(grid[i]);
            e.target.style.backgroundColor = generateRandomColor();
        })
    }
})

//to clear grid
btnClear.addEventListener('click', () => {
    reset();
    autoPopulate(size);
});


