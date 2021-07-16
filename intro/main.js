$(document).ready(() => {
    $('.login-button').on('click', () => {
        $('.login-form').toggle();
    });
    
    $('.product-photo').show();

    const $navDropdown = $('#nav-dropdown').hide();

})

$(document).ready(() => {

    $('.login-button').on('click', () => {
        $('.login-form').toggle();
    });

    const $menuButton = $('.menu-button');
    const $navDropdown = $('#nav-dropdown');

    $menuButton.on('click', () => {
        $navDropdown.show();
    })
    
    $navDropdown.on('mouseleave', () => {
        $navDropdown.hide();
    })
})


$(document).ready(() => {
    $('#cart').on('click', () => {
        $('#cartMenu').show();
    });

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

