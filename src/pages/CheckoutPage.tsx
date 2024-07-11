import BreadCrumb from "../components/BreadCrumb";
import CheckoutComponent from "../components/CheckoutComponent";

const CheckoutPage = () => {
	return (
		<main className='mx-4 md:mx-16 mb-16'>
			<BreadCrumb />

			<CheckoutComponent />
		</main>
	);
};

export default CheckoutPage;
