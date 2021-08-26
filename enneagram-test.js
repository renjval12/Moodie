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

    document.getElementById("your-results").innerHTML = ""
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
        movieDeets(273895, moviePoster1)
        movieDeets(70160, moviePoster2)
        movieDeets(522212, moviePoster3)

        document.getElementById("your-results").innerHTML = "Your Results!"
        document.getElementById("personality-type").innerHTML = "The Peacemaker"
        document.getElementById("movie-option1").innerHTML = "Selma"
        document.getElementById("movie-option2").innerHTML = "Hunger Games";
        document.getElementById("movie-option3").innerHTML = "Just Mercy";
    }

    if (total >= 6 && total < 9) {
        movieDeets(150540, moviePoster1)
        movieDeets(4922, moviePoster2)
        movieDeets(587, moviePoster3)

        document.getElementById("your-results").innerHTML = "Your Results!"
        document.getElementById("personality-type").innerHTML = "The Enthusiast"
        document.getElementById("movie-option1").innerHTML = "Inside Out";
        document.getElementById("movie-option2").innerHTML = "The Curious Case of Benjamin Button";
        document.getElementById("movie-option3").innerHTML = "Big Fish";

    }

    if (total >= 9 && total < 14) {
        movieDeets(73939, moviePoster1)
        movieDeets(84892, moviePoster2)
        movieDeets(302401, moviePoster3)
        
    document.getElementById("your-results").innerHTML = "Your Results!"
        document.getElementById("personality-type").innerHTML = "The Individualist"
        document.getElementById("movie-option1").innerHTML = "Pariah";
        document.getElementById("movie-option2").innerHTML = "Perks of Being a Wallflower";
        document.getElementById("movie-option3").innerHTML = "Snowden";
    }
    if (total >= 13) {
        movieDeets(242582, moviePoster1)
        movieDeets(146233, moviePoster2)
        movieDeets(146233, moviePoster3)
        
    document.getElementById("your-results").innerHTML = "Your Results!"
        document.getElementById("personality-type").innerHTML = "The Investigator"
        document.getElementById("movie-option1").innerHTML = "Nightcrawler";
        document.getElementById("movie-option2").innerHTML = "Doubt";
        document.getElementById("movie-option3").innerHTML = "Prisoners";
    }
    return false; // required to not refresh the pchoice1; just leave this here
}// end the submit function