import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";



const VehicleCard = (props) => {
    const { store, actions } = useContext(Context)

    // let cardImgUrl = "https://starwars-visualguide.com/assets/img/" + props.cardType + "/" + props.uid + ".jpg";

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={props.img} alt="Card image cap"
                    onError={(e) => { e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Model: {props.model}</p>
                    <p className="card-text">Manufacturer: {props.manufacturer}</p>
                    <p className="card-text">Cost in credits: {props.costCredits}</p>
                    <a href="#" className="btn btn-primary">More details!</a>
                    <a href="#" className="btn">❤️</a>
                </div>
            </div>
        </>
    )
};

VehicleCard.propTypes = {
    name: PropTypes.string
}

export default VehicleCard;