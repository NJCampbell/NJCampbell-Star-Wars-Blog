import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Card = (props) => {
    const { store, actions } = useContext(Context)




    return (
        <>
            {/* <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={""} alt="Card image cap"
                    // onError={(e) => {
                    //     e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                    // }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Something</p>
                        <a href="#" className="btn btn-primary">Learn More!</a>
                    </div>
                </div>
            </div> */}
        </>
    );
};

Card.proptypes = {
    name: PropTypes.string
}

export default Card;