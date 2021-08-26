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
    choice4 = parseInt(document.querySelector('input[name = "choice3"]:checked').value);
    choice5 = parseInt(document.querySelector('input[name = "choice3"]:checked').value);


    total = choice1 + choice2 + choice3 + choice4 + choice5;

    document.getElementById("personality-type").innerHTML = ""
    movieOption1 = ""
    movieOption2 = ""
    movieOption3 = ""

    function movieDeets(id, posterNum) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4`)
            .then((response) => response.json())
            .then((data) => posterNum.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
    }
    
    if (total < 6) {
        movieDeets(31011, moviePoster1)
        movieDeets(266856, moviePoster2)
        movieDeets(4553, moviePoster3)

        document.getElementById("personality-type").innerHTML = "INTP"
        document.getElementById("movie-option1").innerHTML = "Mr. Nobody"
        document.getElementById("movie-option2").innerHTML = "Theory of Everything";
        document.getElementById("movie-option3").innerHTML = "Machinist";
    }

    if (total >= 6 && total < 9) {
        movieDeets(4421, moviePoster1)
        movieDeets(680, moviePoster2)
        movieDeets(4518, moviePoster3)

        document.getElementById("personality-type").innerHTML = "ENFJ"
        document.getElementById("movie-option1").innerHTML = "GI Jane";
        document.getElementById("movie-option2").innerHTML = "Pulp Fiction";
        document.getElementById("movie-option3").innerHTML = "Elizabeth";

    }

    if (total >= 9 && total < 14) {
        movieDeets(350, moviePoster1)
        movieDeets(9400, moviePoster2)
        movieDeets(106646, moviePoster3)

        document.getElementById("personality-type").innerHTML = "ESTJ"
        document.getElementById("movie-option1").innerHTML = "The Devil Wears Prada";
        document.getElementById("movie-option2").innerHTML = "Set It Off";
        document.getElementById("movie-option3").innerHTML = "The Wolf of Wall Street";
    }
    if (total >= 13) {
        movieDeets(194, moviePoster1)
        movieDeets(1360, moviePoster2)
        movieDeets(339877, moviePoster3)

        document.getElementById("personality-type").innerHTML = "ISFP"
        document.getElementById("movie-option1").innerHTML = "Amelie";
        document.getElementById("movie-option2").innerHTML = "Frida";
        document.getElementById("movie-option3").innerHTML = "Loving Vincent";
    }
    return false; // required to not refresh the pchoice1; just leave this here
}// end the submit function