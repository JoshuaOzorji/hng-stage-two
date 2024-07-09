import cart1 from "/cart1.png";
import cart2 from "/cart2.png";
import cart3 from "/cart3.png";
import cart4 from "/cart4.png";
import cart5 from "/cart5.png";
import cart6 from "/cart6.png";
import cartMain from "/cart-main.png";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const cartItems = [
	{ image: cart1 },
	{ image: cart2 },
	{ image: cart3 },
	{ image: cart4 },
	{ image: cart5 },
	{ image: cart6 },
];

const CartComponent = () => {
	return (
		<main className='flex flex-col md:flex-row px-4 md:px-16 w-full'>
			<section className='md:w-[60%]'>
				<img src={cartMain} className='object-contain' />

				<div className='flex gap-2 my-6'>
					{cartItems.map((item, index) => (
						<div key={index} className='mx-auto'>
							<img
								src={item.image}
								alt={`new arrival img ${index + 1}`}
								className='object-contain'
							/>
						</div>
					))}
				</div>
			</section>

			<section className='md:w-[40%] md:px-10 py-4 md:py-8 font-montserrat font-bold'>
				<p className='text-[10px] md:text-xs font-bold'>Pandas</p>

				<span className='font-bold text-sm md:text-base flex justify-between'>
					<h3>Printed 21 Blue T-Shirt</h3>
					<p className='text-[#CF5C36]'>N40.00</p>
				</span>

				<span className='flex items-center justify-between'>
					<ul className='flex text-[#EFC88B]'>
						<li>
							<IoMdStarOutline />
						</li>
						<li>
							<IoMdStarOutline />
						</li>
						<li>
							<IoMdStarOutline />
						</li>
						<li>
							<IoMdStarOutline />
						</li>
						<li>
							<IoMdStarOutline />
						</li>
					</ul>

					<p className='line-through text-sm md:text-base'>N40.00</p>
				</span>

				<p className='flex text-xs md:text-sm gap-1 my-6 font-normal text-neutral-500'>
					Colour: <p className='font-bold text-black'>Night/Black</p>
				</p>

				<span className='flex justify-between items-center text-xs md:text-sm my-2'>
					<p className='text-neutral-500'>UK Size</p>
					<p className='underline'>See guide</p>
				</span>

				<ul className='flex gap-2 justify-between items-center my-4 text-sm md:text-base font-semibold'>
					<li className='cart-size'>6</li>
					<li className='cart-size'>8</li>
					<li className='cart-size'>10</li>
					<li className='cart-size'>12</li>
					<li className='cart-size'>14</li>
					<li className='cart-size'>16</li>
					<li className='cart-size'>18</li>
					<li className='cart-size'>20</li>
				</ul>

				<div className='flex justify-between items-center gap-4 my-4'>
					<button className='text-white bg-black font-normal w-[90%] rounded-md py-1.5 text-sm md:text-base'>
						ADD TO CART
					</button>

					<span className='text-white bg-black w-[10%] p-1 rounded-md flex'>
						<IoMdHeart className='w-6 h-6' />
					</span>
				</div>

				<div className='flex flex-col gap-3 text-sm'>
					<span className='flex justify-between border-b border-black'>
						<p>Why we love it</p>
						<MdOutlineArrowDropDown />
					</span>

					<span className='flex justify-between border-b border-black'>
						<p>The finer detail</p>
						<MdOutlineArrowDropDown />
					</span>

					<span className='flex justify-between border-b border-black'>
						<p>Delivery and return</p>
						<MdOutlineArrowDropDown />
					</span>
				</div>

				<ul className='flex gap-2 md:gap-4 items-center my-4 text-neutral-600'>
					<li>
						<FaFacebookF className='w-4 h-4 md:w-5 md:h-5' />
					</li>
					<li>
						<FaInstagram className='w-4 h-4 md:w-5 md:h-5' />
					</li>
					<li>
						<FaTwitter className='w-4 h-4 md:w-5 md:h-5' />
					</li>
				</ul>
			</section>
		</main>
	);
};

export default CartComponent;
