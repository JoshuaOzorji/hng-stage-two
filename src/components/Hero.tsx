import HeroIcons from "./HeroIcons";
import heroImg from "/panda.jpg";
import { MdPlayArrow } from "react-icons/md";

const Hero = () => {
	return (
		<main className='bg-black font-daysOne text-white md:px-16'>
			<section className='flex items-end'>
				<HeroIcons />
				<div className='relative'>
					<img src={heroImg} alt='hero image' className='object-contain' />

					<div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
						<h1 className='md:text-5xl lg:text-7xl mb-2'>PANDAS CLOTHING</h1>
						<ul className='text-lg flex'>
							<li className='flex items-center'>
								<MdPlayArrow className='w-4 h-4' />
								Shoes
							</li>
							<li className='pl-4'>Accessories</li>
							<li className='pl-4'>Shirts</li>
						</ul>
					</div>
				</div>
				<HeroIcons />
			</section>
		</main>
	);
};

export default Hero;
