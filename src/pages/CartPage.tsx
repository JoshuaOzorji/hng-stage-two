import { useEffect } from "react";
import CartComponent from "../components/CartComponent";
import Discount2 from "../components/Discount2";

const CartPage = () => {
	// SCROLL TO TOP
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main>
			<Discount2 />
			<CartComponent />
		</main>
	);
};

export default CartPage;
