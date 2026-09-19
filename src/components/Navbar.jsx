import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Movie App</h2>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/tv">TV Shows</a>
        <a href="/wishlist">Wishlist</a>
        <a href="/ai-assistant">AI Assistant</a>
      </div>
    </nav>
  );
}

export default Navbar;