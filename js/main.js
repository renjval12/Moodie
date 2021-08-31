let pageLinks = [
    {
        name: 'Home',
        url: './index.html'
    },
    {
        name: 'About',
        url: './pages/about.html'
    },
    {
        name: 'Choose a Test',
        url: './pages/personality-test-page.html'
    },
    {
        name: 'Contact',
        url: './pages/contact-us.html'
    }
]

let headerLinks = pageLinks.map(l => <a className="header-nav-link nav-link" href={l.url}><li>{l.name}</li></a>)

class NavBar extends React.Component {
    render() {
        return (
            <nav id="header-nav">
                <ul>
                    <img id="masks-icon" src="./images/Drama-icon.png" />
                    <li><h1><a id="moodie-name" href={pageLinks[0].url}>Moodie</a></h1></li>
                    {headerLinks}
                    <li>
                        <form className="search-bar" action="/action_page.php">
                            <input id="search-input" type="text" name="search" placeholder="Search..." />
                            <button id="search-btn" type="submit"><i class="fas fa-search" aria-hidden="true"></i></button>
                        </form>
                    </li>
                    <li><a className="nav-link header-nav-links login" href="#">Login</a></li>
                </ul>

            </nav>
        )
    }
}

alert('this is new')

// let tests = [
//     {
//         className: 'Home',
//         imgSrc: '/images/array of profiles.jpg'
//     },
//     {
//         name: 'About',
//         url: '/pages/about.html'
//     },
//     {
//         name: 'Choose a Test',
//         url: '/pages/personality-test-page.html'
//     },
//     {
//         name: 'Contact',
//         url: '/pages/contact-us.html'
//     }
// ]
// let headerLinks = pageLinks.map(l => <a className="header-nav-link nav-link" href={l.url}><li>{l.name}</li></a>)
// class TestSelections extends React.Component {
//     render() {
//         return (
//             <div id="choose-a-test-page">
//                 <h1 class="choose-a-test-heading top-of-page-heading">Choose a Test</h1>
//                 <section className="mbti-test-select">
//                     <img className="choose-a-test-img" src="/images/array of profiles.jpg"
//                         alt="an array of portrait animations of different types of people" />
//                     <h2>MBTI Test</h2>
//                     <button class="select-button">Select</button>
//                 </section>
//             </div>
//         )
//     }
// }
// class ResultsSection extends React.Component {
//     render() {
//         return (
//             <section id="movies" class="hide">
//                 <section id="movie1">
//                     <img id="movie-poster1" src="" alt="" />
//                     <h2 id="movie-option1" className="section-heading"></h2>
//                     <p id="movie-description1" className="movie-choice-description"></p>

//                 </section>

//                 <section id="movie2">
//                     <img id="movie-poster2" src="" alt="" />
//                     <h2 id="movie-option2" className="section-heading"></h2>
//                     <p id="movie-description2" className="movie-choice-description"></p>

//                 </section>

//                 <section id="movie3">
//                     <img id="movie-poster3" src="" alt="" />
//                     <h2 id="movie-option3" className="section-heading"></h2>
//                     <p id="movie-description3" className="movie-choice-description"></p>
//                 </section>
//             </section>
//         )
//     }
// }

ReactDOM.render(
    <NavBar />,
    document.getElementById('navi')
)

// ReactDOM.render(
//     <ResultsSection />,
//     document.getElementById('results')
// )