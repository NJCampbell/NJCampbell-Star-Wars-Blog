import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import Star_Wars_Logo from "../../img/Star_Wars_Logo.svg.png";
import "../../styles/home.css";
// import SearchBar from "../component/searchBar";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<nav className="navbar mb-3">
				<Link to="/">
					<img className="starwarsLogo" src={Star_Wars_Logo} />
				</Link>

				{/* <SearchBar /> */}

				<div className="ml-auto" style={{ position: "relative" }}>
					<div className="deleteButton">
						<button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
							style={{ backgroundColor: '#ffe919', padding: '10px 20px', marginRight: '50%', fontSize: '1.25rem' }}
						>Favorites
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((item, index) => (
								<li key={index}>
									<span className="dropdown-item">
										{item}
									</span>
									<button className="deleteFavorite"
										onClick={
											() => actions.removeFavorite(item)
										}>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
											<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
											<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
										</svg>
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</>

	);
};
