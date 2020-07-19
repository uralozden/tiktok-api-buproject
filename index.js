// express'i dahil edelim,
const app = require('express')()
const TikTokScraper = require('tiktok-scraper');

// HTTP GET isteğine JSON tipinde yanıt verelim,
app.get('/', (req, res) => {

  (async () => {
    try {
        const posts = await TikTokScraper.hashtag('kombi', { number: 500 });
        console.log(posts); 
        res.json(posts)

    } catch (error) {
        console.log(error);
    }
})();

})

// Uygulama 3000 portundan çalışacak.
app.listen(3000)