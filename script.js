
window.onscroll = function() {myFunction()};


var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

/* aggiungo lo spinner*/
$('#mySpinner').addClass('spinner');

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/* parallasse*/
<section class="slide" id="slide1" data-stellar-background-ratio="0.5">

<section class="slide" id="slide3" data-stellar-background-ratio="0.5">

<section class="slide" id="slide5" data-stellar-background-ratio="0.5">
/* fine parallasse*/
