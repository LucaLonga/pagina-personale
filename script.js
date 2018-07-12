
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
