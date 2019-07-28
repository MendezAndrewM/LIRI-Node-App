require("dotenv").config();
// npm && file-import conections
const keys = require("./keys.js");
const spotifyAPI = require('node-spotify-api')
const spotify = new spotifyAPI(keys.spotify);
const moment = require('moment')
const axios = require('axios');
const fs = require('fs');

// variables for user-input
const command = process.argv[2];
const query = process.argv.slice(3).join(" ");


const divider = "\n===================================================================================\n";
const invalidInput = "Error: Please Enter One of the following commands:\n" +
    "\n   concert-this (artist/band name here)" +
    "\n   spotify-this-song (song name here)" +
    "\n   movie-this (movie name here)" +
    "\n   do-what-it-says (*This will run whatever command is in random.txt)";


function liri(command, query) {
    console.log("\n")
    switch (command) {
        case "concert-this":
            concertThis(query);
            break;
        case "spotify-this-song":
            spotSong(query);
            break;
        case "movie-this":
            movieThis(query);
            break;
        case "do-what-it-says":
            doIt();
            break;
        default:
            console.log(invalidInput, divider);
            break;
    }
}

function concertThis(artist) {
    const URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(URL).then(function (res) {

        const date = res.data[0].datetime.slice(0, 10);
        const month = date.substring(5, 7);
        const day = date.substring(8, 10);
        const year = date.substring(0, 4);

        const response = divider + artist + "'s next show will be at:" +
            "\nVenue: " + res.data[0].venue.name +
            "\nLocation: " + res.data[0].venue.city + ", " + res.data[0].venue.region +
            "\nDate: " + month + "/" + day + "/" + year + divider;

        console.log(response);
        logQuery(response);

    }).catch(function (err) { if (err) throw err })
};

function spotSong(song) {
    spotify.search({
        type: 'track',
        query: song
    }).then(function (res) {

        const response = divider +
            "\nArtist: " + res.tracks.items[0].artists[0].name +
            "\nTitle: " + res.tracks.items[0].name +
            "\nPreview: " + res.tracks.items[0].preview_url +
            "\nAlbum: " + res.tracks.items[0].album.name +
            divider;

        console.log(response)
        logQuery(response);

    }).catch(function (err) { if (err) throw err })
};

function movieThis(movie) {
    const URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=ff3c070b";

    axios.get(URL).then(function (res) {

        const response = divider +
            "\nTitile: " + res.data.Title +
            "\n\nYear Released: " + res.data.Year +
            "\nIMBD Rating: " + res.data.imdbRating +
            "\nRotten Tomatoes Rating: " + res.data.Ratings[1].Value +
            "\nCountry Produced: " + res.data.Country +
            "\nLanguage: " + res.data.Language +
            "\n\nCast:\n" + res.data.Actors +
            "\n\nPlot:\n" + res.data.Plot +
            divider;

        console.log(response)
        logQuery(response);

    }).catch(function (err) { if (err) throw err })
};

function doIt() {
    fs.readFile("random.txt", "utf8", function (err, res) {

        if (err) throw err
        else {
            const resArray = res.split(",");
            const command = resArray[0];
            const query = resArray[1]

            liri(command, query)
        }
    })
};

function logQuery(response) {
    fs.appendFile("log.txt", "\n" + command + " " + query + ":" + response, function (err) {
        if (err) throw err
        else { console.log("Results appended to log.txt") }
    })
}

liri(command, query);