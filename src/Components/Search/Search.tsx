import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router';
import './style.scss';
import Button from '../Button/Button';

const Search = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const [query, setQuery] = useState(keyword || '');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?keyword=${encodeURIComponent(query.trim())}`);
    }
  };

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/top-rated') {
      setQuery('');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!query.trim()?.length && location.pathname === '/search') {
      navigate(`/`);
    }
  }, [query]);

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default Search;
