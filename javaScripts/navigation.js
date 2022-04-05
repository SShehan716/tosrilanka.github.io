
 window.addEventListener('scroll', function () {     //scroll animation
  let nav = document.querySelector('nav');
  let windowPosition = window.scrollY > 0;
  nav.classList.toggle('scrolling-active', windowPosition);
})



function openpage(){                                       //search working
  var getserch= document.getElementById('list_of').value;
  if (getserch=="Gallery"){
    window.open("gallery.html","_self")
   }else if(getserch=="Products"){
      window.open("product.html","_self")

  }else if(getserch=="Quiz"){
    window.open("quiz.html","_self")

  }else if(getserch=="Query"){
    window.open("query.html","_self")

  }else if(getserch=="About Us"){
    window.open("studentsDetails.html","_self")
  }else if(getserch=="Additional page"){
    window.open("additionalpage.html","_self")
 
} else if(getserch=="Home"){
    window.open("home.html","_self")
 
}else{
  alert("Please try differnt keyword")
}
// js for scroll btn
//when scrolling down appering button
function topFunction() {
  document.documentElement.scrollTop = 0;
}
}




// js for scroll btn
//when scrolling down appering button
function topFunction() {
  document.documentElement.scrollTop = 0;
}


// when scroll 50px
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
 const mybutton = document.getElementById("scrollbtn");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
// end of js scroll
