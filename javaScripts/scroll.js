// scroll button to scroll to topic
// get the scroll button
var mybutton = document.getElementById("mybtn");

// when the user scroll down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display ="block";
  } else {
    mybutton.style.display = "none";
  }
}

// when clicked, scroll to the top of the package
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
