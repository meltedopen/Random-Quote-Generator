/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

const quotes = [
  {
    quote: 'The only true wisdom is in knowing you know nothing.',
    source: 'Socrates',
    citation: 'Apology 29b-c',
    year: '410 BC'
  },
  {
    quote: 'Problems are not stop signs, they are guidelines.',
    source: 'Robert H. Schuller'
  },
  {
    quote: 'No act of kindness, no matter how small, is ever wasted.',
    source: 'Aesop',
    year: '600 BC'
  },
  {
    quote: 'There is nothing permanent except change.',
    source: 'Heraclitus'
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    source: 'Edgar Allan Poe',
    citation: 'The Flag Of Our Union',
    year: '1849'
  },
  {
    quote:
      'Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!',
    source: 'Billy Connolly',
    tag: 'humor'
  }
];

console.log(quotes);

//Random BG color
const random_bg_color = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  console.log(bgColor);

  document.body.style.background = bgColor;
};

//Get Random Quote
const getRandomQuote = () => {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
};

//Print Random Quote
const printQuote = () => {
  let randomQuote = getRandomQuote();
  let htmlString = '';
  htmlString += `<p class ='quote'>${randomQuote.quote}</p>`;
  htmlString += `<p class ='source'>${randomQuote.source}`;
  if (randomQuote.citation) {
    htmlString += `<span class ='citation'>${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    htmlString += `<span class ='year'>${randomQuote.year}</span>`;
  }
  if (randomQuote.tag) {
    htmlString += `<span class ='tag'>${randomQuote.tag}</span>`;
  }
  htmlString += '</p>';
  document.getElementById('quote-box').innerHTML = htmlString;
  random_bg_color();
};

document
  .getElementById('loadQuote')
  .addEventListener('click', printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
