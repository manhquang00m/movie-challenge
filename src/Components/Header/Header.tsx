import { Link, useLocation } from 'react-router';
import Search from '../Search/Search';
import './Header.scss';

const Header = () => {
  const location = useLocation();

  return (
    <header className='header'>
      <div>
        <Link
          to="/"
          className='logo'
        >
          Elotus Movie

        </Link>
        <nav className='nav'>
          <Link
            to="/"
            className={`navItem ${location.pathname === '/' ? 'active' : ''}`}
          >
            Now Playing
          </Link>
          <Link
            to="/top-rated"
            className={`navItem ${location.pathname === '/top-rated' ? 'active' : ''}`}
          >
            Top Rated
          </Link>
        </nav>
      </div>
      <Search />
    </header>
  );
};

export default Header;
