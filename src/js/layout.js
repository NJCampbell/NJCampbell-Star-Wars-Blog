import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import PeopleDetails from "./views/peopleDetails";
import PlanetDetails from "./views/planetDetails";
import VehicleDetails from "./views/vehicleDetails";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/people/:personId" element={<PeopleDetails />} />
						<Route path="/planets/:planetId" element={<PlanetDetails />} />
						<Route path="/vehicles/:vehicleId" element={<VehicleDetails />} />

						{/* <Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} /> */}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
