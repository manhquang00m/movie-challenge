import type { MovieResponse } from "../../services/types";
import LazyImage from "../LazyImage/LazyImage";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardSkeleton from "../MovieCard/MovieCardSkeleton";
import './style.scss';
import dataNotFound from '../../assets/dataNotFound.png';
import Button from "../Button/Button";

interface MovieListProps {
    data?: MovieResponse
    loading?: boolean
    isError?: boolean
    onReload: () => void
}

const MovieList = ({ data, loading, onReload, isError }: MovieListProps) => {
    const skeletons = Array(10).fill(null);

    return (
        <div className="movieList">
            {isError ? <div className="dataNotFound">
                <LazyImage src={dataNotFound} alt="dataNotFound" />
                <p>Ooops, Data Not Found</p>
                <Button onClick={() => onReload()} icon={
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
                    </svg>

                }>Reload</Button>
            </div> : <div className="grid">
                {loading ? (
                    skeletons.map((_, index) => (
                        <MovieCardSkeleton key={index} />
                    ))
                ) : (
                    data?.results.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                )}
            </div>}
        </div>
    );
}

export default MovieList;