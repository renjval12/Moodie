let pageLinks = [
    {
        name: 'Home',
        url: '/index.html'
    },
    {
        name: 'About',
        url: '/pages/about.html'
    },
    {
        name: 'Choose a Test',
        url: '/pages/personality-test-page.html'
    },
    {
        name: 'Contact',
        url: '/pages/contact-us.html'
    }
]

let headerLinks = pageLinks.map(l => <a className="header-nav-link nav-link" href={l.url}><li>{l.name}</li></a>)

class NavBar extends React.Component {
    render() {
        return (
            <nav id="header-nav">
                <ul>
                    <img id="masks-icon" src="/images/Drama-icon.png" />
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

ReactDOM.render(
    <NavBar />,
    document.getElementById('navi')
)

