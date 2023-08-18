import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import Card from "../component/card";

import "../../styles/home.css";
import Card from "../component/card";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<>
			<div className="containerHome">
				<Card />
				{store.people.map(person => <p>{person.name}</p>)}
				{console.log(store.people)}

			</div>
			<div className="planetsContainer">
				{store.planets.map(planets => <p>{planets.name}</p>)}
				{console.log(store.planets)}

			</div>
			<div className="vehiclesContainer">
				{store.vehicles.map(vehicles => <p>{vehicles.name}</p>)}
				{console.log(store.vehicles)}

			</div>
			{/* custom card tag to render all of my people planets and vehicles */}


		</>
	)
}




// store.people.map