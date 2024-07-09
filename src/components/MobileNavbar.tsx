import { TiShoppingCart } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const MobileNavbar = () => {
	return (
		<main className='flex bg-white py-4 px-6 justify-between'>
			<MdMenu className='w-6 h-6' />

			<div>
				<p className='text-base font-daysOne'>PANDAS</p>
			</div>

			<div className='flex gap-3'>
				<IoSearch className='w-6 h-6' />
				<TiShoppingCart className='w-6 h-6' />
			</div>
		</main>
	);
};

export default MobileNavbar;
