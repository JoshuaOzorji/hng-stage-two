import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
	return (
		<main>
			<div className='block md:hidden'>
				<MobileNavbar />
			</div>

			<div className='hidden md:block'>
				<DesktopNavbar />
			</div>
		</main>
	);
};

export default Navbar;
