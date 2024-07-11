import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<div>
			<main className='flex bg-white py-4 px-6 justify-between'>
				<MdMenu className='w-6 h-6 cursor-pointer' onClick={toggleDrawer} />

				<div>
					<Link to='/' className='text-base font-daysOne'>
						PANDAS
					</Link>
				</div>

				<div className='flex gap-3'>
					<IoSearch className='w-6 h-6' />
					<TiShoppingCart className='w-6 h-6' />
				</div>
			</main>

			{isDrawerOpen && (
				<div className='fixed inset-0 z-50 bg-black bg-opacity-50'>
					<div className='fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-4'>
						<div className='flex justify-between items-center mb-6'>
							<Link to='/' className='text-lg font-daysOne'>
								Pandas
							</Link>
							<MdClose
								className='w-6 h-6 cursor-pointer'
								onClick={toggleDrawer}
							/>
						</div>

						<nav>
							<ul className='flex flex-col space-y-4 font-montserrat'>
								<Link
									to='/'
									className='text-gray-700 hover:text-black'
									onClick={toggleDrawer}>
									Home
								</Link>

								<Link
									to='#'
									className='text-gray-700 hover:text-black'
									onClick={toggleDrawer}>
									Products
								</Link>

								<Link
									to='#'
									className='text-gray-700 hover:text-black'
									onClick={toggleDrawer}>
									About Us
								</Link>
							</ul>
						</nav>
					</div>
				</div>
			)}
		</div>
	);
};

export default MobileNavbar;
