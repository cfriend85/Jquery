$(document).ready(() => {
    $('.hide-button').on('click', () => {
        $('.first-image').hide();
    });
    
    $('.show-button').on('click', () => {
        $('.first-image').show();
    });

    // Toggle method accomplishes both of these with a single button
    $('.toggle-button').on('click', () => {
        $('.first-image').toggle();
    });



    // fade in/out button effect thier elemet. You can enter a parameter to specify how long each one takes. 1000 milliseconds is one second. Default is 400.
    $('.fade-out-button').on('click', () => {
        $('.fade-image').fadeOut(500);
    });

    $('.fade-in-button').on('click', () => {
        $('.fade-image').fadeIn(4000);
    });

    // Toggle a fade
    $('.fade-toggle-button').on('click', () => {
        $('.fade-image').fadeToggle('fast');
    });

    $('.up-button').on('click', () => {
        $('.slide-image').slideUp(100);
    });

    $('.down-button').on('click', () => {
        $('.slide-image').slideDown('slow');
    });

    $('.slide-toggle-button').on('click', () => {
        $('.slide-image').slideToggle();
    });
});