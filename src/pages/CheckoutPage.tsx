import { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import CheckoutComponent from "../components/CheckoutComponent";

const CheckoutPage = () => {
	// SCROLL TO TOP
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className='mx-4 md:mx-16 mb-16'>
			<BreadCrumb />

			<CheckoutComponent />
		</main>
	);
};

export default CheckoutPage;
