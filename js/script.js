$(document).ready(function() {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Smooth Scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('shadow-sm').css('padding', '10px 0');
        } else {
            $('.navbar').removeClass('shadow-sm').css('padding', '15px 0');
        }
    });

    // Simple fade-in effect for cards on scroll (optional)
    $(window).scroll(function() {
        $('.card').each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 4;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({'opacity':'1'}, 500);
            }
        });
    });

    // Log message for initialization
    console.log("HOM Academy Template Initialized!");
});
