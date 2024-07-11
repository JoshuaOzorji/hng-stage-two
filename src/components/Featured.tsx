import shorts from "/shorts.png";
import shirts from "/shirts.png";
import hats from "/hats.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const featuredItems = [
	{
		label: "SHIRTS",
		image: shirts,
	},

	{
		label: "HATS",
		image: hats,
	},

	{
		label: "SHORTS",
		image: shorts,
	},
];

const Featured = () => {
	return (
		<main className='font-montserrat p-4 md:px-16 md:py-10'>
			<section className='flex justify-between gap-x-2 '>
				{featuredItems.map((item, index) => (
					<Link
						to='/cart'
						key={index}
						className='relative bg-[#EEE5E9] rounded-xl'>
						<div className='relative flex gap-x-2 md:gap-4 space'>
							<img
								src={item.image}
								alt='featured image'
								className='w-full h-auto object-contain min-h-20 min-w-20'
							/>
							<p className='absolute inset-0 flex items-center justify-center text-white font-bold md:text-3xl'>
								{item.label}
							</p>
						</div>
					</Link>
				))}
			</section>

			<span className='text-black flex items-center justify-end my-2 md:my-4 text-xs md:text-sm '>
				<Link to='/cart'>see more</Link>
				<IoIosArrowForward />
			</span>
		</main>
	);
};

export default Featured;
