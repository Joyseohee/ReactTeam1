const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');
const axios = require('axios');

fs.exists('text1.txt', function (exists) {
  console.log(exists ? "it's there" : "NO!!!!");
})

const file = 'data.json';

for(let i = 1; i < 501; i ++) {
  await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=4a25f61de2f3faf6ce9c03308ff09d05&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=${i}`)
  .then((res) => {
    setTimeout(() => {
      fs.appendFile('data.json', JSON.stringify(res.data), 'utf-8', function(error) {
        console.log('write end');
      })
    }, 1000);
  })
}
app.listen(8080, function () {
  console.log("listening on 8080");
});

app.use(express.static(path.join(__dirname, "../movie-app/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../movie-app/build/index.html"));
});

// /react-project/build/index.html
