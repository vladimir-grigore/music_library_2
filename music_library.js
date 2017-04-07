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

  overallRating(){
    let rating = 0;
    this.tracks.map((track) => {
      rating += track.rating;
    });
    rating = rating / this.tracks.length;
    console.log(chalk.bgCyan.black(`Playlist ${this.name} overall rating is: ${rating.toFixed(2)}`))
  };

  totalDuration(){
    let length = 0;
    this.tracks.map((track) => {
      length += track.length;
    });
    let minutes = Math.floor(length / 60);
    let seconds = length % 60;
    // length = length / this.tracks.length;
    console.log(chalk.bgYellow.black(`Playlist ${this.name} overall length is: ${minutes} minutes and ${seconds} seconds`))
  };

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

module.exports = {
  Library,
  Playlist,
  Track
}
