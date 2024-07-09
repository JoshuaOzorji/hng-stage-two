import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./Layouts/Layout";
import Layout2 from "./Layouts/Layout";
import CartPage from "./pages/CartPage";

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
		</Routes>
	);
};

export default App;
