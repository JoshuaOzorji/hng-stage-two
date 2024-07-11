import DesktopNavbar2 from "./DesktopNavbar2";
import MobileNavbar from "./MobileNavbar";

const Navbar2 = () => {
	return (
		<main>
			<div className='block md:hidden'>
				<MobileNavbar />
			</div>

			<div className='hidden md:block'>
				<DesktopNavbar2 />
			</div>
		</main>
	);
};

export default Navbar2;
