const container = document.querySelector('.container')
const slider = document.querySelector('#size')
const btnSize = document.querySelector('#button')
const btnRnbw = document.querySelector('#rainbow')
const btnClear = document.querySelector('#clear')
const colorPick = document.querySelector('#colorpicker')

let size = 32;

function autoPopulate(size){
    container.style.setProperty('--size', size)
    let sliderVal = document.getElementById('size').value;
    for(let i = 0; i < sliderVal*sliderVal; i++){         //size*size to get the grid total number
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
       
        grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = "black";

        });
    }
}

autoPopulate(32);

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

//adjust size via slider
slider.addEventListener('input', () => {
    let sliderVal = document.getElementById('size').value;
    reset();
    autoPopulate(sliderVal);
});

//color picker
colorPick.addEventListener('input' , () => {
    let sliderVal = document.getElementById('size').value;
    let newColor = document.getElementById('colorpicker').value;
    reset();
    //let grid = container.children;
    for(let i = 0; i  < sliderVal * sliderVal; i++){

        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);      
        grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = newColor;

        // grid[i].addEventListener('mouseover', (e) => {
        // e.target.style.backgroundColor = newColor;
        })
    }
})

//rainbow
btnRnbw.addEventListener('click', () => {
    let sliderVal = document.getElementById('size').value;
    reset();
    for(let i = 0; i  < sliderVal * sliderVal; i++){
        //console.log(sliderVal);
        
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
       
        grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = generateRandomColor();
        })
    }
})

//to clear grid
btnClear.addEventListener('click', () => {
    let sliderVal = document.getElementById('size').value;
    reset();
    autoPopulate(sliderVal);
});


