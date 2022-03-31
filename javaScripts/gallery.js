var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");

Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
   item.addEventListener("click", event => {
      modalEle.style.display = "block";
      modalImage.src = event.target.src;
   });
});
document.querySelector(".close").addEventListener("click", () => {
   modalEle.style.display = "none";
});





// Card sliders

// selecting all sections with class of section
const sections = document.querySelectorAll(".option");

// Foreach section when clicked
sections.forEach((option) => {
  option.addEventListener("click", () => {

  // remove active class from all another section and
  // add it to the selected section
  sections.forEach((option) => {
    option.classList.remove("active");
  });
  option.classList.add("active");
  });
});







//Select background
function backgroundDrop() {
  var slctdColor = document.getElementById("drp1").value;

  switch (slctdColor) {
    case "night":
      document.body.style.background = "#022238";
      document.getElementById('overlay').style.background = "#022238";
      document.getElementById('shadow').style.background = "linear-gradient(to top, #022238, transparent)";

      break;
    case "evening":
      document.body.style.background = "linear-gradient(#dc683c, #f99644, #eb6800)";
      document.getElementById('overlay').style.background = " linear-gradient(#dc683c, #f99644, #eb6800)";
      document.getElementById('shadow').style.background = "linear-gradient(to top, #e5763e, transparent)";





      break;
    case "morning":
      document.body.style.background = "linear-gradient(#bfd6f6, #6fa5f1)";
      document.getElementById('overlay').style.background = "linear-gradient(#3c7dd9, #4b91f1, #03a9f4, #8dbdff)";
      document.getElementById('shadow').style.background = "linear-gradient(to top, #b2cef5, transparent)";
  }
}


//Select fontscolor
function backgroundDrop2() {
  var slctdColor = document.getElementById("drp2").value;
  var figT = document.getElementsByClassName('figCapText');
  var themeCT = document.getElementsByClassName('ThemeSelect');
  var imgDes = document.getElementsByClassName('imageDescription');


  switch (slctdColor) {
    case "white":
    document.getElementById('headText').style.color = "floralwhite";
    document.getElementById('headTextBack').style.background = "floralwhite";
    document.getElementById('placesSLHead').style.color = "floralwhite";
    for (var i = 0; i < figT.length; i++) {
      figT[i].style.color = 'floralwhite';
    }

    for (var i = 0; i < themeCT.length; i++) {
      themeCT[i].style.color = 'floralwhite';
    }

    for (var i = 0; i < imgDes.length; i++) {
      imgDes[i].style.color = 'floralwhite';
    }



      break;
    case "blue":
    document.getElementById('headText').style.color = "#03a9f4";
    document.getElementById('headTextBack').style.background = "#03a9f4";
    document.getElementById('placesSLHead').style.color = "#03a9f4";
    for (var i = 0; i < figT.length; i++) {
      figT[i].style.color = 'rgb(54,95,160)';
    }

    for (var i = 0; i < themeCT.length; i++) {
      themeCT[i].style.color = '#03a9f4';
    }

    for (var i = 0; i < imgDes.length; i++) {
      imgDes[i].style.color = 'rgb(54,95,160)';
    }

      break;
    case "default":
    document.getElementById('headText').style.color = "gold";
    document.getElementById('headTextBack').style.background = "gold";
    document.getElementById('placesSLHead').style.color = "gold";
    for (var i = 0; i < figT.length; i++) {
      figT[i].style.color = 'black';
    }

    for (var i = 0; i < themeCT.length; i++) {
      themeCT[i].style.color = 'gold';
    }

    for (var i = 0; i < imgDes.length; i++) {
      imgDes[i].style.color = 'black';
    }





  }
}
