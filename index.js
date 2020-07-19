// express'i dahil edelim,
const app = require('express')()
const TikTokScraper = require('tiktok-scraper');

// var Port = 3000;
var Port = process.env.PORT || 3000;

// HTTP GET isteğine JSON tipinde yanıt verelim,
app.get('/', (req, res) => {
  res.json({"message":"test api"})
})

app.get('/buproject', (req, res) => {
    (async () => {
    try {
        var keyword = req.query.keyword; // $_GET["id"]
        if (keyword){
          const posts = await TikTokScraper.hashtag(keyword, { number: 10 });
          if(!posts){
            posts = "bir sorun var"
          }
          res.json(posts)
      }else{
        res.json({"hata":"lütfen kelime gönderiniz"});
      }


    } catch (error) {
        console.log(error);
    }
  })();
});

app.listen(Port)