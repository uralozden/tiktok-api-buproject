
// express'i dahil edelim,
const app = require('express')()
const TikTokScraper = require('tiktok-scraper');
var PORT = process.env.PORT || 3000;

  // Start function
  const start = async function(a, b) {
    const result = await TikTokScraper.hashtag('kombi', { number: 100 });
    console.log(result); 
  }

  
// HTTP GET isteğine JSON tipinde yanıt verelim,
app.get('/', (req, res) => {

// Call start
start();


})

// Uygulama 3000 portundan çalışacak.
app.listen(PORT)