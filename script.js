 let qoutes = []

const fetchQoute = async () => {
    const url = 'https://type.fit/api/quotes'
    try {
           const response = await fetch(url)
           qoutes = await response.json()
           const random = qoutes[Math.floor(Math.random()*qoutes.length)];
           console.log(random.text);
    }
    catch (err) {
         console.log(err);
    }
}

fetchQoute()