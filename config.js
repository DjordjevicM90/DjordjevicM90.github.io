$(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $("#header").addClass("scrollHeader").removeClass("backgroundHeader");
        } else {
            $("#header").removeClass("scrollHeader").addClass("backgroundHeader");
        }
    });

    $("#navbar-scroll").click(function(){
        $(".navbar").toggleClass("navbar-bg");
    });
});