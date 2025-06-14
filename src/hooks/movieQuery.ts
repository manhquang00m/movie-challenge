import { useQuery } from '@tanstack/react-query';
import { movieAPI } from '../services/movie.api';
import type { MovieDetail, MovieResponse } from '../services/types';
import { useNotification } from '../context/NotificationContext';
import type { AxiosError } from 'axios';

export const useNowPlaying = (page: number = 1) => {
    const { showNotification } = useNotification();
    return useQuery({
        queryKey: ['nowPlaying', page],
        queryFn: () => movieAPI.getNowPlaying(page),
        onError: ({ response }: AxiosError<MovieResponse>) => {
            showNotification(
                response?.data?.status_message || 'Error fetching movies', 'error')
        }
    })
};

export const useTopRated = (page: number = 1) => {
    const { showNotification } = useNotification();
    return useQuery({
        queryKey: ['topRated', page],
        queryFn: () => movieAPI.getTopRated(page),
        onError: ({ response }: AxiosError<MovieResponse>) => {
            showNotification(
                response?.data?.status_message || 'Error fetching movies', 'error')
        }
    })
};

export const useSearchMovie = (page: number = 1, movie?: string | null) => {
    const { showNotification } = useNotification();
    return useQuery({
        queryKey: ['searchMovie', page, movie],
        queryFn: () => movieAPI.searchMovie(page, movie),
        onError: ({ response }: AxiosError<MovieResponse>) => {
            showNotification(
                response?.data?.status_message || 'Error fetching movies', 'error')
        },
        enabled: !!movie && movie.trim() !== ''
    })
};

export const useDetailMovie = (movieId?: string | null) => {
    const { showNotification } = useNotification();
    return useQuery({
        queryKey: ['detailMovie', movieId],
        queryFn: () => movieAPI.getMovieDetail(movieId),
        onError: ({ response }: AxiosError<MovieDetail>) => {
            showNotification(
                response?.data?.status_message || 'Error fetching movies', 'error')
        },
        enabled: !!movieId
    })
};
