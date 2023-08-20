import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const IndividualPerson = (props) => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="indContainer">
                <div className="card" style={{ width: "25rem" }}>
                    <div className="row">
                        <img className="card-img-top" src={props.img} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="listDetails">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Name: {props.name}</li>
                                    <li className="list-group-item">Birthyear: {props.birthYear}</li>
                                    <li className="list-group-item">Gender: {props.gender}</li>
                                    <li className="list-group-item">Height: {props.height}cm</li>
                                    <li className="list-group-item">Mass: {props.mass}kg</li>
                                    <li className="list-group-item">Skin Color: {props.skinColor}</li>
                                    <li className="list-group-item">Eye Color: {props.eyeColor}</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/">
                    <button className="btn btn-primary">Back home</button>
                </Link>
            </div>
        </>
    )
}
IndividualPerson.propTypes = {
    name: PropTypes.string
};

export default IndividualPerson;