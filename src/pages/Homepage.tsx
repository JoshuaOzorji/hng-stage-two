import Discount from "../components/Discount";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Products from "../components/Products";

const Homepage = () => {
	return (
		<main>
			<Hero />
			<Discount />
			<Featured />
			<Products />
		</main>
	);
};

export default Homepage;
