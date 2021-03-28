const quotes = [
  'Remember to turn on your camera!',
  "Don't be afraid to talk. I'm sure your peers would love to hear from you!",
  'Mistakes are proof that you are trying!',
  'Never give up! I believe in you!',
  "Put your camera on today! You'll put a smile on your teachers face :)",
];
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  let choice = Math.floor(Math.random() * 5);
  let quote = quotes[choice];
  let id = `output${slideIndex}`;
  document.getElementById(id).innerHTML = quote;
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
