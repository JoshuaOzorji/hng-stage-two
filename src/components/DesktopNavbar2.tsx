import { FaHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const DesktopNavbar2 = () => {
	return (
		<main className='text-black font-daysOne bg-white py-4 md:px-16 md:text-[15px]'>
			<div className='flex items-center justify-between'>
				<Link to='/'>PANDAS</Link>

				<div className='flex gap-4'>
					<Link to='/'>Home</Link>
					<Link to='#'>Products</Link>
					<Link to='#'>About Us</Link>
				</div>

				<div className='flex gap-4 items-center'>
					<input
						type='search'
						id='search'
						name='search'
						placeholder='search'
						className='focus:outline-none text-black font-montserrat text-[15px] rounded-[22px] px-3 py-1 bg-[#F5F5F5]'
					/>
					<FaHeart className='w-5 h-5' />
					<TiShoppingCart className='w-5 h-5' />

					<button className='text-[13px] bg-black text-white rounded-[14px] px-6 py-1'>
						Log in
					</button>
				</div>
			</div>
		</main>
	);
};

export default DesktopNavbar2;
