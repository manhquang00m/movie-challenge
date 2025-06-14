import type { Movie } from "../../services/types";
import Button from "../Button/Button";
import { useNavigate } from 'react-router';
import LazyImage from '../LazyImage/LazyImage';
import './style.scss';

interface MovieCardProps {
    movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const navigate = useNavigate();

    const handleViewDetail = () => {
        navigate(`/movie?id=${movie.id}`);
    };

    return (
        <div className="movieCard">
            <div className="imageWrapper">
                <LazyImage
                    src={ movie?.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: 'https://placehold.co/500x700?text=Image+Error' }
                    alt={movie.title}
                />
                <div className="rating">
                    <span>{movie.vote_average.toFixed(1)}</span>
                </div>
            </div>
            <div className="content">
                <h3>{movie.title || 'Movie Title'}</h3>
                <div className="date">{movie.release_date || '1974-11-29'}</div>
                <Button className="btnView" onClick={handleViewDetail} icon={<svg className="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                }>
                    View Detail
                </Button>
            </div>
        </div>
    );
}

export default MovieCard;