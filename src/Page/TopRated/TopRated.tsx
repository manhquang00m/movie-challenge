import MovieList from "../../Components/MovieList/MovieList";
import Pagination from "../../Components/Pagination/Pagination";
import { useState } from "react";
import { useTopRated } from "../../hooks/movieQuery";

const TopRatedPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isError, refetch } = useTopRated(currentPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="wrapper">
            <h1 className="title">Top Rated</h1>
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
export default TopRatedPage;