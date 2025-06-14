import { useState } from 'react';
import './style.scss';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className = '' }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`lazy-image ${isLoaded ? 'loaded' : ''} ${className}`}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default LazyImage;
