# LIRI-Node-App

## What is LIRI?
LIRI (Language Interpretation and Recognition Interface) Takes in commands from the user and returns data to the console as well as to a text file where commands and data are stored. Enter the applicable command in the terminal and recieve information about any song, artist, or movie.  

##### [Click here to see a Demo](Node_Demo.mp4)

## Technologies Used:
* Node.JS
* [Axios](https://www.npmjs.com/package/axios)
* [Moment.js](https://www.npmjs.com/package/moment)
* [DotEnv](https://www.npmjs.com/package/dotenv)
* Node-Spotify-API
* Bands In Town API
* OMBD API

## How to:

1. Once API keys are set up and the applicable npm installs have been complete, run **node liri.js** in the terminal with no parameters and you will recieve an error message that provides a list of available commands.

![Demo Error](https://raw.githubusercontent.com/MendezAndrewM/LIRI-Node-App/master/Images/Demo1.png)

1. Enter **node liri.js concert-this (name of artist/band here)** to recieve info for the given artists next tour date.

![Artist Demo](https://raw.githubusercontent.com/MendezAndrewM/LIRI-Node-App/master/Images/Demo2.png)

1. Enter **node liri.js spotify-this-song (name of song here)** To recieve info for the given song

![Song Demo](https://raw.githubusercontent.com/MendezAndrewM/LIRI-Node-App/master/Images/Demo5.png)

1. Enter  **node liri.js movie-this (name of movie here)** to recieve info about the given movie

![Movie Demo](https://raw.githubusercontent.com/MendezAndrewM/LIRI-Node-App/master/Images/Demo3.png)

1. Enter **node liri.js do-what-it-says** and it will execure what ever command is in the random.txt file

![random.txt Demo](https://raw.githubusercontent.com/MendezAndrewM/LIRI-Node-App/master/Images/Demo4.png)
