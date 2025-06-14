import MovieList from "../../Components/MovieList/MovieList";
import Pagination from "../../Components/Pagination/Pagination";
import { useState } from "react";
import { useNowPlaying } from "../../hooks/movieQuery";

const NowPlayingPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isError, refetch } = useNowPlaying(currentPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="wrapper">
            <h1 className="title">Now Playing</h1>
            <MovieList
                data={data}
                loading={isLoading}
                isError={isError}
                onReload={() => {
                    setCurrentPage(1)
                    refetch()
                }}
            />
            {!isLoading && !isError && <Pagination
                currentPage={currentPage}
                totalPages={data?.total_pages || 1}
                onPageChange={handlePageChange}
            />}

        </div>
    );
}

export default NowPlayingPage;