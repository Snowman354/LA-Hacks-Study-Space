window.onload = function () {
  var quotes = [
    'Remember to turn on your camera!',
    "Don't be afraid to talk. I'm sure your peers would love to hear from you!",
    'Mistakes are proof that you are trying!',
    'Never give up! I believe in you!',
  ];
  var choice = Math.floor(Math.random() * 2);
  var quote = quotes[choice];
  document.getElementById('output').innerHTML = quote;
};
