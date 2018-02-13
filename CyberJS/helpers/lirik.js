
module.exports = (title) => {
  const Nightmare = require('nightmare');
  const nightmare = Nightmare({ show: false });
  if(!title) {
    return 'please input title';
  }
  let lirik = 'lirik '+title;
  return new Promise((resolve, reject) => {
    nightmare
      .goto(`https://www.google.com/search?q=kapanlagi.com+${lirik.replace(/ /g,'+')}`)
      .wait('#resultStats')
      .click('h3.r a')
      .evaluate(() => document.querySelectorAll('.col-lirik.lyrics-body')[0].innerText)
      .end()
      .then((dataLyrics) => {
        resolve(dataLyrics);
        return;
      })
      .catch((error) => {
        reject('Search failed');
        return 'Search failed:', error;
      });
  })
}