const container = document.querySelector('.container')

// function rowCol(size){
//     for(let i = 0; i < size; i++){
//         const div = document.createElement('div')
//         div.classList.add('grid')
//         container.appendChild(div)
//     }
// }

// const grid = document.createElement('div');
// container.appendChild(grid);                     //appends the 'grid' div under 'container'
// grid.setAttribute('id', 'grid');                 //sets id to 'grid'

// //coordinates
// const a1 = document.createElement('div');
// grid.appendChild(a1);
// a1.setAttribute('id', 'a1');
// a1.innerText = "A1";

// const a2 = document.createElement('div');
// grid.appendChild(a2);
// a2.setAttribute('id', 'a2');
// a2.innerText = "A2";

function autoPopulate(size){
    for(let i = 0; i < size*size; i++){         //size*size to get the grid total number
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
    }
}

autoPopulate(32);
