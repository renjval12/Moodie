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

    if (total < 6) {

        fetch("https://api.themoviedb.org/3/movie/31011?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4")
            .then((response) => response.json())
            .then((data) => moviePoster1.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
        fetch("https://api.themoviedb.org/3/movie/266856?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4")
            .then((response) => response.json())
            .then((data) => moviePoster2.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
        fetch("https://api.themoviedb.org/3/movie/4553?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4")
            .then((response) => response.json())
            .then((data) => moviePoster3.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
        document.getElementById("personality-type").innerHTML = "INTP"
        document.getElementById("movie-option1").innerHTML = "Mr. Nobody"
        document.getElementById("movie-option2").innerHTML = "Theory of Everything";
        document.getElementById("movie-option3").innerHTML = "Machinist";
    }

    if (total >= 6 && total < 9) {
        fetch("https://api.themoviedb.org/3/movie/4421?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4")
            .then((response) => response.json())
            .then((data) => moviePoster1.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
        fetch("https://api.themoviedb.org/3/movie/680?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4")
            .then((response) => response.json())
            .then((data) => moviePoster2.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
        fetch("https://api.themoviedb.org/3/movie/4518?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4")
            .then((response) => response.json())
            .then((data) => moviePoster3.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
        document.getElementById("personality-type").innerHTML = "ENFJ"
        document.getElementById("movie-option1").innerHTML = "GI Jane";
        document.getElementById("movie-option2").innerHTML = "Pulp Fiction";
        document.getElementById("movie-option3").innerHTML = "Elizabeth";

    }

    if (total >= 9 && total < 14) {
        fetch("https://api.themoviedb.org/3/movie/350?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4")
            .then((response) => response.json())
            .then((data) => moviePoster1.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
        fetch("https://api.themoviedb.org/3/movie/9400?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4")
            .then((response) => response.json())
            .then((data) => moviePoster2.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
        fetch("https://api.themoviedb.org/3/movie/106646?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4")
            .then((response) => response.json())
            .then((data) => moviePoster3.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
        document.getElementById("personality-type").innerHTML = "ESTJ"
        document.getElementById("movie-option1").innerHTML = "The Devil Wears Prada";
        document.getElementById("movie-option2").innerHTML = "Set It Off";
        document.getElementById("movie-option3").innerHTML = "The Wolf of Wall Street";
    }
    if (total >= 13) {
        fetch("https://api.themoviedb.org/3/movie/194?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4")
            .then((response) => response.json())
            .then((data) => moviePoster1.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
        fetch("https://api.themoviedb.org/3/movie/1360?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4")
            .then((response) => response.json())
            .then((data) => moviePoster2.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
        fetch("https://api.themoviedb.org/3/movie/339877?api_key=cb8d9e3ce40b1e83a927a5763c2c5ed4")
            .then((response) => response.json())
            .then((data) => moviePoster3.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`)
            .catch('error')
        document.getElementById("personality-type").innerHTML = "ISFP"
        document.getElementById("movie-option1").innerHTML = "Amelie";
        document.getElementById("movie-option2").innerHTML = "Frida";
        document.getElementById("movie-option3").innerHTML = "Loving Vincent";
    }
    return false; // required to not refresh the pchoice1; just leave this here
}// end the submit function