$(document).ready(function() {

  var rand = Math.floor(Math.random() * 6) + 1;




});



var imageSlider = document.getElementById('imagesSlider');

var images = ["url('images/dice1.jpeg')", "url('images/dice2.jpeg')", "url('images/dice4.jpeg')", "url('images/dice 3.png')"];


var counter = 0;

function carousel() {
  imageSlider.style.backgroundImage = images[counter];

  counter++;

  if (counter > 3) {
    counter = 0;
  }
  console.log("kanyiangela")
}
setInterval(carousel, 3000)