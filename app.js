const selectContainer = document.querySelector('#container');
for(let i = 0; i < 100; i++) {
    const createChildContainer = document.createElement('div');
    createChildContainer.classList.add('horizontal');
    selectContainer.appendChild(createChildContainer);
}

var selectHorizontal = document.querySelectorAll('.horizontal');
var createDescendant = document.createElement('div');

for(let i = 0; i < 100; i++) {
    selectHorizontal.forEach(function(element) {
        createDescendant.classList.add('vertical'); 
        var clone = createDescendant.cloneNode(true);
        element.appendChild(clone);
    });
}

var selectVertical = document.querySelectorAll('.vertical');
var backGroundColor = 'black';
selectVertical.forEach(function(hover) {
    hover.addEventListener('mouseover', () => {
        hover.style.backgroundColor = backGroundColor;
    })
})



