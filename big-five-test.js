let moviePoster1 = document.getElementById('movie-poster1')
let moviePoster2 = document.getElementById('movie-poster2')
let moviePoster3 = document.getElementById('movie-poster3')

let movieOption1 = document.getElementById('movie-option1')
let movieOption2 = document.getElementById('movie-option2')
let movieOption3 = document.getElementById('movie-option3')


document.getElementById("form1").onsubmit = function () {
    choice1 = parseInt(document.querySelector('input[name = "choice1"]:checked').value);
    choice2 = parseInt(document.querySelector('input[name = "choice2"]:checked').value);
    choice3 = parseInt(document.querySelector('input[name = "choice3"]:checked').value);
    choice4 = parseInt(document.querySelector('input[name = "choice4"]:checked').value);
    choice5 = parseInt(document.querySelector('input[name = "choice5"]:checked').value);
    choice6 = parseInt(document.querySelector('input[name = "choice5"]:checked').value);

    total = choice1 + choice2 + choice3 + choice4 + choice5 + choice6;

    function movieDeets(id, posterNum) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4`)
            .then((response) => response.json())
            .then((data) => posterNum.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
    }
    document.getElementById("personality-type").innerHTML = ""
    movieOption1 = ""
    movieOption2 = ""
    movieOption3 = ""
    if (total < 7) {
        movieDeets(407451, moviePoster1)
        movieDeets(116745, moviePoster2)
        movieDeets(37165, moviePoster3)

        document.getElementById("personality-type").innerHTML = "Open"
        document.getElementById("movie-option1").innerHTML = "Wrinkle In Time"
        document.getElementById("movie-option2").innerHTML = "The Secret Life of Walter Mitty";
        document.getElementById("movie-option3").innerHTML = "The Truman Show";
    }

    if (total >= 7 && total < 10) {
        movieDeets(71688, moviePoster1)
        movieDeets(1402, moviePoster2)
        movieDeets(8967, moviePoster3)

        document.getElementById("personality-type").innerHTML = "Conscientious"
        document.getElementById("movie-option1").innerHTML = "Iron Lady";
        document.getElementById("movie-option2").innerHTML = "The Pursuit of Happyness";
        document.getElementById("movie-option3").innerHTML = "Tree of Life";

    }

    if (total >= 10 && total < 15) {
        movieDeets(8392, moviePoster1)
        movieDeets(773, moviePoster2)
        movieDeets(1588, moviePoster3)

        document.getElementById("personality-type").innerHTML = "Agreeable"
        document.getElementById("movie-option1").innerHTML = "My Neighbor Totoro";
        document.getElementById("movie-option2").innerHTML = "Little Miss Sunshine";
        document.getElementById("movie-option3").innerHTML = "Bring It On";
    }
    if (total >= 15 && total < 19) {
        movieDeets(2005, moviePoster1)
        movieDeets(9377, moviePoster2)
        movieDeets(324857, moviePoster3)

        document.getElementById("personality-type").innerHTML = "Extraverted"
        document.getElementById("movie-option1").innerHTML = "Sister Act";
        document.getElementById("movie-option2").innerHTML = "Ferris Beuller's Day Off";
        document.getElementById("movie-option3").innerHTML = "Spider-Man: Into the Spiderverse";
    }

    if (total >= 18) {
        movieDeets(155, moviePoster1)
        movieDeets(475557, moviePoster2)
        movieDeets(495764, moviePoster3)

        document.getElementById("personality-type").innerHTML = "Neurotic"
        document.getElementById("movie-option1").innerHTML = "Dark Knight";
        document.getElementById("movie-option2").innerHTML = "Joker";
        document.getElementById("movie-option3").innerHTML = "Birds of Prey";
    }
    return false; // required to not refresh the pchoice1; just leave this here
}// end the submit function