
$('.financing-lang').on('click', function () {
    $('.financing-languages').slideToggle();
    if($('.arrow-down').css('border-top') == '7px solid rgb(221, 69, 57)'){
        $('.arrow-down').css('border-bottom','7px solid #dd4539');
        $('.arrow-down').css('border-top','0px solid #dd4539');
    }else{
        $('.arrow-down').css('border-bottom','0px solid #dd4539');
        $('.arrow-down').css('border-top','7px solid #dd4539');
    }
});
$(window).resize(function () {
    if(window.innerWidth < 992){
        if($('.financing-languages').css('display') == 'block'){
            $('.financing-languages').css('display', 'none');
        }
    }
});
