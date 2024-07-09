import gallery1 from "/gallery1.png";
import gallery2 from "/gallery2.png";
import gallery3 from "/gallery3.png";
import gallery4 from "/gallery4.png";

const galleryItems = [
	{ image: gallery1 },
	{ image: gallery2 },
	{ image: gallery3 },
	{ image: gallery4 },
];

const Gallery = () => {
	return (
		<main className='font-montserrat md:px-16 flex flex-col items-center'>
			<p className='md:text-2xl font-bold text-center'>STYLE GALLERY</p>
			<div className='flex my-8 gap-x-4'>
				{galleryItems.map((item, index) => (
					<div key={index} className='mx-auto'>
						<img
							src={item.image}
							alt={`new arrival img ${index + 1}`}
							className='object-contain md:h-[45vh]'
						/>
					</div>
				))}
			</div>

			<div className='flex items-center'>
				<button className='border border-black md:px-6 py-1.5 text-black font-semibold rounded-xl text-sm'>
					VIEW
				</button>
			</div>
		</main>
	);
};

export default Gallery;
