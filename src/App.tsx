import { useState } from 'react';
import { useMovies } from './hooks/useMovies';
import { MovieCard } from './components/MovieCard';

function App() {
	const [query, setQuery] = useState('');
	const { movies, isLoading, error } = useMovies(query);

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const searchQuery = formData.get('searchQuery') as string;
		setQuery(searchQuery);
	};

	return (
		<div className='min-h-dvh bg-gray-900 text-white'>
			<div className='max-w-312 my-0 mx-auto flex flex-col gap-10 py-10 max-md:px-10'>
				<h1 className='text-3xl font-medium'>Movie Search</h1>

				<form className='flex flex-col bg-gray-950 p-5 gap-5 rounded-lg shadow-md' onSubmit={handleSubmit}>
					<h3 className='text-sm font-medium text-gray-400'>Search for a movie</h3>
					<input type='text' placeholder='Search movie...' className='border border-gray-500 p-2 outline-0 rounded-lg' name='searchQuery' />
					<button type='submit' className='bg-blue-600 p-2 rounded-lg cursor-pointer'>
						Search
					</button>
				</form>

				<section className='grid grid-cols-5 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1'>
					{isLoading && <p>Loading...</p>}
					{error && <p>Something went wrong...</p>}
					{movies.map(movie => (
						<MovieCard key={movie.id} image={movie.poster_path} title={movie.title} description={movie.overview} />
					))}
				</section>
			</div>
		</div>
	);
}

export default App;
