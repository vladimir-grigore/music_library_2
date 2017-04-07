const chalk = require('chalk');

class Library {
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = []
  }
  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }
  showPlaylists(){
    console.log(this.playlists);
  }
}

class Playlist {
  constructor(name){
    this.name = name;
    this.tracks = [];
  }
  overallRating(){};
  totalDuration(){};
  showTracks(){
    console.log(this.tracks);
  }
}

class Track {
  constructor(title, artist, rating, length){
    this.title = title;
    this.artist = artist;
    this.rating = rating;
    this.length = length;
  }
  showDetails(){
    console.log(`Title: ${chalk.green(this.title)}
                Artist: ${chalk.green(this.artist)}
                Rating: ${chalk.yellow(this.rating)}
                Length: ${chalk.yellow(this.length)}`);
  }
}

var heyLove = new Track("Hey Love", "The Delfonics", 5, 200);
var shineOn = new Track("Shine On You Crazy Diamond", "Pink Floyd", 5, 810);
var breakOn = new Track("Break On Through", "The Doors", 4, 150);
var zephyr  = new Track("The Zephyr Song", "Red Hot Chili Peppers", 3, 332);
var crimson = new Track("The Court of the Crimson King", "King Crimson", 4, 460);

heyLove.showDetails();
shineOn.showDetails();
breakOn.showDetails();
zephyr.showDetails();
crimson.showDetails();
