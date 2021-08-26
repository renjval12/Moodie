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
    if (total < 6) {
        movieDeets(114, moviePoster1)
        movieDeets(455207, moviePoster2)
        movieDeets(164, moviePoster3)

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