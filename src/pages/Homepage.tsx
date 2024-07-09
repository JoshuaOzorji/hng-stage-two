import Arrivals from "../components/Arrivals";
import Discount from "../components/Discount";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
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
		</main>
	);
};

export default Homepage;
