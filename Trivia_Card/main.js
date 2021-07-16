$(document).ready(() =>{
    $('.hint-box').on('click', () => {
        $('.hint').slideToggle(600);
    });
    
    $('.wrong-answer-one').on('click', () => {
        $('.wrong-text-one').fadeOut('slow');
            $('.frown').show();
    })
    
    $('.wrong-answer-two').on('click', () => {
        $('.wrong-text-two').fadeOut('fast');
            $('.frown').show();
    })
    
    $('.wrong-answer-three').on('click', () => {
        $('.wrong-text-three').fadeOut(1000);
            $('.frown').show();
    })

    $('.correct-answer').on('click', () => {
        $('.frown').hide();
            $('.smiley').show();
                $('.wrong-answer-one').fadeOut('slow');
                    $('.wrong-answer-two').fadeOut('fast');
                        $('.wrong-answer-three').fadeOut(1000);
    })
})