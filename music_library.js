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
     console.log(chalk.bold.red(`\n${this.name} library (created by ${this.creator})`));
    this.playlists.map((playlist) => {
      playlist.showTracks();
    });
  }
}

class Playlist {
  constructor(name){
    this.name = name;
    this.tracks = [];
  }

  overallRating(){};
  totalDuration(){};

  addTrackToPlaylist(track) {
    this.tracks.push(track);
  }

  showTracks(){
    console.log(chalk.blue(`====================\n${this.name} playlist:\n====================`));
    this.tracks.map((track) => {
      track.showDetails();
    });
  }
}

class Track {
  constructor(title, artist, rating, length){
    this.title  = title;
    this.artist = artist;
    this.rating = rating;
    this.length = length;
  }
  showDetails(){
    console.log('Title: '+chalk.green(this.title));
    console.log('Artist: '+chalk.green(this.artist));
    console.log('Rating: '+chalk.yellow(this.rating));
    console.log('Length: '+chalk.yellow(this.length));
    console.log(chalk.yellow('----------------------------'));
  }
}

// Create tracks 
var heyLove = new Track("Hey Love", "The Delfonics", 5, 200);
var shineOn = new Track("Shine On You Crazy Diamond", "Pink Floyd", 5, 810);
var breakOn = new Track("Break On Through", "The Doors", 4, 150);
var zephyr  = new Track("The Zephyr Song", "Red Hot Chili Peppers", 3, 332);
var crimson = new Track("The Court of the Crimson King", "King Crimson", 4, 460);
var lucky   = new Track("Get Lucky", "Daft Punk", 4, 370);
var praise  = new Track("Praise You", "Fatboy Slim", 3, 324);
var glory   = new Track("Glory", "Jean-Michel Jarre", 3, 236); 

// Create playlists
var rockPlaylist = new Playlist("Rock music");
var electroPlaylist = new Playlist("Electronica");

// Create library
var musicLibrary = new Library("My Library", "Vlad");

rockPlaylist.addTrackToPlaylist(shineOn);
rockPlaylist.addTrackToPlaylist(breakOn);
rockPlaylist.addTrackToPlaylist(zephyr);
rockPlaylist.addTrackToPlaylist(crimson);

electroPlaylist.addTrackToPlaylist(lucky);
electroPlaylist.addTrackToPlaylist(praise);
electroPlaylist.addTrackToPlaylist(glory);

musicLibrary.addPlaylist(rockPlaylist);
musicLibrary.addPlaylist(electroPlaylist);

// heyLove.showDetails();
// shineOn.showDetails();
// breakOn.showDetails();
// zephyr.showDetails();
// crimson.showDetails();

// rockPlaylist.showTracks();
// electroPlaylist.showTracks();

musicLibrary.showPlaylists();