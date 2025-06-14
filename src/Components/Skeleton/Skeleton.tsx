import './style.scss';

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

const Skeleton = ({ width, height, className = '' }: SkeletonProps) => {
  return (
    <div 
      className={`skeleton ${className}`}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
