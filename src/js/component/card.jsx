import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Card = (props) => {
    const { store, actions } = useContext(Context)



    return (
        <>
            <div>
                <div className="card" style={{ width: "18rem;" }}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>            
        </>
    );
};

Card.proptypes = {
    name: PropTypes.string
}

export default Card;