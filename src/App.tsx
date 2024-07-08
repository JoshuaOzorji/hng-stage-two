import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./Layouts/Layout";

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

			<Route />
		</Routes>
	);
};

export default App;
