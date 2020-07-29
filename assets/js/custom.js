(function ($) {
    // loading
    $(window).load(function () {
        $("#loading").hide();
        $("body").removeClass("noScroll");
    });

    // side-nav
    $("#header .ham").click(function (e) {
        e.preventDefault();
        $("#side-nav .side-nav").animate({
            'left': '0'
        }, 300);
        $("#side-nav .backdrop").addClass("on");
    });
    $("#side-nav .backdrop").click(function () {
        $("#side-nav .side-nav").animate({
            'left': '-100%'
        }, 300);
        $(this).removeClass("on");
    });
})(jQuery);