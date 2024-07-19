const selectContainer = document.querySelector('#container');
for(let i = 0; i < 120; i++) {
    const createChildContainer = document.createElement('div');
    createChildContainer.classList.add('horizontal');
    selectContainer.appendChild(createChildContainer);
}

const selectSketch = document.querySelector('#sketch');
selectSketch.addEventListener('click', () => {
    selectVertical.forEach(function(newBoard) {
        newBoard.style.backgroundColor = 'white';
    })
})


var selectHorizontal = document.querySelectorAll('.horizontal');
var createDescendant = document.createElement('div');

for(let i = 0; i < 120; i++) {
    selectHorizontal.forEach(function(element) {
        createDescendant.classList.add('vertical'); 
        var clone = createDescendant.cloneNode(true);
        element.appendChild(clone);
    });
}
let isMouseDown = false;
var selectVertical = document.querySelectorAll('.vertical');
var backGroundColor = 'black';
selectVertical.forEach(function(hover) {
    hover.addEventListener('mousedown', () => {
        isMouseDown = true;
    });

    hover.addEventListener('mouseover', () => {
        if(isMouseDown) {
            hover.style.backgroundColor = backGroundColor;
        }
    });
    
    hover.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
})



