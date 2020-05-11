var colors = ["#8CE1CB", "#82DACB", "#79D4CB", "#6FCDCA", "#65C6CA"];

var years = [2005, 2009, 2016, 2017, 2018];

function makeCircles2(){
    var first = years[0];
    var last = years[years.length-1];
    var distance = 100/(years.length-1);
    var dist = distance - 1;
    $("#line").append('<div class="circle" id="circle0" style="left: ' + 0 + '%; background-color: '+colors[0]+';"><div class="popupSpan">' + years[0] + '</div></div>');
    for (i = 1; i < years.length - 1; i++) {
        $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + distance * i + '%; background-color: '+colors[i]+';"><div class="popupSpan">' + years[i] + '</div></div>');
    }
    $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + 99 + '%; background-color: '+colors[i]+';"><div class="popupSpan">' + years[years.length - 1] + '</div></div>');
    $(".circle:first").addClass("active");
}

makeCircles2();

$(".circle").click(function() {
    var spanNum = $(this).attr("id");
    selectDate(spanNum);
});

function selectDate(selector) {
    $selector = "#" + selector;
    var current = $selector.replace("circle", "years_");

    $(".circle").removeClass("active");
    $(".timeline_years").removeClass("active");
    $($selector).addClass("active");
    $(current).addClass("active");
};

//////////////// SCROLL ///////////////////////

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        if($('.getfinancing_info').length == 1){
            return;
        }
        if($('.index-section-2').length == 1){
            return;
        }
        if(this.className == 'about_career_option active'){
            return;
        }
        if(this.className == 'financing-header-fin'){
            return;
        }
        if(this.className == 'financing-header-form'){
            return;
        }
        if($('.about').length == 1){
            if($(this).parent().attr('class') == 'header-mobile'){
                return;
            }
            e.preventDefault();
            if(!($("#navbarNavAltMarkup").hasClass("collapsing"))) {
                $("#navbarNavAltMarkup").removeClass("show");
                $(".navbar-toggler").attr("aria-expanded", "false");

                $('a').each(function () {
                    $(this).removeClass('active');
                });
                $(this).addClass('active');

                var target = this.hash,
                    $target = $(target);

                $(document).on("scroll", onScroll);
                if(this.className == 'about_career_option active'){
                    return;
                }
                if(this.className == 'about_career_option'){
                    return;
                }
                if (window.innerWidth > 575 && window.innerWidth < 768) {
                    $('html, body').scrollTop($target.offset().top - 50);
                } else {
                    $('html, body').scrollTop($target.offset().top - 40);
                }
            }
        }
    });
    $(document).on('load',onScroll());
});

window.addEventListener('resize', function () {
   onScroll();
});

function onScroll(event){
    var scrollPos = $(document).scrollTop() + 200;
    $('#about_navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#about_navbar ul li a').removeClass("active");
            currLink.addClass("active");
            if(currLink.html() != $(".about_toggler_text").html()){
                $(".about_toggler_text").html(currLink.html());
            }
        }
        else{
            currLink.removeClass("active");
        }
    });
}

/*
	Plugin: Pinned
	Author: Drew Dahlman ( www.drewdahlman.com )
	Version: 0.0.2
*/

(function($) {

    $.fn.pinned = function(options,pinning,unpinned) {
        var defaults = {
            bounds: '0px',
            scrolling: '0px',
            mobile: false
        }

        if(pinning && unpinned){
            var callback = {
                pinning: pinning,
                unpinned: unpinned
            }
        }

        return this.each(function() {

            var settings = $.extend(defaults,options);
            var callbacks = $.extend(callback,pinning,unpinned);

            var $this = $(this);
            var orig = $this.css('top');
            $this.data('pinned',true);

            var pinnedTimeout = 0;

            function init(){
                if(isMobile() && settings.mobile == false || !isMobile() ){
                    windowScroll();
                }
                else{
                    mobileScroll();
                }
            }

            windowScroll = function(){
                if($this.data('pinned'))
                    $(window).scroll(function(){
                        if ($(window).scrollTop() > settings.bounds && $this.css('position') != 'fixed' ){
                            $this.css({'position': 'fixed', 'top': settings.scrolling});
                            if(callbacks.pinning != null){
                                callbacks.pinning();
                            }
                        }
                        if ($(window).scrollTop() < settings.bounds && $this.css('position') != 'absolute'){
                            $this.css({'position': 'absolute', 'top': orig});
                            if(callbacks.unpinned != null){
                                callbacks.unpinned();
                            }
                        }
                    });
            }

            // TODO - Add better support for mobile devices on scroll
            mobileScroll = function(){
                if($this.data('pinned',true))
                    $(window).bind('touchmove',function(){
                        if ($(window).scrollTop() > settings.bounds && $this.css('position') != 'fixed' ){
                            $this.css({'position': 'fixed', 'top': settings.scrolling});

                        }
                        if ($(window).scrollTop() < settings.bounds && $this.css('position') != 'absolute'){
                            $this.css({'position': 'absolute', 'top': orig});

                        }
                    });
            }

            isMobile = function(){
                if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
                    return true;
                }
                else {
                    return false;
                }
            }
            init();
        });
    };

})(jQuery);

$(".about_nav").pinned({
    bounds: 100, // when to become sticky 100px
    scrolling: 0, // position during scroll 0px
});