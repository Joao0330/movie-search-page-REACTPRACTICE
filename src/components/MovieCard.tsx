interface MovieCardProps {
	image: string;
	title: string;
	description: string;
}

export const MovieCard = ({ image, title, description }: MovieCardProps) => {
	const imageUrl = image ? `https://image.tmdb.org/t/p/w300${image}` : 'https://placehold.co/300x450?text=Image not found';

	return (
		<article className='p-5 bg-gray-950 rounded-xl shadow-md'>
			<figure>
				<img src={imageUrl} alt='movie poster' className='rounded-lg mb-4 w-full h-auto' />

				<figcaption>
					<h2 className='text-xl font-bold mb-4'>{title}</h2>
					<p className='text-gray-400'>{description.length > 100 ? description.substring(0, 100) + '...' : description}</p>
				</figcaption>
			</figure>
		</article>
	);
};
