const library = {
  tracks: {
    //key for library object
    t01: {
      //key for tracks object
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    //key for library object
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] }, //key for playlists object
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },

  /////////////////////////////
  // FUNCTIONS TO IMPLEMENT:
  /////////////////////////////

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function() {
    const playlists = library.playlists; //to get into the playlists object from the library object
    for (const key in playlists) {
      // for in loop to iterate over the keys of the playlist object
      const playlistId = playlists[key].id;
      const playlistName = playlists[key].name;
      const playlistTracks = playlists[key].tracks.length;
      console.log(
        playlistId + ": " + playlistName + " - " + playlistTracks + " tracks"
      );
    }
  },

  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function() {
    const tracks = library.tracks;
    for (const key in tracks) {
      //for in loop to iterate over the keys of the tracks object
      const trackId = tracks[key].id;
      const trackName = tracks[key].name;
      const trackArtist = tracks[key].artist;
      const trackAlbum = tracks[key].album;
      console.log(
        trackId +
          ": " +
          trackName +
          " by " +
          trackArtist +
          " (" +
          trackAlbum +
          ")"
      );
    }
  },
  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function(playlistId) {
    const playlist = library.playlists;
    const tracks = library.tracks;
    if (playlist[playlistId]) {
      //if the playlistId exist in the playlist object
      console.log(
        playlist[playlistId].id +
          ": " +
          playlist[playlistId].name +
          " - " +
          playlist[playlistId].tracks.length +
          " tracks"
      );
      for (const element of playlist[playlistId].tracks) {
        //for loop the array of tracks in the playlist object
        console.log(
          tracks[element].id +
            ": " +
            tracks[element].name +
            " by " +
            tracks[element].artist +
            " (" +
            tracks[element].album +
            ")"
        );
      }
    }
  },

  // adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId) {
    const playlist = library.playlists;
    if (playlist[playlistId]) {
      //if the playlistId exist in the playlist object
      playlist[playlistId].tracks.push(trackId); //push the trackId to the tracks array
    }
  },

  // generates a unique id
  // (already implemented: use this for addTrack and addPlaylist)
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },

  // adds a track to the library
  addTrack: function(name, artist, album) {
    const track = library.tracks;
    const trackId = library.generateUid(); //generate a unique id
    track[trackId] = { id: trackId, name: name, artist: artist, album: album }; //add the track to library object
  },

  // adds a playlist to the library
  addPlaylist: function(name) {
    const playlist = library.playlists;
    const playlistId = library.generateUid(); //generate a unique id
    playlist[playlistId] = { id: playlistId, name: name, tracks: [] }; //add the playlist object to the library object
  },
};

console.log("printPlaylists");
console.log("\t");
library.printPlaylists();
console.log("\t");

console.log("printTracks");
console.log("\t");
library.printTracks();
console.log("\t");

console.log("printPlaylist base on playlistId");
console.log("\t");
library.printPlaylist("p01");
console.log("\t");

console.log("addTrackToPlaylist");
console.log("\t");
library.addTrackToPlaylist("t02", "p02");
library.printPlaylist("p02");
console.log("\t");

console.log("addTrack");
console.log("\t");
library.addTrack("Bubblegum", "NewJeans", "Bubblegum");
library.printTracks();
console.log("\t");

console.log("addPlaylist");
console.log("\t");
library.addPlaylist("New Playlist");
library.printPlaylists();

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
/*const printSearchResults = function(query) {
       
};
*/
