import { httpBase } from "./http";
import type { MovieDetail, MovieResponse } from "./types";

class MovieAPI extends httpBase {
    getNowPlaying(page: number = 1): Promise<MovieResponse> {
        return this.api.get<MovieResponse>(
            `/movie/now_playing?api_key=${this.api_key}&language=en-US&page=${page}`
        ).then(response => response.data);
    }
    getTopRated(page: number = 1): Promise<MovieResponse> {
        return this.api.get<MovieResponse>(
            `/movie/top_rated?api_key=${this.api_key}&language=en-US&page=${page}`
        ).then(response => response.data);
    }
    searchMovie(page: number = 1, movieId?: string | null): Promise<MovieResponse> {
        return this.api.get<MovieResponse>(
            `/search/movie?api_key=${this.api_key}&include_adult=false&language=en-US&page=${page}&query=${movieId}`
        ).then(response => response.data);
    }
    getMovieDetail(id?: string | null): Promise<MovieDetail> {
        return this.api.get<MovieDetail>(
            `/movie/${id}?api_key=${this.api_key}&language=en-US`
        ).then(response => response.data);
    }
}

export const movieAPI = new MovieAPI();