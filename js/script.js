'use strict'

let buttons = [];
window.onload = () => {

    buttons = document.querySelectorAll(".card .card-body .btn");
    buttons.forEach(el => el.addEventListener('click', function(e) {
        e.preventDefault();
        const card = el.closest('.card').outerHTML;
        console.log(card)
        localStorage.setItem('card', card.toString());
        location.href = 'result.html';

    }))
}

$(document).ready(function() {
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".fixed-top").css("opacity", "0.8");
        } else {
            $(".fixed-top").css("background", "#8a817c");
            $(".fixed-top").css("opacity", "1")
        }
    })
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll < 500) {
            $(".scroll-top").css("display", "none");
        } else {
            $(".scroll-top").css("display", "block");
        }
    })




});