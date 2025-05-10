var effect = new Sakura('div', {
    colors: [
      {
        gradientColorStart: 'rgba(255, 183, 197, 0.9)',
        gradientColorEnd: 'rgba(255, 197, 208, 0.9)',
        gradientColorDegree: 120,
      },
      {
        gradientColorStart: 'rgba(255,189,189)',
        gradientColorEnd: 'rgba(227,170,181)',
        gradientColorDegree: 120,
      },
      {
        gradientColorStart: 'rgba(212,152,163)',
        gradientColorEnd: 'rgba(242,185,196)',
        gradientColorDegree: 120,
      },
    ],
    maxSize: 20,
    minSize: 10,
});

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("name");
if (c != null) {
    document.getElementById("name").innerHTML = 'HPBD ' + c + ' 🥳';
}

var main_inner = document.getElementById("main").innerHTML ;
document.getElementById("main").innerHTML = ''
$("#main").fadeOut(1);

$('#play').click(function () {
    document.getElementById("main").innerHTML = main_inner;
    $(".loader").fadeOut(1500);
    $("#main").fadeIn("slow");
    effect.stop();
    $('.balloon-border').animate({
        top: -1000
    }, 4000);
    var audio = $('.song')[0];
    audio.play();

    var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    backSpeed: 10,
    loop: true
});


});