// created variables to hold DOM elements that will hold movie posters images
let moviePoster1 = document.getElementById('movie-poster1')
let moviePoster2 = document.getElementById('movie-poster2')
let moviePoster3 = document.getElementById('movie-poster3')

// created variables to hold the values of the DOM elements that hold movie titles
let movieOption1 = document.getElementById('movie-option1')
let movieOption2 = document.getElementById('movie-option2')
let movieOption3 = document.getElementById('movie-option3')

/* Beginning of onsubmit function */

// created a function that calculates the values of the user's selections on the personality test, and returns three movie suggestions for the user to consider watching.

document.getElementById("form1").onsubmit = function () {
    document.getElementById('results').style.display = "block" 
    // created multiple variables to hold the number values of the user selection in the quiz. The values from the radio button selections are what is passed through as the value. parseInt turns the first character in finds into a string, then into a integer.

    choice1 = parseInt(document.querySelector('input[name = "choice1"]:checked').value);
    choice2 = parseInt(document.querySelector('input[name = "choice2"]:checked').value);
    choice3 = parseInt(document.querySelector('input[name = "choice3"]:checked').value);
    choice4 = parseInt(document.querySelector('input[name = "choice4"]:checked').value);
    choice5 = parseInt(document.querySelector('input[name = "choice5"]:checked').value);
    choice6 = parseInt(document.querySelector('input[name = "choice5"]:checked').value);

    //total is equal to the sum of all of the values of the user's choices
    total = choice1 + choice2 + choice3 + choice4 + choice5 + choice6;

    document.getElementById("personality-type").innerHTML = ""
    movieOption1 = ""
    movieOption2 = ""
    movieOption3 = ""

    // to make my code more dynamic, I created a callback function, that fetches and returns data from the MovieDB API database. 
    // id parameter corresponds to the movie id unique to each movie title on themoviedb
    //posterNum parameter corresponds to the element ID of the element that will hold the image


    function movieDeets(id, posterNum) {
        // when the function is run, first it fetches data, based on the id argument passed in when called

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4`)
            //then it returns a response, I convert that response, into a json file, so I will be able to parse through the data in the form of Javascript Objects. 
            .then((response) => response.json())

            // i use .then promise method, to utilize the data I received from the moviedb api 
            //I need the api to return the value of the property named "poster_path", so I can append it to the base_url for images on moviedb, and return the movie's poster image, so I do that, once I get the data, I use dot notation to access the value of the poster_path. 
            .then((data) => posterNum.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
    }
    if (total < 6) {
        // if the value of total is less than 6, then the user is the designated personality type, to make that show up in the DOM, I call movieDeets() function to return 3 movie posters that correspond to the three titles I think the user will enjoy. I pass through the unique movie title id as an argument, and the variable holding the corresponding dom element, to the id parameter and the posterNum parameter, of the movieDeets() function, respectively.
        
        movieDeets(114, moviePoster1)
        movieDeets(455207, moviePoster2)
        movieDeets(164, moviePoster3)

        //here the values of these elements in  change from empty in the 
        document.getElementById("personality-type").innerHTML = "Gifts"
        document.getElementById("movie-option1").innerHTML = "Pretty Woman"
        document.getElementById("movie-option2").innerHTML = "Crazy Rich Asians";
        document.getElementById("movie-option3").innerHTML = "Breakfast at Tiffany's";
    }

    if (total >= 6 && total < 11) {
        movieDeets(393457, moviePoster1)
        movieDeets(465914, moviePoster2)
        movieDeets(4347, moviePoster3)

        document.getElementById("personality-type").innerHTML = "Acts of Service"
        document.getElementById("movie-option1").innerHTML = "Fences";
        document.getElementById("movie-option2").innerHTML = "If Beale Street Could Talk";
        document.getElementById("movie-option3").innerHTML = "Atonement";

    }

    if (total >= 11 && total < 16) {
        movieDeets(152584, moviePoster1)
        movieDeets(376867, moviePoster2)
        movieDeets(251, moviePoster3)

        document.getElementById("personality-type").innerHTML = "Physical Affection"
        document.getElementById("movie-option1").innerHTML = "Blue is the Warmest Colour";
        document.getElementById("movie-option2").innerHTML = "Moonlight";
        document.getElementById("movie-option3").innerHTML = "Ghost";
    }
    if (total >= 16 && total < 21) {
        movieDeets(502147, moviePoster1)
        movieDeets(31031, moviePoster2)
        movieDeets(8055, moviePoster3)

        document.getElementById("personality-type").innerHTML = "Words of Affirmation"
        document.getElementById("movie-option1").innerHTML = "Wild Nights with Emily";
        document.getElementById("movie-option2").innerHTML = "The World Unseen";
        document.getElementById("movie-option3").innerHTML = "The Reader";
    }

    if (total >= 21) {
        movieDeets(264644, moviePoster1)
        movieDeets(9364, moviePoster2)
        movieDeets(152601, moviePoster3)

        document.getElementById("personality-type").innerHTML = "Quality Time"
        document.getElementById("movie-option1").innerHTML = "Room";
        document.getElementById("movie-option2").innerHTML = "Wuthering Heights";
        document.getElementById("movie-option3").innerHTML = "Her";
    }
    return false; // required to not refresh the pchoice1; just leave this here
}// end the submit function