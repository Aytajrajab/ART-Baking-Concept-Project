"use strict"
let input, submit;
const cards = [{
        id: 1,
        name: "Cake"
    },
    {
        id: 2,
        name: "Fish"
    },
    {
        id: 3,
        name: "Fettuccini"
    },
    {
        id: 4,
        name: "Kebab"
    },
    {
        id: 5,
        name: "Chocolate"
    },
    {
        id: 6,
        name: "Salad"
    }
]
$(document).ready(function() {
    input = document.querySelector("#input")
    submit = document.querySelector("#button")
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const search = input.value;
        cards.forEach(el => {
            if (el.name.toLowerCase() === search.toLowerCase()) {
                const card = document.getElementById(`${el.id}`).outerHTML;
                localStorage.setItem('card', card);
                location.href = 'result.html';
            }
        })
    })
})