import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./Layouts/Layout";
import Layout2 from "./Layouts/Layout2";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<Layout>
						<Homepage />
					</Layout>
				}
			/>

			<Route
				path='/cart'
				element={
					<Layout2>
						<CartPage />
					</Layout2>
				}
			/>

			<Route
				path='/checkout'
				element={
					<Layout2>
						<CheckoutPage />
					</Layout2>
				}
			/>
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};

export default App;
