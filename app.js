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

var colorPaint = 'black';


const colorBlack = document.querySelector('#black')
colorBlack.addEventListener('click', () => {
    colorPaint = 'black';
})

const colorRed = document.querySelector('#red')
colorRed.addEventListener('click', () => {
    colorPaint = 'red';
})

const colorGreen = document.querySelector('#green')
colorGreen.addEventListener('click', () => {
    colorPaint = 'green';
})

const colorYellow = document.querySelector('#yellow')
colorYellow.addEventListener('click', () => {
    colorPaint = 'yellow';
})

const colorOrange = document.querySelector('#orange')
colorOrange.addEventListener('click', () => {
    colorPaint = 'orange';
})

const colorBlue = document.querySelector('#blue')
colorBlue.addEventListener('click', () => {
    colorPaint = 'blue';
})

const colorPurple = document.querySelector('#purple')
colorPurple.addEventListener('click', () => {
    colorPaint = 'purple';
})

const colorPink = document.querySelector('#pink')
colorPink.addEventListener('click', () => {
    colorPaint = 'pink';
})

const colorWhite = document.querySelector('#white')
colorWhite.addEventListener('click', () => {
    colorPaint = 'white';
})

selectVertical.forEach(function(hover) {
    hover.addEventListener('mousedown', () => {
        isMouseDown = true;
    });

    hover.addEventListener('mouseover', () => {
        if(isMouseDown) {
            hover.style.backgroundColor = colorPaint;
        }
    });
    
    hover.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
})



