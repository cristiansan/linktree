const App = () => {
    // Sample data for links
    const links = [
        { name: 'GitHub', url: 'https://github.com/your-username' },
        { name: 'Twitter', url: 'https://twitter.com/your-username' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/your-username' },
        { name: 'Instagram', url: 'https://instagram.com/your-username' },
    ];

    return (
        <div className="container">
            <img src="https://via.placeholder.com/150" alt="Profile" className="profile-pic" />
            <h1>@YourUsername</h1>
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
