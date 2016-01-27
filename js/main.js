console.log("hoi");

/**
 Ik klik op het tekstje
 vervolgens gaat het tekstje weg
 daarna komt er links een plaatje
 en recht komt tekst
 dit blijft staan
 **/

$(".makers .text").on('click', makersTextClickHandler);

function makersTextClickHandler() {
    console.log("geklikt");
}


$(".svg-wrapper-makers").click(function () {
    $(".svg-wrapper-makers").fadeOut();
    $(".svg-wrapper-makers").fadeOut("slow");
    $(".svg-wrapper-makers").fadeOut(3000);
});


$(".svg-wrapper-action").click(function () {
    $(".svg-wrapper-action").fadeOut();
    $(".svg-wrapper-action").fadeOut("slow");
    $(".svg-wrapper-action").fadeOut(3000);
});


$(".svg-wrapper-product").on('click', svgWrapperProductCLickHandler);

function svgWrapperProductCLickHandler(){
    $(".svg-wrapper-product").fadeOut();
    $(".svg-wrapper-product").fadeOut("slow");
    $(".svg-wrapper-product").fadeOut(3000);

    $(".box-1 .thumbnail").show("slow", function () {
        // Animation complete.
    });

    $(".box-1 .rolling-text").show("slow", function () {
        // Animation complete.
    });

    $(".box-1 h1").show("slow", function () {
        // Animation complete.
    });
}



$(".svg-wrapper-makers").click(function () {
    $(".box-2 .thumbnail").show("slow", function () {
        // Animation complete.
    });
});

$(".svg-wrapper-makers").click(function () {
    $(".box-2 .rolling-text").show("slow", function () {
        // Animation complete.
    });
});

$(".svg-wrapper-makers").click(function () {
    $(".box-2 h1").show("slow", function () {
        // Animation complete.
    });
});

$(".svg-wrapper-action").click(function () {
    $(".box-3 .thumbnail").show("slow", function () {
        // Animation complete.
    });
});

$(".svg-wrapper-action").click(function () {
    $(".box-3 .rolling-text").show("slow", function () {
        // Animation complete.
    });
});

$(".svg-wrapper-action").click(function () {
    $(".box-3 h1").show("slow", function () {
        // Animation complete.
    });
});





