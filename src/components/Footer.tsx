import { footerlinks } from "../data";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
	return (
		<main className='bg-black font-lato md:px-16 md:py-4'>
			<div className='grid md:grid-cols-6 gap-4 py-6 text-white '>
				<h2 className='font-daysOne md:text-base'>PANDAS</h2>

				{footerlinks.map((section) => (
					<div key={section.id}>
						<h3 className='font-bold mb-2 md:text-sm'>{section.title}</h3>
						<ul>
							{section.links.map((link, index) => (
								<li key={index} className='mb-1'>
									<a href={link.link} className='hover:underline md:text-sm'>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}

				<div className='font-montserrat'>
					<h3 className='font-bold md:text-sm'>Social Media</h3>
					<ul className='flex gap-4 items-center my-2'>
						<li>
							<FaFacebookF />
						</li>
						<li>
							<FaInstagram />
						</li>
						<li>
							<FaTwitter />
						</li>
					</ul>
				</div>
			</div>

			<div className='text-[#6A6A6A] border-t border-[#6A6A6A] py-6 text-sm flex justify-between'>
				<p>&copy; 2024 PANDAS. All Rights Reserved. </p>

				<ul className='flex items-center gap-x-4'>
					<li>Privacy</li>
					<li>Terms</li>
					<li>Help center</li>
					<li>Contact us</li>
				</ul>
			</div>
		</main>
	);
};

export default Footer;
