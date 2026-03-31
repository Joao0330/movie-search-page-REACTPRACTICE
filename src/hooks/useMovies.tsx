import { api } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const useMovies = (query: string) => {
	const fetchMovies = async (): Promise<Movie[]> => {
		const { data } = await api.get('/search/movie', {
			params: {
				query,
			},
		});

		return data.results;
	};

	const {
		data: movies = [],
		isLoading,
		error,
	} = useQuery({
		queryKey: ['movies', query],
		queryFn: fetchMovies,
		enabled: !!query,
		staleTime: 1000 * 60 * 60 * 24,
		retry: 1,
		refetchOnWindowFocus: false,
	});

	return { movies, isLoading, error };
};
