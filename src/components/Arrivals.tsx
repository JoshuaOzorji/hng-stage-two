import greenPolo from "/greenPolo.png";
import blackPolo from "/blackPolo.png";
import purplePolo from "/purplePolo.png";

const arrivalItems = [
	{ image: greenPolo },
	{ image: blackPolo },
	{ image: purplePolo },
];

const Arrivals = () => {
	return (
		<main className='font-montserrat md:px-16'>
			<p className='md:text-2xl font-bold text-center'>NEW ARRIVALS</p>
			<div className='bg-[#EFC88B] flex justify-evenly md:px-4 md:rounded-[3rem] my-5 md:my-8 relative'>
				{arrivalItems.map((item, index) => (
					<div key={index}>
						<img
							src={item.image}
							alt={`new arrival img ${index + 1}`}
							className='object-contain md:h-[70vh]'
						/>
					</div>
				))}

				<div className='bg-white/60 absolute w-fit h-fit md:p-10 flex flex-col justify-center items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl py-2'>
					<p className='p-2 md:py-2 text-sm md:text-4xl text-white font-bold text-center'>
						High quality print T-shirts now Available
					</p>
					<button className='bg-black px-3 md:px-6 py-1 md:py-1.5 text-white rounded-lg md:rounded-xl text-[8px] md:text-sm'>
						SHOP
					</button>
				</div>
			</div>
		</main>
	);
};

export default Arrivals;
