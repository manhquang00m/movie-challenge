import Skeleton from '../Skeleton/Skeleton';
import './style.scss';

const MovieCardSkeleton = () => {
  return (
    <div className="movieCard">
      <div className="imageWrapper">
        <Skeleton height="300px" width="100%" />
      </div>
      <div className="content-skeleton">
        <Skeleton height="24px" width="80%" />
        <Skeleton height="20px" width="40%" />
        <Skeleton height="32px" width="100%" />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
