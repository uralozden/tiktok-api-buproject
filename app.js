const TikTokScraper = require('tiktok-scraper');


// Hashtag feed
(async () => {
    try {
        const posts = await TikTokScraper.hashtag('kombi', { number: 500 });
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
})();
