import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/home.css";

import PeopleCard from "../component/peopleCard.jsx";
import PlanetCard from "../component/planetsCard.jsx";
import VehicleCard from "../component/vehicleCard.jsx";

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
										uid={index}
										name={person.name}
										url={person.url}
										gender={person.gender}
										hairColor={person.hair_color}
										eyeColor={person.eye_color}
										type={"characters"}
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
										uid={index}
										name={planet.name}
										terrain={planet.terrain}
										population={planet.population}
										type={"planets"}
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
										uid={index}
										name={vehicle.name}
										model={vehicle.model}
										manufacturer={vehicle.manufacturer}
										costCredits={vehicle.cost_in_credits}
										type={"vehicles"}
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

// here's a dumb fix for the broken vehicles images if anybody is interested
// put this in your map before your return
// let extractedImgUrl = (vehicle.url.split("https://swapi.dev/api/vehicles/").pop()).slice(0, -1);
// and add this prop
// img={`https://starwars-visualguide.com/assets/img/vehicles/${extractedImgUrl}.jpg`}

