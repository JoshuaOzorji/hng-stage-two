import DesktopNavbar2 from "./DesktopNavbar2";
import MobileNavbar2 from "./MobileNavbar2";

const Navbar2 = () => {
	return (
		<main>
			<div className='block md:hidden'>
				<MobileNavbar2 />
			</div>

			<div className='hidden md:block'>
				<DesktopNavbar2 />
			</div>
		</main>
	);
};

export default Navbar2;
