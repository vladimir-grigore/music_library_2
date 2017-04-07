const MusicLibrary = require('./music_library');

// Create tracks 
var heyLove = new MusicLibrary.Track("Hey Love", "The Delfonics", 5, 200);
var shineOn = new MusicLibrary.Track("Shine On You Crazy Diamond", "Pink Floyd", 5, 810);
var breakOn = new MusicLibrary.Track("Break On Through", "The Doors", 4, 150);
var zephyr  = new MusicLibrary.Track("The Zephyr Song", "Red Hot Chili Peppers", 3, 332);
var crimson = new MusicLibrary.Track("The Court of the Crimson King", "King Crimson", 4, 460);
var lucky   = new MusicLibrary.Track("Get Lucky", "Daft Punk", 4, 370);
var praise  = new MusicLibrary.Track("Praise You", "Fatboy Slim", 3, 324);
var glory   = new MusicLibrary.Track("Glory", "Jean-Michel Jarre", 3, 236); 

// Create playlists
var rockPlaylist = new MusicLibrary.Playlist("Rock music");
var electroPlaylist = new MusicLibrary.Playlist("Electronica");

// Create library
var musicLibrary = new MusicLibrary.Library("My Library", "Vlad");

// Add tracks to the rock playlist
rockPlaylist.addTrackToPlaylist(shineOn);
rockPlaylist.addTrackToPlaylist(breakOn);
rockPlaylist.addTrackToPlaylist(zephyr);
rockPlaylist.addTrackToPlaylist(crimson);

// Add tracks to the electronica playlist
electroPlaylist.addTrackToPlaylist(lucky);
electroPlaylist.addTrackToPlaylist(praise);
electroPlaylist.addTrackToPlaylist(glory);

// Add playlists to the library
musicLibrary.addPlaylist(rockPlaylist);
musicLibrary.addPlaylist(electroPlaylist);

// heyLove.showDetails();
// shineOn.showDetails();
// breakOn.showDetails();
// zephyr.showDetails();
// crimson.showDetails();

rockPlaylist.showTracks();
rockPlaylist.overallRating();
rockPlaylist.totalDuration();

electroPlaylist.showTracks();
electroPlaylist.overallRating();
electroPlaylist.totalDuration();

musicLibrary.showPlaylists();
