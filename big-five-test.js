// created variables to hold DOM elements that will hold movie posters images

let moviePoster1 = document.getElementById('movie-poster1')
let moviePoster2 = document.getElementById('movie-poster2')
let moviePoster3 = document.getElementById('movie-poster3')

// created variables to hold the values of the DOM elements that hold movie titles
let movieOption1 = document.getElementById('movie-option1')
let movieOption2 = document.getElementById('movie-option2')
let movieOption3 = document.getElementById('movie-option3')

let movieDesc1 = document.getElementById('movie-description1')
let movieDesc2 = document.getElementById('movie-description2')
let movieDesc3 = document.getElementById('movie-description3')

/* Beginning of onsubmit function */

// created a function that calculates the values of the user's selections on the personality test, and returns three movie suggestions for the user to consider watching. 

document.getElementById("form1").onsubmit = function () {
    document.getElementById('results').classList.remove('hide')
    document.getElementById('form1').classList.toggle('hide')
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
    movieOption1.innerHTML = ""
    movieOption2.innerHTML = ""
    movieOption3.innerHTML = ""

    movieDesc1.innerHTML = ""
    movieDesc2.innerHTML = ""
    movieDesc3.innerHTML = ""
    // to make my code more dynamic, I created a callback function, that fetches and returns data from the MovieDB API database. 
    // id parameter corresponds to the movie id unique to each movie title on themoviedb
    //posterNum parameter corresponds to the element ID of the element that will hold the image

    function movieDeets(id, posterNum, movieTitle, movieOverview) {
        // when the function is run, first it fetches data, based on the id argument passed in when called

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4`)
            //then it returns a response, I convert that response, into a json file, so I will be able to parse through the data in the form of Javascript Objects. 
            .then((response) => response.json())

            // i use .then promise method, to utilize the data I received from the moviedb api 
            //I need the api to return the value of the property named "poster_path", so I can append it to the base_url for images on moviedb, and return the movie's poster image, so I do that, once I get the data, I use dot notation to access the value of the poster_path. 
            .then((data) => {
                posterNum.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`
                movieTitle.innerHTML = data.title
                movieOverview.innerHTML = data.overview
            })
            .catch('error')
    }


    if (total < 7) {
        // if the value of total is less than 7, then the user is the designated personality type, to make that show up in the DOM, I call movieDeets() function to return 3 movie posters that correspond to the three titles I think the user will enjoy. I pass through the unique movie title id as an argument, and the variable holding the corresponding dom element, to the id parameter and the posterNum parameter, of the movieDeets() function, respectively.

        //here the values of these elements in  change from empty to the values below in the DOM
        document.getElementById("personality-type").innerHTML = "Open"
        movieDeets(407451, moviePoster1, movieOption1, movieDesc1)
        movieDeets(116745, moviePoster2, movieOption2, movieDesc2)
        movieDeets(37165, moviePoster3, movieOption3, movieDesc3)
    }

    if (total >= 7 && total < 10) {

        document.getElementById("personality-type").innerHTML = "Conscientious"
        movieDeets(71688, moviePoster1, movieOption1, movieDesc1)
        movieDeets(1402, moviePoster2, movieOption2, movieDesc2)
        movieDeets(8967, moviePoster3, movieOption3, movieDesc3)

    }

    if (total >= 10 && total < 15) {

        document.getElementById("personality-type").innerHTML = "Agreeable"
        movieDeets(8392, moviePoster1, movieOption1, movieDesc1)
        movieDeets(773, moviePoster2, movieOption2, movieDesc2)
        movieDeets(1588, moviePoster3, movieOption3, movieDesc3)
    }
    if (total >= 15 && total < 18) {

        document.getElementById("personality-type").innerHTML = "Extraverted"
        movieDeets(2005, moviePoster1, movieDesc1, movieDesc1)
        movieDeets(9377, moviePoster2, movieDesc2, movieDesc2)
        movieDeets(324857, moviePoster3, movieDesc3, movieDesc3)
    }

    if (total >= 18) {
        document.getElementById("personality-type").innerHTML = "Neurotic"
        movieDeets(155, moviePoster1, movieOption1, movieDesc1)
        movieDeets(475557, moviePoster2, movieOption2, movieDesc2)
        movieDeets(495764, moviePoster3, movieOption3, movieDesc3)
    }
    return false; // required to not refresh the pchoice1; 
}// end the submit function