import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<main className='flex flex-col min-h-screen'>
			<div className=''>
				<Navbar2 />
			</div>

			<div className='flex-1'>{children}</div>

			<div>
				<Footer />
			</div>
		</main>
	);
};

export default Layout;
