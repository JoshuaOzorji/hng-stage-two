import { FaAppStore } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Download = () => {
	return (
		<main className='bg-black text-white font-montserrat my-6'>
			<div className='flex flex-col items-center py-8 gap-y-4'>
				<h2 className='font-daysOne md:text-2xl'>PANDA APP</h2>

				<button className='px-4 md:px-6 py-1.5 text-black font-semibold rounded-xl text-sm md:text-2xl bg-white'>
					DOWNLOAD
				</button>

				<div className='flex gap-6'>
					<div className='flex items-center gap-2'>
						<FaGooglePlay className='text-white w-5 h-5 md:w-9 md:h-9' />
						<span>
							<p className='font-light text-[8px] md:text-xs'>
								Download on the
							</p>
							<p className='font-bold text-[0.7rem]'>Play Store</p>
						</span>
					</div>

					<div className='flex items-center gap-2'>
						<FaAppStore className='text-white w-5 h-5 md:w-9 md:h-9' />
						<span>
							<p className='font-light text-[8px] md:text-xs'>
								Download on the
							</p>
							<p className='font-bold text-[0.7rem]'>App Store</p>
						</span>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Download;
