class App extends React.Component {
    render() {
        return (
            <div id="app-cont">
                <Nav />
                <Header />
                <Body />
            </div>
        )
    }
}

class Nav extends React.Component {
    render() {
        return (
            <nav id="nav">
                <div id="nav-div">
                    <ul>
                        <li>Dashboard</li>
                        &nbsp;
                        <li>Widgets</li>
                        &nbsp;
                        <li>Reviews</li>
                        &nbsp;
                        <li>Customers</li>
                        &nbsp;
                        <li>Online Analysis</li>
                        &nbsp;
                        <li>Settings</li>
                        &nbsp;
                    </ul>
                </div>
            </nav>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div id="sent-cont">
                    <h4>Sentiment Analysis</h4>
                    <ul>
                        <li>
                            960
                        </li>
                        <li>
                            122
                        </li>
                        <li>
                            321
                        </li>
                    </ul>

                </div>
                    <div id="rating-cont">
                        <h4>Average Rating</h4>
                        <h3>8.6</h3>
                    </div>
                    <div id="review-cont">
                        <h4>Reviews</h4>
                        <h3>1,289</h3>
                    </div>

            </header>
        )
    }
}


class Body extends React.Component {
    render() {
        return (
            <section id="body-container">
                <div id="stat-display">
                    <h4>Monthly Website Visitors</h4>
                    <h3>821</h3>
                </div>
            </section>
        )
    }
}


ReactDOM.render(
    < App />,
    document.querySelector('#container')
)