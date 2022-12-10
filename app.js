const TikTokScraper = require('tiktok-scraper');
// update for new hashtag
// Hashtag feed
(async () => {
    try {
        const posts = await TikTokScraper.hashtag('hepsiburada', { number: 500 });
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
})();
