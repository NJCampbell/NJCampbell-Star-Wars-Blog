import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/index.css";

const PeopleDetails = () => {
    const { store, actions } = useContext(Context);
    const { personId } = useParams();
    const parsedPersonId = parseInt(personId) + 1;

    useEffect(() => {
        actions.fetchPersonDetails(parsedPersonId);
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${parsedPersonId}.jpg`}
                            className="cardImage"
                            alt="..."
                            onError={
                                (e) => {
                                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
                                }
                            } />
                    </div>
                    <div className="col-9" id="lorem">
                    <div className="detailsContainer">
                        <h1>{store.people[personId]?.name}</h1>
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
                    

                    </div>

                </div>
                <div className="detailedInfo">
                    <ul className="row">
                        <li className="col">Name: {store.people[personId]?.name}</li>
                        <li className="col">Birthyear: {store.people[personId]?.birth_year}</li>
                        <li className="col">Gender: {store.people[personId]?.gender}</li>
                        <li className="col">Height: {store.people[personId]?.height}cm</li>
                        <li className="col">Mass: {store.people[personId]?.mass}kg</li>
                        <li className="col">Skin Color: {store.people[personId]?.skin_color}</li>
                        <li className="col">Eye Color: {store.people[personId]?.eye_color}</li>

                    </ul>
                </div>
                

            </div>


        </>
    )
}

export default PeopleDetails;

