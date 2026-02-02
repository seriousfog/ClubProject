document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopup = document.getElementById('closePopup');
    const calPop = document.getElementById('calPop');

    // Function to open the popup
    function openPopup() {
        popupOverlay.style.display = 'block';

    }

    // Function to close the popup
    function closePopupFunc() {
        popupOverlay.style.display = 'none';
    }
    calPop.addEventListener('click', openPopup);


    // Close the popup when the close button is clicked
    closePopup.addEventListener('click', closePopupFunc);
    // Close the popup when clicking outside the popup content
    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            closePopupFunc();
        }
    });
})
