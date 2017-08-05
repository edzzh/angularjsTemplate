// ===== Scroll To The Top ====
$(window).scroll(function () {
    if($(window).width() > 1024) {  //checks windows width

        $('#return-to-top').css('visibility','visible');
        if ($(this).scrollTop() >= 400) {  //if page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    //fade in arrow
        } else {
            $('#return-to-top').fadeOut(200);   //else fade out the arrow
        }

    }else{
        $('#return-to-top').css('visibility','hidden');
    }
});
$('#return-to-top').click(function () {     //when arrow is clicked
    $('body,html').animate({
        scrollTop: 0    //scroll to top of the document
    }, 500);
});
// ==== Scroll End ====