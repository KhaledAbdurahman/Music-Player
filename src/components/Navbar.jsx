import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="brand-link" to="/">
          🎵 Music player
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className={`nav-link active`}>
          All Songs
        </Link>
        <Link to="/playlists" className={`nav-link`}>
          Playlists
        </Link>
      </div>
    </nav>
  );
};
