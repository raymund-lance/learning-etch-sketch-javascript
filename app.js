const selectContainer = document.querySelector('#container');
for(let i = 0; i < 16; i++) {
    const createChildContainer = document.createElement('div');
    createChildContainer.classList.add('horizontal');
    selectContainer.appendChild(createChildContainer);
}

var selectHorizontal = document.querySelectorAll('.horizontal');
var createDescendant = document.createElement('div');

for(let i = 0; i < 16; i++) {
    selectHorizontal.forEach(function(element) {
        createDescendant.classList.add('vertical'); 
        var clone = createDescendant.cloneNode(true);
        element.appendChild(clone);
    });
}

