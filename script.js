
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");


    const groceries = document.getElementsByClassName('groceries')[0];
    const pencil = document.getElementById('pencil');
    const groceryItems = document.getElementById('groceryItems');
    const userInput = document.getElementById('userInput');

    pencil.addEventListener('click', function (event) {

        groceryItems.innerHTML = '';
    });

    userInput.addEventListener('keydown', function (event) {
        if (event) {
            if (event.key == "Enter") {
                if (userInput.value != '')
                    addItem();
            }
        }
    })

    function addItem() {
        let groceryNumber = groceryItems.getElementsByTagName('h2').length + 1
        let h2 = document.createElement('h2');
        h2.innerHTML = groceryNumber + '- ' + userInput.value;

        h2.addEventListener('click', function (event) {
            h2.classList.toggle('done');
        });
        groceryItems.insertAdjacentElement("beforeend", h2);
        userInput.value = '';
    }
});
