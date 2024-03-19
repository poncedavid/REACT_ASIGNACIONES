import { NotFound } from "./NotFound"

export const FilmItem = ({
	title,
	opening_crawl,
	director,
	producer,
    release_date,
    detail = ''
}) => {
	return (
		<div className='py-8 px-4 md:px-12 bg-gray-800 border-spacing-2 border-2 rounded-md border-gray-400'>
			{detail ? (
				<NotFound />
			) : (
				<>
					<h2 className='text-2xl'>{title}</h2>
					<p>Opening Crawl: {opening_crawl}</p>
					<p>Director: {director}</p>
					<p>Producer: {producer}</p>
					<p>Release Date: {release_date}</p>
				</>
			)}
		</div>
	)
}
