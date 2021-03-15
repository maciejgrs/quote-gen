const author = document.querySelector("#author");
const quote = document.querySelector("#quote");
const newQuote = document.querySelector("#new-quote");
const twitterBtn = document.querySelector(".twitter-button");

let qoutes = [];

const fetchQoute = async () => {
  const url = "https://type.fit/api/quotes";
  try {
    const response = await fetch(url);
    qoutes = await response.json();

    buildQoute();
  } catch (err) {
    console.log(err);
  }
};

const buildQoute = () => {
  const random = qoutes[Math.floor(Math.random() * qoutes.length)];
  if (!random.author) {
    author.innerText = "Unknown";
  } else {
    author.innerText = random.author;
  }
  if (random.text.length > 50) {
   
    quote.classList.add('long-quote')
  } else {
    quote.classList.remove('long-quote')
  }
  quote.innerText = random.text;
};

newQuote.addEventListener("click", () => {
  fetchQoute();
});
