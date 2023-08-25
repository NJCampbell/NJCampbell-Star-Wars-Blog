import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/index.css";

const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const { planetId } = useParams();
    const parsedPlanetId = parseInt(planetId) + 1;

    useEffect(() => {
        actions.fetchPlanetDetails(parsedPlanetId);
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${parsedPlanetId}.jpg`}
                            className="cardImage"
                            alt="..."
                            onError={
                                (e) => {
                                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
                                }
                            } />
                    </div>
                    <div className="col-9" id="lorem">
                        <h1>{store.planets[planetId]?.name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Sit laborum ab, eius fugit doloribus tenetur
                            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                            doloremque. Quaerat provident commodi consectetur veniam similique ad
                            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                            suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                            modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                            quasi aliquam eligendi, placeat qui corporis!</p>
                    </div>
                    <div className="detailsContainer">

                    </div>

                </div>
                <div className="detailedInfo">
                    <ul className="row">
                        <li className="col">Rotation Period: {store.planets[planetId]?.rotation_period}</li>
                        <li className="col">Orbital Period: {store.planets[planetId]?.orbital_period}</li>
                        <li className="col">Diameter: {store.planets[planetId]?.diameter}</li>
                        <li className="col">Climate: {store.planets[planetId]?.climate}/</li>
                        <li className="col">Gravity: {store.planets[planetId]?.gravity}</li>
                        <li className="col">Population: {store.planets[planetId]?.population}</li>
                        <li className="col">Terrain: {store.planets[planetId]?.terrain}</li>

                    </ul>
                </div>


            </div>


        </>
    )
}

export default PlanetDetails;

