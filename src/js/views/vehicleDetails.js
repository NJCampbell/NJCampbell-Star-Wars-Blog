import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/index.css";

const VehicleDetails = () => {
    const { store, actions } = useContext(Context);
    const { vehicleId } = useParams();
    const parsedVehicleId = parseInt(vehicleId) + 1;

    useEffect(() => {
        actions.fetchVehicleDetails(parsedVehicleId);
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${parsedVehicleId}.jpg`}
                            className="cardImage"
                            alt="..."
                            onError={
                                (e) => {
                                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
                                }
                            } />
                    </div>
                    <div className="col-9" id="lorem">
                        <h1>{store.vehicles[vehicleId]?.name}</h1>
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
                        <li className="col">Name: {store.vehicles[vehicleId]?.name}</li>
                        <li className="col">Model: {store.vehicles[vehicleId]?.model}</li>
                        <li className="col">Manufacturer: {store.vehicles[vehicleId]?.manufacturer}</li>
                        <li className="col">Cost in Credits: {store.vehicles[vehicleId]?.cost_in_credits}</li>
                        <li className="col">Vehicle Class: {store.vehicles[vehicleId]?.vehicle_class}</li>
                        <li className="col">Crew: {store.vehicles[vehicleId]?.crew}</li>
                        <li className="col">Passengers: {store.vehicles[vehicleId]?.passengers}</li>

                    </ul>
                </div>
                

            </div>


        </>
    )
}

export default VehicleDetails;

