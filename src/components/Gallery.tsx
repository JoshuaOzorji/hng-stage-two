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
			<p className='text-sm md:text-2xl font-bold text-center'>STYLE GALLERY</p>
			<div className='flex my-4 md:my-8 gap-x-2 md:gap-x-4'>
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

			<button className='border border-black py-1 px-3 md:px-6 md:py-1.5 text-black font-semibold rounded-lg md:rounded-xl text-[8px] md:text-sm'>
				VIEW
			</button>
		</main>
	);
};

export default Gallery;
