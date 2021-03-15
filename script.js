 const author = document.querySelector('#author')
 const quote = document.querySelector('#quote')
 const newQuote = document.querySelector('#new-quote')
 
 let qoutes = []
  

const fetchQoute = async () => {
    const url = 'https://type.fit/api/quotes'
    try {
           const response = await fetch(url)
           qoutes = await response.json()
           
           
            buildQoute()
    }
    catch (err) {
         console.log(err);
    }
}
 
 
 

const buildQoute = () => {
    const random = qoutes[Math.floor(Math.random()*qoutes.length)]
    author.innerText = random.author
    quote.innerText = random.text
}

newQuote.addEventListener('click', () =>  {
    fetchQoute()
})
  