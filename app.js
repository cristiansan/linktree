const App = () => {
    // Sample data for links
    const links = [
        { name: 'Linktree', url: 'https://cristiansan.github.io/linktree/' },
        { name: 'Freebike', url: 'https://cristiansan.github.io/freebike/' },
        { name: 'Cocrearte', url: 'https://cristiansan.github.io/cocrearte/' },
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
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=cristiansan&layout=compact&theme=dark" alt="GitHub Stats" className="github-stats" />
        </div>
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
