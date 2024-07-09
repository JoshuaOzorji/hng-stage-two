import { MdMenu } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

const MobileNavbar2 = () => {
	return (
		<main className='flex bg-white py-4 px-6 justify-between'>
			<MdMenu className='w-6 h-6' />

			<div>
				<p className='text-base font-daysOne'>PANDAS</p>
			</div>

			<TiShoppingCart className='w-6 h-6' />
		</main>
	);
};

export default MobileNavbar2;
