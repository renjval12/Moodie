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
        document.getElementById("personality-type").innerHTML = "The Peacemaker"
        document.getElementById("movie-option1").innerHTML = "Selma"
        document.getElementById("movie-option2").innerHTML = "Hunger Games";
        document.getElementById("movie-option3").innerHTML = "Sisterhood of the Traveling Pants";
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
        document.getElementById("personality-type").innerHTML = "The Enthusiast"
        document.getElementById("movie-option1").innerHTML = "Romeo & Juliet";
        document.getElementById("movie-option2").innerHTML = "The Confessions of a Shopaholic";
        document.getElementById("movie-option3").innerHTML = "Big Fish";

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
        document.getElementById("personality-type").innerHTML = "The Individualist"
        document.getElementById("movie-option1").innerHTML = "Pariah";
        document.getElementById("movie-option2").innerHTML = "Perks of Being a Wallflower";
        document.getElementById("movie-option3").innerHTML = "Snowden";
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
        document.getElementById("personality-type").innerHTML = "The Investigator"
        document.getElementById("movie-option1").innerHTML = "Nightcrawler";
        document.getElementById("movie-option2").innerHTML = "The Big Short";
        document.getElementById("movie-option3").innerHTML = "Prisoners";
    }
    return false; // required to not refresh the pchoice1; just leave this here
}// end the submit function