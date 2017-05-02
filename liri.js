var allKeys = require("./keys.js");

var fs = require("fs");

fs.readFile("random.txt", "utf8", function(err, data) {

  console.log(data);

});

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'M3oOSUq4JeJC1sWF315YJHXCQ',
  consumer_secret: 'GdDexqv6Fd2C0oWwAx5ENV3zzD3HXTR6Aica7i4oJG5y4MuMZj',
  access_token_key: '858498523607814144-mVsImKrfFWx4lVnAevQEnxlh0KmOdR5',
  access_token_secret: 'o3akFxAFcB4cG27Mx2ZmkPaymu6C2A5o1FAbq99iifUZG',
});
 
var params = {screen_name: 'Wheat_to_World'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});



var omdb = require('omdb');


omdb.search('', function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 
    movies.forEach(function(movie) {
        console.log('%s (%d)', movie.title, movie.year);
    });
 
    // Saw (2004) 
    // Saw II (2005) 
    // Saw III (2006) 
    // Saw IV (2007) 
    // ... 
});
 
omdb.get({ title: '', year: }, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
 
    if(!movie) {
        return console.log('Movie not found!');
    }
 
    console.log(movie.title, movie.year, movie.imdb.rating);
    console.log(movie.plot);
 
    // Saw (2004) 7.6/10 
    // Two men wake up at opposite sides of a dirty, disused bathroom, chained 
    // by their ankles to pipes. Between them lies... 
});

var inquirer = require("inquirer");

var request = require('request');

var spotify = require("spotify");

/*request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received console.log('body:', body); // Print the HTML for the Google homepage. 
});

//request('http://google.com/doodle.png').pipe(fs.createWriteStream('random.txt'))

spotify.search({ type: "Eminem", query: "8 mile" }, function(err, data) {
	if(err) 
	console.log("error occurred: " + err);
	return;
});
*/