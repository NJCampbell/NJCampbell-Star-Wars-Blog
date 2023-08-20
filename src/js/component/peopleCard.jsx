import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";



const PeopleCard = (props) => {
    const { store, actions } = useContext(Context)




    return (


        <>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={props.img} alt="Card image cap"
                    onError={(e) => { e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Gender: {props.gender}</p>
                    <p className="card-text">Hair color: {props.hairColor}</p>
                    <p className="card-text">Eye color: {props.eyeColor}</p>
                    <Link to="/demo">
                        <button className="btn btn-primary">Learn more!</button>
                    </Link>
                    <a href="#" className="btn">❤️</a>
                </div>
            </div>
        </>

    )
};

PeopleCard.propTypes = {
    name: PropTypes.string
};

export default PeopleCard;