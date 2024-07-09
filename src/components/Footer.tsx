import { footerlinks } from "../data";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
	return (
		<main className='bg-black text-white font-montserrat md:px-16 md:py-4'>
			<div className='grid md:grid-cols-6 gap-4 py-6'>
				<h2 className='font-daysOne md:text-base'>PANDAS</h2>

				{footerlinks.map((section) => (
					<div key={section.id} className='font-montserrat'>
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
		</main>
	);
};

export default Footer;
