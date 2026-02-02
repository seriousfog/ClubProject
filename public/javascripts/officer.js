document.getElementById('addButton').addEventListener('click', function(event) {
    event.preventDefault();

    var inputContainer = document.getElementById('inputContainer');
    var newInputWrapper = document.createElement('div');
    newInputWrapper.classList.add('inputWrapper');

    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = 'inputField' + (inputContainer.children.length + 1);
    newInputWrapper.appendChild(newInput);

    var newButton = document.createElement('');
    newButton.textContent = 'Remove';
    newButton.classList.add('removeButton');
    newButton.addEventListener('click', function(event) {
        event.preventDefault();
        event.target.parentNode.remove();
    });
    newInputWrapper.appendChild(newButton);

    inputContainer.appendChild(newInputWrapper);
});


document.addEventListener('DOMContentLoaded', function () {
    const addOfficer = document.getElementById('addOfficer');

    function newOfficer(){
        const newWrapper = document.createElement('div');

    }

    addOfficer.addEventListener('click', newOfficer)

});

document.addEventListener('DOMContentLoaded', function () {
    const minusOfficer = document.getElementById('minusOfficer');

    function minOfficer(){
        const newWrapper = document.createElement('div');

    }

    minusOfficer.addEventListener('click', minOfficer)

});