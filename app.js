const App = () => {
    // Sample data for links
    const links = [
        { name: 'Linktree', url: 'https://cristiansan.github.io/linktree/' },
        { name: 'Freebike', url: 'https://cristiansan.github.io/freebike/' },
        { name: 'Cocrearte', url: 'https://cristiansan.github.io/cocrearte/' },
        { name: 'Carrito', url: 'https://cristiansan.github.io/Carrito/' },
    ];

    return (
        <div className="container">
            <img src="https://avatars.githubusercontent.com/u/7384512?s=400&u=95925e626b3a491379fc8debd45b075a99b6ddcb&v=4" alt="Profile" className="profile-image" />
            <h1 className="name">@cristiansan</h1>
            <p className="description">"Desarroll Ando y Constru Yendo"</p>
            <p className="terminal-comment">ALGUNOS PROYECTOS</p>
            <div className="links">
                {links.map(link => (
                    <a href={link.url} key={link.name} className="card" target="_blank" rel="noopener noreferrer">
                        {link.name}
                    </a>
                ))}
            </div>
            <div className="section">
                <p className="terminal-comment" style={{ marginTop: '3rem' }}>ALGUNOS LINKS</p>
                <div className="links">
                    <a href="https://www.linkedin.com/in/cristiansanemeterio/" className="card" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/cinicarg/" className="card" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                    <a href="https://github.com/cristiansan" className="card" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
                <img src="https://github.pumbas.net/api/contributions/cristiansan?bgColour=121212&dotColour=006d32" alt="GitHub Contributions Calendar" className="github-stats" />
            </div>
        </div>
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
