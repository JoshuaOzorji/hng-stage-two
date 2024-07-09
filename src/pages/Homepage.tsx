import Arrivals from "../components/Arrivals";
import Discount from "../components/Discount";
import Download from "../components/Download";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import PandaLogo from "../components/PandaLogo";
import Products from "../components/Products";

const Homepage = () => {
	return (
		<main>
			<Hero />
			<Discount />
			<Featured />
			<Products />
			<Arrivals />
			<Gallery />
			<Download />
			<PandaLogo />
		</main>
	);
};

export default Homepage;
