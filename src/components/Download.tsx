import { FaAppStore } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Download = () => {
	return (
		<main className='bg-black text-white font-montserrat my-6'>
			<div className='flex flex-col items-center py-8 md:gap-y-4'>
				<h2 className='font-daysOne md:text-2xl'>PANDA APP</h2>

				<button className='md:px-6 py-1.5 text-black font-semibold rounded-xl md:text-2xl bg-white'>
					DOWNLOAD
				</button>

				<div className='flex gap-6'>
					<div className='flex items-center gap-2'>
						<FaGooglePlay className='text-white w-9 h-9' />
						<span>
							<p className='font-light text-xs'>Download on the</p>
							<p className='font-bold'>Play Store</p>
						</span>
					</div>

					<div className='flex items-center gap-2'>
						<FaAppStore className='text-white w-9 h-9' />
						<span>
							<p className='font-light text-xs'>Download on the</p>
							<p className='font-bold'>App Store</p>
						</span>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Download;
