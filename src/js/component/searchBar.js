import React, { useState } from 'react';
import { useContext } from "react";
// import './AutocompleteSearchBar.css'; // Create a corresponding CSS file
import { Context } from "../store/appContext";

const AutocompleteSearchBar = () => {
    const { store, actions } = useContext(Context);
    const [userInput, setUserInput] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    // const autocompleteData = [
    //     store.people,
    //     store.planets,
    //     store.vehicles
    // ]


    const autocompleteData = [
        'Luke Skywalker',
        'C-3PO',
        'R2-D2',
        'Darth Vader',
        'Leia Organa',
        'Owen Lars',
        'Beru Whitesun lars',
        'R5-D4',
        'Biggs Darklighter',
        'Obi-Wan Kenobi',
    ]

   

    const updateSuggestions = (input) => {
        const filtered = autocompleteData.filter(item =>
            item.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredSuggestions(filtered);
    };

    const handleInputChange = (event) => {
        const input = event.target.value;
        setUserInput(input);
        updateSuggestions(input);
    };

    const handleSuggestionClick = (suggestion) => {
        setUserInput(suggestion);
        setFilteredSuggestions([]);
    };

    return (
        <div id="search-container">
            <input
                type="text"
                id="search-input"
                placeholder="Search..."
                value={userInput}
                onChange={handleInputChange}
            />
            <ul id="suggestions">
                {filteredSuggestions.map((suggestion, index) => (
                    <li
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                    >
                        {suggestion}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AutocompleteSearchBar;
