// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// import { Context } from "../store/appContext";
// import PeopleDetails from "../views/peopleDetails";
// import PlanetDetails from "../views/planetDetails";
// import VehicleDetails from "../views/vehicleDetails";

// import "../../styles/demo.css";

// export const Demo = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="container">
// 			<div className="indContainer">
// 				<div className="indPersonContainer">
// 					{/* {store.people[index]} */}			


// 				</div>
// 			</div>
// 			<br />
// 			<Link to="/">
// 				<button className="btn btn-primary">Back home</button>
// 			</Link>
// 		</div>
// 	);
// };

	// <ul className="list-group">
	// 			{store.demo.map((item, index) => {
	// 				return (
	// 					<li
	// 						key={index}
	// 						className="list-group-item d-flex justify-content-between"
	// 						style={{ background: item.background }}>
	// 						<Link to={"/single/" + index}>
	// 							<span>Link to: {item.title}</span>
	// 						</Link>
	// 						{// Conditional render example
	// 						// Check to see if the background is orange, if so, display the message
	// 						item.background === "orange" ? (
	// 							<p style={{ color: item.initial }}>
	// 								Check store/flux.js scroll to the actions to see the code
	// 							</p>
	// 						) : null}
	// 						<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
	// 							Change Color
	// 						</button>
	// 					</li>
	// 				);
	// 			})}
	// 		</ul>


// 	const { characterId } = useParams(); // Get the characterId from the route parameters
// import React, { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Context } from "../store/appContext"; 


// const CharacterDetails = () => {
//      const { characterId } = useParams(); // Get the characterId from the route parameters
//      const parsedCharacterId = parseInt(characterId) +1; 
//      const { store, actions } = useContext(Context); // to Access the store and actions from the appContext
     
//      useEffect(() => {
//              actions.fetchIndiv

// {store.people((person, index) => {
// 	return (
// 		<IndividualPerson
// 			key={index}
// 			uid={person.uid}
// 			name={person.name}
// 			url={person.url}
// 			gender={person.gender}
// 			hairColor={person.hair_color}
// 			eyeColor={person.eye_color}
// 			birthYear={person.birth_year}
// 			skinColor={person.skin_color}
// 			mass={person.mass}
// 			height={person.height}
// 			cardType={"characters"}
// 			img={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
// 		/>
// 	)
// })
// }