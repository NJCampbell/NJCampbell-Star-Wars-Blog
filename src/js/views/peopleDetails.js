import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// import PropTypes from "prop-types";

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
                <div className="row ">
                    <div className="col-4">
                        <img src={
                            `https://starwars-visualguide.com/assets/img/characters/${parsedPersonId}.jpg`
                        }
                            className="card-image"
                            alt="..."
                            onError={
                                (e) => {
                                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
                                }
                            } />
                    </div>

                    <div className="col-8">
                        <h5 className="individualItemName">{
                            store.people[personId]?.name
                        } </h5>
                        <p className="individualItemLorem">Lorem ipsum cha sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet massa. Rhoncus dolor purus non enim praesent elementum facilisis leo. Ornare arcu odio ut sem nulla. Amet porttitor eget dolor morbi non arcu risus quis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Diam donec adipiscing tristique risus nec feugiat in fermentum. Purus gravida quis blandit turpis cursus in hac habitasse. Risus at ultrices mi tempus. Tincidunt vitae semper quis lectus nulla at. Ipsum faucibus vitae aliquet nec ullamcorper. Neque gravida in fermentum et sollicitudin ac orci. Pharetra pharetra massa massa ultricies mi.</p>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="footer-character">
                <h5 className="footer-captions">Gender:
                    <p className="individualItemInfo"> {
                        store.people[personId]?.gender
                    } </p>
                </h5>
                <h5 className="footer-captions">Height:
                    <p className="individualItemInfo"> {
                        store.people[personId]?.height
                    } </p>
                </h5>
                <h5 className="footer-captions">Skin_color:
                    <p className="individualItemInfo"> {
                        store.people[personId]?.skin_color
                    } </p>
                </h5>
                <h5 className="footer-captions">Eye_color:
                    <p className="individualItemInfo">{
                        store.people[personId]?.eye_color
                    } </p>
                </h5>
            </div>
        </>
    )
}
// PeopleDetails.propTypes = {
//     name: PropTypes.string
// };

export default PeopleDetails;

{/* <div className="indContainer">
<div className="card" style={{ width: "25rem" }}>
    <div className="row">
        <img className="card-img-top" src={
            `https://starwars-visualguide.com/assets/img/characters/${parsedPersonId}.jpg`
        } alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{store.people[personId]?.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="listDetails">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name: {store.people[personId]?.name}</li>
                    <li className="list-group-item">Birthyear: {store.people[personId]?.birthyear}</li>
                    <li className="list-group-item">Gender: {store.people[personId]?.gender}</li>
                    <li className="list-group-item">Height: {store.people[personId]?.height}cm</li>
                    <li className="list-group-item">Mass: {store.people[personId]?.mass}kg</li>
                    <li className="list-group-item">Skin Color: {store.people[personId]?.skin_color}</li>
                    <li className="list-group-item">Eye Color: {store.people[personId]?.eye_color}</li>

                </ul>
            </div>
        </div>
    </div>
</div>
<Link to="/">
    <button className="btn btn-primary">Back home</button>
</Link>
</div> */}