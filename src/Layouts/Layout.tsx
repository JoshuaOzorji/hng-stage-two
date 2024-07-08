import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<main className='flex flex-col min-h-screen'>
			<div className=''>
				<Navbar />
			</div>

			<div className='flex-1'>{children}</div>

			<div>
				<Footer />
			</div>
		</main>
	);
};

export default Layout;
