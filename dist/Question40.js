"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return
a Object containing these two pieces of information.*/
function make_album(artist, title, tracks) {
    let album = { artist: artist, title: title, tracks: tracks };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
let album1 = make_album("Artist1", "Album1", 10);
let album2 = make_album("Artist2", "Album2");
let album3 = make_album("Artist3", "Album3", 12);
console.log(album1);
console.log(album2);
console.log(album3);
