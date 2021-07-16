$(document).ready(() => {
    $('#cart').on('click', () => {
        $('#cartMenu').show();
    });

    //This is another way of doing it where it depends on where the mouse is, not a click. 
    // $('#cart').on('mouseenter', () => {
    //     $('#cartMenu').show();
    // });


    $('#account').on('click', () => {
        $('#accountMenu').show();
    });

    $('#help').on('click', () => {
        $('#helpMenu').show();
    });

    $('.dropdown-menu').on('mouseleave', () => {
        $('.dropdown-menu').hide();
    })
})