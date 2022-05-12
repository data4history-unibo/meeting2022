jQuery(document).ready(function($) {
    navScroll();
    activeMove();
    navItems();
    scopriDiPiu();
    seeDayProgram();
    //privacy();
    hostsOrGuests();
    speakers();
});

// Logo hide while scrolling the page and show at the beginning of the page
function navScroll() {
    $(window).scroll(function() {
        $(".navbar-brand > img").hide();
        if ($(window).scrollTop() < 50) {
            $(".navbar-brand > img").show();
        }
    })
}

// Dynamic active class on navbar items while scrolling the page
function activeMove() {
    var heightHome = $("#home").offset().top;
    var heightAbout = $("#about").offset().top;
    var heightProgramma = $("#programma").offset().top;
    var heightRelatori = $("#relatori").offset().top;
    var heightCollegati = $("#collegati").offset().top;
    var heightContatti = $("#contatti").offset().top;
    $(window).scroll(function() {
        var windowPos = window.pageYOffset;
        if (windowPos > heightHome) {
            $(".home-li").addClass("active");
            $(".about-li").removeClass("active");
            $(".programma-li").removeClass("active");
            $(".relatori-li").removeClass("active");
            $(".collegati-li").removeClass("active");
            $(".contatti-li").removeClass("active");
        } 
        if (windowPos > heightAbout) {
            $(".home-li").removeClass("active");
            $(".about-li").addClass("active");
            $(".programma-li").removeClass("active");
            $(".relatori-li").removeClass("active");
            $(".collegati-li").removeClass("active");
            $(".contatti-li").removeClass("active");
        } 
        if (windowPos > heightProgramma) {
            $(".about-li").removeClass("active");
            $(".programma-li").addClass("active");
            $(".relatori-li").removeClass("active");
            $(".collegati-li").removeClass("active");
            $(".contatti-li").removeClass("active");
        }
        if (windowPos > heightRelatori) {
            $(".about-li").removeClass("active");
            $(".programma-li").removeClass("active");
            $(".relatori-li").addClass("active");
            $(".collegati-li").removeClass("active");
            $(".contatti-li").removeClass("active");
        }
        if (windowPos > heightCollegati) {
            $(".about-li").removeClass("active");
            $(".programma-li").removeClass("active");
            $(".relatori-li").removeClass("active");
            $(".collegati-li").addClass("active");
            $(".contatti-li").removeClass("active");
        }
        if (windowPos > heightContatti) {
            $(".about-li").removeClass("active");
            $(".programma-li").removeClass("active");
            $(".relatori-li").removeClass("active");
            $(".collegati-li").removeClass("active");
            $(".contatti-li").addClass("active");
        }
    })
}

// Navbar items click and scroll to corresponding id
function navItems() {
    $(".nav-item").click(function() {
        var divItem = $(this).attr("value");
        $("html, body").animate({
            scrollTop: $("#" + divItem).offset().top + 1
          }, 800
        )
    })
}

// Learn more - Scopri di più button
function scopriDiPiu() {
    $("#find-more").click(function() {
        $("html, body").animate({
            scrollTop: $("#about").offset().top + 1
          }, 800
        )
    })
}

// Buttons to show different days of a program
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

/* Privacy */ // Do not delete it, maybe it can be useful in other projects.
/*function privacy() {
    $("#privacy-button").click(function(){
        $("#privacy-info").toggle("slow");
    })
}*/

// Copy command
function copyURL() {
    var copyText = document.getElementById("copyURL");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById("copiedAlert").style.display = "block";
}

// Copied text alert
function outFunc() {
    document.getElementById("copiedAlert").style.display = "none";
}

// Speakers hosts and guests
let hostsOrGuests = () => {
    $(".sec-speaker").not(".active").hide();
    $(".btn-speaker").on("click", function() {
        var type = $(this).data("target");
        $(".sec-speaker[data-content='" + type + "']").show().addClass("active");
        $(".sec-speaker[data-content!='" + type + "']").hide().removeClass("active");
        $(".sec-speaker[data-content='" + type + "']").find("li[data-target]:first").click();
        $(".btn-speaker[data-target='" + type + "']").addClass("button-round-dimgray").removeClass("button-round-empty-dimgray");
        $(".btn-speaker[data-target!='" + type + "']").removeClass("button-round-dimgray").addClass("button-round-empty-dimgray");
    });
};

// Speakers profile
let speakers = () => {   
    $(".profile").not(".active").hide();
    var activeSpeaker = $(".profile.active").data("content");
    $("li[data-target='" + activeSpeaker + "']").addClass("bold");
    $("li[data-target]").on("click", function() {
        var speaker = $(this).data("target");
        $(".profile[data-content='" + speaker + "']").show().addClass("active");
        $(".profile[data-content!='" + speaker + "']").hide().removeClass("active");
        $("li[data-target='" + speaker + "']").addClass("bold");
        $("li[data-target!='" + speaker + "']").removeClass("bold");
    });
};