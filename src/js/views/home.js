import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/home.css";

import PeopleCard from "../component/peopleCard.jsx";
import PlanetCard from "../component/planetsCard.jsx";
import VehicleCard from "../component/vehicleCard.jsx";
import PeopleDetails from "../views/peopleDetails";
import PlanetDetails from "../views/planetDetails";
import VehicleDetails from "../views/vehicleDetails";

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
										// key={index}
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
										// key={index}
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
										// key={index}
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

{/* <Route path="/initialPage" element={<InitialPage />} />
						<Route path="/" element={<Home />} />
						<Route path="/planetDetails/:planetId" element={<PlanetDetails />} />
						<Route path="/vehiclesDetails/:vehicleId" element={<VehiclesDetails />} />
						<Route path="/characterDetails/:characterId" element={<CharacterDetails />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} */}

						// <Link to={`/planetDetails/${props.uid}`}>
			            //     <button className="btn btn-outline-primary btn-sm mt-2">Learn More</button>
			            // </Link>