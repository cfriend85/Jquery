$(document).ready(() => {
    $('.login-button').on('click', () => {
        $('.login-form').show();
    });

    $('.menu-button').on('mouseenter', () => {
        $('.nav-menu').show();
    });
    
    $('.nav-menu').on('mouseleave', () => {
        $('.nav-menu').hide();
    });

    // $('.product-photo').on('mouseenter', () => {
    //     $('.product-photo').addClass('photo-active');
    // }).on('mouseleave', () => {
    //     $('.product-photo').removeClass('photo-active');
    // })


    // This targets an indivual item within a larger class like a div full of pictures. This zooms the one pic you mouse over instead of all.
    $('.product-photo').on('mouseenter', event => {
        $(event.currentTarget).addClass('photo-active')
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('photo-active')
    })
});