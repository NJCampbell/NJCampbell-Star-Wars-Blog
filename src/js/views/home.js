import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/home.css";
import Card from "../component/card.jsx";
import PeopleCard from "../component/peopleCard.jsx";
import PlanetCard from "../component/planetsCard.jsx";
import VehicleCard from "../component/vehicleCard.jsx";
import IndividualPerson from "../component/indPerson.jsx";
import IndividualPlanet from "../component/indPlanet.jsx";
import IndividualVehicle from "../component/indVehicle.jsx";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<>
			<div className="container">
				<div className="rowContainer">
					<div className="peopleContainer">
						<h1 className="headings">Characters</h1>
						<div className="row d-flex overflow-auto flex-nowrap">

							{store.people.map((person, index) => {
								return (
									<PeopleCard
										key={index}
										uid={person.uid}
										name={person.name}
										gender={person.gender}
										hairColor={person.hair_color}
										eyeColor={person.eye_color}
										cardType={"characters"}
										img={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
									/>
								);
							}
							)}
						</div>
					</div>
					<div className="planetContainer">
						<h1 className="headings">Planets</h1>
						<div className="row d-flex overflow-auto flex-nowrap">

							{store.planets.map((planet, index) => {
								return (
									<PlanetCard
										key={index}
										uid={planet.uid}
										name={planet.name}
										terrain={planet.terrain}
										population={planet.population}
										cardType={"planets"}
										img={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
									/>
								);
							}
							)}
						</div>
					</div>
					<div className="vehicleContainer">
						<h1 className="headings">Vehicles</h1>
						<div className="row d-flex overflow-auto flex-nowrap">

							{store.vehicles.map((vehicle, index) => {
								return (
									<VehicleCard
										key={index}
										uid={vehicle.uid}
										name={vehicle.name}
										model={vehicle.model}
										manufacturer={vehicle.manufacturer}
										costCredits={vehicle.cost_in_credits}
										cardType={"vehicles"}
										img={`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`}
									/>
								);
							}
							)}
						</div>
					</div>
				</div>
			</div>


		</>
	)
}

Home.Protoypes = {
	name: PropTypes.string
}
