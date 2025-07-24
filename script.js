/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log(":)");

const btn = document.querySelector("button"); // Get the button from the page
if (btn) {
  // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}

// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } },
    "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => {
    goto(f.dataset.file, f.dataset.line);
  };
});

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.height = "80vw";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.height = "0vw";
}

/*--------------------------------*/

function setUpModal(modalNum) {
  // Get the modal1
  var modal = document.getElementById("myModal" + modalNum);

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg" + modalNum);
  var modalImg = document.getElementById("img0" + modalNum);
  var captionText = document.getElementById("caption" + modalNum);
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    if (captionText != null) {
      captionText.innerHTML = this.alt;
    }
  };

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close" + modalNum)[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
}

//add a new 1 to this array for each new modal
var slideIndices = new Array(1, 1, 1, 1, 1, 1, 1, 1);

// for future modals call them like these ones
// setUpModal(3);
// showSlides(slideIndices[2], 3);
// and so on, should be easy

setUpModal(1);
setUpModal(2);
setUpModal(3);
setUpModal(4);
setUpModal(5);
setUpModal(6);
setUpModal(7);
setUpModal(8);
showSlides(slideIndices[0], 1);
showSlides(slideIndices[1], 2);
showSlides(slideIndices[2], 3);
showSlides(slideIndices[3], 4);
showSlides(slideIndices[4], 5);
showSlides(slideIndices[5], 6);
showSlides(slideIndices[6], 7);
showSlides(slideIndices[7], 8);

// Next/previous controls
function plusSlides(n, i) {
  showSlides((slideIndices[i-1] += n), i);
}

// Thumbnail image controls
function currentSlide(n, i) {
  showSlides((slideIndices[i-1] = n), i);
}


function showSlides(n, modalNum) {
  var i;
  var slides = document.getElementsByClassName("mySlides" + modalNum);
  // var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption" + modalNum);
  if (n > slides.length) {
    slideIndices[modalNum - 1] = 1;
  }
  if (n < 1) {
    slideIndices[modalNum - 1] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndices[modalNum - 1] - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex - 1].alt;
}