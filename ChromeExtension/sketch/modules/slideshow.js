let quotes = [];
let numberOfQuotes = 0;
var slideIndex = 0;

fetch('https://type.fit/api/quotes')
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    quotes = data;
    numberOfQuotes = quotes.length;
  })
  .then(showSlides);

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

  let choice = Math.floor(Math.random() * numberOfQuotes);
  let quote = quotes[choice];
  let quote_id = `quote${slideIndex}`;
  let author_id = `author${slideIndex}`;
  document.getElementById(quote_id).innerHTML = quote.text;
  document.getElementById(author_id).innerHTML = `- ${quote.author}`;

  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
