class Library {
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = []
  }
  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }
}

class Playlist {
  constructor(name){
    this.name = name;
    this.tracks = [];
  }
  overallRating();
  totalDuration();
}

class Track {
  constructor(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

