$(".getfinancing_info_mobile_title").click(function () {
   //this.classList.toggle('active');
   $output_el = $(this).data('el');
   if($($output_el).hasClass('active')){
       $($output_el).removeClass('active');
   } else {
       $($output_el).addClass('active');
   }
});

$(".getfinancing_info_link").click(function () {
    if (window.innerWidth > 575) {
        $(".getfinancing_info_link").removeClass('active');
        this.classList.add('active');
        $output_el = $(this).data('el');
        $('.getfinancing_info_detail').removeClass('active');
        $($output_el).addClass('active');
        resizeInfoDescription();
    } else {
        $output_el = $(this).data('el');
        if (this.classList.contains('active_mobile')) {
            this.classList.remove('active_mobile');
            $($output_el).removeClass('active_mobile');
        } else {
            this.classList.add('active_mobile');
            $($output_el).addClass('active_mobile');
        }
    }
});

window.addEventListener('resize', function () {
    resizeInfoDescription();
});

window.addEventListener('load', function () {
    resizeInfoDescription();
});

function resizeInfoDescription(){
    $(".getfinancing_info_detail").each(function () {
        if(this.classList.contains('active')) {
            var height = $(this).height() + 74;
            if (window.innerWidth > 575) {
                $(".getfinancing_info_wrapper").each(function () {
                    this.style.paddingBottom = height + "px";
                });
            } else {
                $(".getfinancing_info_wrapper").each(function () {
                    this.style.paddingBottom = 0;
                });
            }
        }
    })
}
