import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const IndividualPlanet = () => {
    const { store, actions } = useContext(Context)
    return (
        <>
        <div className="indContainer">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="listDetails">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div></>
    )
}

export default IndividualPlanet;
