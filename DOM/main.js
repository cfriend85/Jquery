{/* <div class='parent'>
    <div class='child' id='sibling1'>
    <p class='grandchild'></p>
    </div>
    <div class='child' id='sibling2'></div>
    <div class='child' id='sibling3'></div>
</div>

<div class='parent' id='holder'>
    <div>Child <span>1</span></div>
    <div>Child <span>2</span></div>
    <div>Child <span>3</span></div>
</div> */}

// const $kids = $('#holder').children();
// $kids.on('click', event => {
//   $(event.currentTarget).css('border', '1px solid black');
// });
// *******************************************************************

$('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
        $(event.currentTarget).siblings().removeClass('active')
            $('.shoe-details').children().removeClass('disabled')   
});

$(document).ready(() => {
    $('.shoe-details').show();
        $('.more-details-button').on('click', event => {
            $(event.currentTarget).closest('.product-details').next().toggle()
    });  
    
    $('.shoe-details li').on('click', event => {
        $(event.currentTarget).addClass('active');

    $(event.currentTarget).siblings().removeClass('active')

    $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled')
    });
})


// .find & toggle
$(document).ready(() => {
    $('.more-details-button').on('click', event => {
        $(event.currentTarget).closest('.product-details').next().toggle()
            $(event.currentTarget).find('img').toggleClass('rotate')
    });  
    
    $('.shoe-details li').on('click', event => {
        $(event.currentTarget).addClass('active');
    
    $(event.currentTarget).siblings().removeClass('active')

    $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled')
    });
})