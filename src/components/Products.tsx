import blackShirt from "/blackShirt.png";
import pinkGown from "/pinkGown.png";
import brownHat from "/brownHat.png";
import greenTop from "/greenTop.png";
import { FcLike } from "react-icons/fc";
import { FaHeart } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";

const productItems = [
	{
		image: blackShirt,
		icon: <FcLike />,
		brand: "Pandas",
		name: "Printed Black T-Shirt",
		price: "N40.00",
		rating: 5,
	},

	{
		image: pinkGown,
		icon: <FcLike />,
		brand: "Pandas",
		name: "Printed Black T-Shirt",
		price: "N40.00",
		rating: 5,
	},

	{
		image: brownHat,
		icon: <FaHeart color='white' />,
		brand: "Pandas",
		name: "Printed Black T-Shirt",
		price: "N40.00",
		rating: 5,
	},

	{
		image: greenTop,
		icon: <FaHeart color='white' />,
		brand: "Pandas",
		name: "Printed Black T-Shirt",
		price: "N40.00",
		rating: 5,
	},
];

const renderStars = (rating: number) => {
	return Array(rating)
		.fill(0)
		.map((_, index) => (
			<IoMdStarOutline
				key={index}
				color={index === rating - 1 ? "#000000" : "#EFC88B"}
			/>
		));
};

const Products = () => {
	return (
		<main>
			<p className='font-montserrat md:text-2xl font-bold text-center'>
				POPULAR PRODUCTS
			</p>
			<div className='flex justify-between font-montserrat gap-x-2 p-4 md:px-16 md:py-10'>
				{productItems.map((item, index) => (
					<div key={index}>
						<div className='flex gap-x-2 md:gap-4 relative'>
							<img
								src={item.image}
								alt='featured image'
								className='object-contain md:h-[45vh]'
							/>
							<div className='absolute top-0 right-0 p-1.5  rounded-full bg-[#EEE5E9]'>
								{item.icon}
							</div>
						</div>

						<div className='font-bold md:px-4'>
							<p className='md:text-[10px]'>{item.brand}</p>
							<h4 className='md:text-sm'>{item.name}</h4>
							<h4 className='md:text-sm text-[#CF5C36]'>{item.price}</h4>
							<div className='flex'>{renderStars(item.rating)}</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
};

export default Products;
