var main = function() {

};

$(document).ready(main);
$('.more-btn').on('click', event => {
    $(event.currentTarget).siblings().toggle()
})

$('.share').on('click', event => {
    $(event.currentTarget).siblings().toggle()
})

$('.notification').on('click', event => {
    $(event.currentTarget).toggleClass('active')
})