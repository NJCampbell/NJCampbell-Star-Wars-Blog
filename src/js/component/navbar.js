import React from "react";
import { Link } from "react-router-dom";

import Star_Wars_Logo from "../../img/Star_Wars_Logo.svg.png";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar mb-3">
				<h1>
					<img className="starwarsLogo" src={Star_Wars_Logo} />
				</h1>
				<button className="btn" style={{ backgroundColor: '#ffe919', padding: '10px 20px', marginRight: '8%', fontSize: '1.25rem' }} id="favoriteButton">Favorites</button>
			</nav>
		</>
		// <nav className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button className="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>
	);
};
