const App = () => {
    // Sample data for links
    const links = [
        { name: 'freebike', url: 'https://github.com/cristiansan/freebike' },
        { name: 'cocrearte', url: 'https://github.com/cristiansan/cocrearte' },
        { name: 'scoreboard', url: 'https://github.com/cristiansan/scoreboard' },
        { name: 'token', url: 'https://github.com/cristiansan/token' },
        { name: 'red social', url: 'https://github.com/cristiansan/redsocial' },
        { name: 'multi', url: 'https://github.com/cristiansan/multi' },
    ];

    return (
        <div className="container">
            <img src="https://avatars.githubusercontent.com/u/7384512?s=400&u=95925e626b3a491379fc8debd45b075a99b6ddcb&v=4" alt="Profile" className="profile-pic" />
            <h1>@cristiansan</h1>
            <div className="links">
                {links.map(link => (
                    <a href={link.url} key={link.name} className="link" target="_blank" rel="noopener noreferrer">
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
