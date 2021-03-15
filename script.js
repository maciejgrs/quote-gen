const author = document.querySelector("#author");
const quote = document.querySelector("#quote");
const newQuote = document.querySelector("#new-quote");
const twitterBtn = document.querySelector(".twitter-button");
const loader = document.querySelector('#loader')
const quoteContainer = document.querySelector('.quote-container');

let qoutes = [];

const fetchQoute = async () => {
    loadings(false, true)
  const url = "https://type.fit/api/quotes";
  try {
    const response = await fetch(url);
    qoutes = await response.json();

    setTimeout(() =>
    {
        buildQoute()
    }, 800)
     
    
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
    quote.classList.add("long-quote");
  } else {
    quote.classList.remove("long-quote");
  }
  quote.innerText = random.text;
  loadings(true, false)
};

const tweetTheQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`;
  window.open(twitterUrl, "_blank");
};


const loadings = (bool, bool2) => {
    loader.hidden = bool
    quoteContainer.hidden = bool2   
}
 
newQuote.addEventListener("click", fetchQoute);

twitterBtn.addEventListener("click", tweetTheQuote);

fetchQoute()

