
// Notes
//use $(window) so it shows only the viewport, essentially, use this later



// fading in items .hideme on scroll
$(function(){  // $(document).ready shorthand
  $('').fadeIn('slow');
});

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideuntilscroll').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).delay(100).animate({'opacity':'1'}, 600);
            }
        });
    });
});



// set the starticonstext to be hidden until everything on the front page has loaded
$(".starticonstext").attr("display", "none");
//hiding the rest of the site while it loads
$(".hideuntilload").hide();

// fading out the loading circle
function loadinganimationout() {
  $("#loadinganimation").addClass("scale-out-center");
}

function pageLoaded() {
  setTimeout(loadinganimationout, 1500);
  setTimeout(showPage, 2000);
}

// animations to fade in all divs in first section
function maintextanimation() {
  $("#maintext1").addClass("text-pop-up-top");
}
function maintextanimation2() {
  $("#maintext2").addClass("text-pop-up-top");
}
function starticonsanimation1() {
  $("#starticon1").addClass("slide-in-fwd-center");
}
function starticonsanimation2() {
  $("#starticon2").addClass("slide-in-fwd-center");
}
function starticonsanimation3() {
  $("#starticon3").addClass("slide-in-fwd-center");
}
if (window.matchMedia("(max-width: 600px)").matches) {
  function starticonstext1() {
    $("#starticonstext1").addClass("slide-in-fwd-center");
  }
  function starticonstext2() {
    $("#starticonstext2").addClass("slide-in-fwd-center");
  }
  function starticonstext3() {
    $("#starticonstext3").addClass("slide-in-fwd-center");
  }
}

// moving the name and title up from centre
function movingnames() {
  $("#textsection2").addClass("movingmynameclass");
}


function showPage() {
  $('#loader').fadeOut("slow");
  setTimeout(maintextanimation, 700);
  setTimeout(maintextanimation2, 1400);
  setTimeout(starticonsanimation1, 2700);
  setTimeout(starticonsanimation2, 3200);
  setTimeout(starticonsanimation3, 3800);
  setTimeout(movingnames, 2100);
  if (typeof starticonstext1 === "function") { // for different screen sizes
    setTimeout(starticonstext1, 2700);
    setTimeout(starticonstext2, 3200);
    setTimeout(starticonstext3, 3800);
  }
  $(".hideuntilload").show();
  // document.getElementById("myDiv").style.display = "block";  is this relevant?
}


// Menu icon and items animations

const menuIcon = document.querySelector('#menuicon');

function menuAnimation() {
    $('#menuicon').toggleClass("clickMenuSpan");
    $('#menuicon').toggleClass("rotateMenu");
};

//menuIcon.addEventListener('click', menuAnimation);

// since scrollinotview doesnt work too well on certain browxers, use more js instead
function getOffset( el ) { // to find position of element on page
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
var x = getOffset( document.getElementById('yourElId') ).left;




// scroll to element when you click the start icons
function scroll1 () {
  $('#page1')[0].scrollIntoView({
    behavior: "smooth", block: "start",
  });
};
$('#starticon1').click(scroll1);

function scroll2 () {
  $('#page2')[0].scrollIntoView({
    behavior: "smooth", block: "start",
  });
};
$('#starticon2').click(scroll2);

function scroll3 () {
  $('#page3')[0].scrollIntoView({
    behavior: "smooth", block: "start",
  });
};
$('#starticon3').click(scroll3);













//when arrow at bottom clicked, scroll to the very top of the page
function scrolltop () {
  $('#textsection')[0].scrollIntoView({
    behavior: "smooth", block: "start",
  });
};
$('#scrolltothetop').click(scrolltop);








//
