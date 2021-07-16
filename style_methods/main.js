// Add CSS styling to HTML elements

$(document).ready(() => {
    $('.login-button').on('click', () => {
        $('.login-form').toggle();
    });
    
    $('.menu-button').on('mouseenter', () => {
        $('.nav-menu').show();
            $('.menu-button').css('color', '#C3FF00')
    })
    
    $('.nav-menu').on('mouseleave', () => {
        $('.nav-menu').hide();
            $('.menu-button').css('color', '#EFEFEF')
    })
});

// Pass multiple CSS stles to HTML elements using an object and key/value pairs.

$(document).ready(() => {
    $('.login-button').on('click', () => {
        $('.login-form').toggle();
    });
    
    $('.menu-button').on('mouseenter', () => {
        $('.nav-menu').show();
            $('.menu-button').css({color: '#C3FF00', backgroundColor: '#535353'})
    })
    
    $('.nav-menu').on('mouseleave', () => {
        $('.nav-menu').hide();
            $('.menu-button').css({color: '#EFEFEF', backgroundColor: '#303030'})
    })
}); 




// Pass CSS properties in through animate
$(document).ready(() => {
    $('.login-button').on('click', () => {
        $('.login-form').toggle();
    });
    
    $('.menu-button').on('mouseenter', () => {
        $('.nav-menu').show();
            $('.menu-button').css({color: '#C3FF00', backgroundColor: '#535353'})
                $('.menu-button').animate({
                    fontSize: '24px'
                }, 200)
    })
    
    $('.nav-menu').on('mouseleave', () => {
        $('.nav-menu').hide();
            $('.menu-button').css({color: '#EFEFEF', backgroundColor: '#303030'})
                $('.menu-button').animate({
                    fontSize: '18px'
                }, 200)
        })
});

// CSS Add class method which refers to the classes in the CSS sheet intead of using the CSS method. Best practices.

$(document).ready(() => {
    $('.login-button').on('click', () => {
        $('.login-form').toggle();
    });
    
    $('.menu-button').on('mouseenter', () => {
        $('.nav-menu').show();
            $('.menu-button').addClass('button-active')
                $('.menu-button').animate({
                    fontSize: '24px'
                        }, 200)
    })
    
    $('.nav-menu').on('mouseleave', () => {
        $('.nav-menu').hide();
            $('.menu-button').css({color: '#EFEFEF', backgroundColor: '#303030'})
                $('.menu-button').animate({
                    fontSize: '18px'
                    }, 200)
    })    
});



// remove Class
$(document).ready(() => {

    $('.login-button').on('click', () => {
        $('.login-form').toggle();
    });
    
    $('.menu-button').on('mouseenter', () => {
        $('.nav-menu').show();
            $('.menu-button').addClass('button-active');
                $('.nav-menu').removeClass('hide');
                    $('.menu-button').animate({
                        fontSize: '24px'
                    }, 200)
    })
    
    $('.nav-menu').on('mouseleave', () => {
        $('.menu-button').removeClass('button-active')
        
        $('.menu-button').animate({
            fontSize: '18px'
        }, 200)
    })
}); 


// Toggle class
$(document).ready(() => {
    $('.login-button').on('click', () => {
        $('.login-form').show();
    });
    
    $('.menu-button').on('click', () => {
        $('.nav-menu').toggleClass('hide')
            $('.menu-button').toggleClass('button-active')
    })  
}); 


// Full scope
$(document).ready(() => {
    $('.login-button').on('click', () => {
        $('.login-form').toggle();
    });
    
    $('.menu-button').on('mouseenter', () => {
        $('.nav-menu').show();
            $('.menu-button').addClass('button-active');
                $('.nav-menu').removeClass('hide');

    $('.menu-button').animate({
        fontSize: '24px'
        }, 200)
    })
    
    $('.nav-menu').on('mouseleave', () => {
    $('.menu-button').removeClass('button-active')  
        $('.menu-button').animate({
            fontSize: '18px'
        }, 200)
    })    
}); 