import { useSearchParams } from 'react-router';
import { useDetailMovie } from "../../hooks/movieQuery";
import './style.scss';
import LazyImage from '../../Components/LazyImage/LazyImage';
// import { FaClock, FaStar, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const MovieDetailPage = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const { data, isLoading } = useDetailMovie(id);

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>Error...</p>;

    const {
        backdrop_path,
        poster_path,
        title,
        release_date,
        runtime,
        vote_average,
        overview,
        genres,
        budget,
        revenue,
        status,
        original_language
    } = data;

    return (
        <div className="movie-detail">
            <div className="backdrop">
                <LazyImage src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                    alt={title} />
            </div>
            <div className="content">
                <div className="poster">
                    <LazyImage src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title} />
                </div>
                <div className="info">
                    <h1 className="title">{title}</h1>
                    <div className="meta">
                        <span>
                            <svg className="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                            </svg>

                            {formatDate(release_date)}
                        </span>
                        <span>
                            <svg className="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            {runtime} minutes
                        </span>
                        <span>
                            <svg className="w-[16px] h-[16px] text-[#fcd34d] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                            </svg>

                            {vote_average.toFixed(1)}
                        </span>
                    </div>
                    <p className="overview">{overview}</p>
                    <div className="details">
                        <div className="detail-item">
                            <div className="label">Genres</div>
                            <div>{genres?.map(g => g.name).join(', ')}</div>
                        </div>
                        <div className="detail-item">
                            <div className="label">Status</div>
                            <div>{status}</div>
                        </div>
                        <div className="detail-item">
                            <div className="label">Budget</div>
                            <div>
                                ${(budget / 1000000).toFixed(1)}M
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="label">Revenue</div>
                            <div>
                                ${(revenue / 1000000).toFixed(1)}M
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="label">Language</div>
                            <div>{original_language.toUpperCase()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailPage;