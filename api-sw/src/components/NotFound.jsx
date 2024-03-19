import ObiWanImg from '/obi.jpg'

export const NotFound = () => {
	return (
		<div className="flex flex-col items-center">
			<img src={ObiWanImg} alt='obi wan image' className="w-60 h-60 rounded-full object-cover" />
			<span className='font-bold my-4'>These are not the droids you are looking for</span>
		</div>
	)
}
