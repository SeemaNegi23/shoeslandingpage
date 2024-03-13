// Owl Section

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 3,
            },
            600: {
                items: 5,
            },
            1000: {
                items: 8,
            }
        }
    });
});

const btns = document.querySelectorAll('[data-toggle]');
const fltrItmsArr = Array.from(document.querySelectorAll('.fltr-cntnt-itm'));

for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', function show(e) {
        e.preventDefault();
        fltrItmsArr.forEach(div => {
            div.classList.remove('show')

            if (div.dataset.togglr == e.target.dataset.toggle || e.target.dataset.toggle == 'all') {
                div.classList.add('show')
            }
        })
    })

}