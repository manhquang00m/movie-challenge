import type { AxiosInstance } from "axios";
import axios from "axios";

export class httpBase {
    protected api: AxiosInstance;
    protected readonly api_key = 'c95dfb4876b557d8196788f2f6ada0fb'
    constructor() {

        this.api = axios.create({
            baseURL:'https://api.themoviedb.org/3',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.setupInterceptors();
    }

    private setupInterceptors(): void {
        this.api.interceptors.request.use(
            (config) => {
                // You can add auth token here
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        this.api.interceptors.response.use(
            (response) => response,
            (error) => Promise.reject(error)
        );
    }
}