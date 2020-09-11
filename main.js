jQuery(document).ready(function($) {
    navScroll();
    navItems();
    scopriDiPiu();
    seeDayProgram();
    //privacy();
});

/* Hide del logo mentre si scrolla la pagina e show quando si torna all'inizio della pagina */
function navScroll() {
    $(window).scroll(function() {
        $(".navbar-brand > img").hide();
        if ($(window).scrollTop() < 50) {
            $(".navbar-brand > img").show();
        }
    })
}

/* Nav items scroll fino al corrispondente id */
function navItems() {
    $(".nav-item").click(function() {
        var divItem = $(this).attr("value");
        $("a[value!='" + divItem + "']").parent().removeClass("active");
        $("a[value='" + divItem + "']").parent().addClass("active");
        $("html, body").animate({
            scrollTop: $("#" + divItem).offset().top
          }, 800
        )
    })
}

/* Scopri di più */
function scopriDiPiu() {
    $("#find-more").click(function() {
        $("html, body").animate({
            scrollTop: $("#about").offset().top
          }, 800
        )
    })
}

/* Buttoni per mostrare il giorno 1 e il giorno 2 di programma */
function seeDayProgram() {
    $("#1st-program").click(function() {
        $(".1st-day-program").show();
        $(".2nd-day-program").hide();
        $("#1st-program").removeClass("button-round-empty-dimgray").addClass("button-round-dimgray");
        $("#2nd-program").removeClass("button-round-dimgray").addClass("button-round-empty-dimgray");
    })
    $("#2nd-program").click(function() {
        $(".1st-day-program").hide();
        $(".2nd-day-program").show();
        $("#1st-program").removeClass("button-round-dimgray").addClass("button-round-empty-dimgray");
        $("#2nd-program").removeClass("button-round-empty-dimgray").addClass("button-round-dimgray");
    })
}

/* Privacy */
/*function privacy() {
    $("#privacy-button").click(function(){
        $("#privacy-info").toggle("slow");
    })
}*/