"use strict"

let resultCard;
let main;
$(document).ready(function() {
    resultCard = getStorage();
    main = document.querySelector('.result')
    main.innerHTML = resultCard;
})


function getStorage() {
    const storage = localStorage.getItem('card');
    if (storage) {
        return storage;
    } else {
        return 'No result!';
    }
}