// express'i dahil edelim,
const app = require('express')()
const TikTokScraper = require('tiktok-scraper');
var Port = process.env.Port || 3000
// HTTP GET isteğine JSON tipinde yanıt verelim,
app.get('/', (req, res) => {

  (async () => {
    try {
        const posts = await TikTokScraper.hashtag('kombi', { number: 500 });
        res.json(posts)

    } catch (error) {
        console.log(error);
    }
})();

})
app.listen(Port)