// import React, { useState } from 'react';
// import { useContext } from "react";
// import './AutocompleteSearchBar.css'; // Create a corresponding CSS file
// import { Context } from "../store/appContext";

// const SearchBar = () => {
//     const { store, actions } = useContext(Context);
//     const [prefix, setPrefix] = useState("");
//     const [suggestion, setSuggestion] = useState("");



    // const updateSuggestions = (input) => {
    //     const filtered = autocompleteData.filter(item =>
    //         item.toLowerCase().includes(input.toLowerCase())
    //     );
    //     setSuggestions(filtered);
    // };

//     const handleInputChange = (e) => {
//         const input = e.target.value;
//         setPrefix(input);
//         updateSuggestions(input);
//     };

//     const handleSuggestionClick = (suggestion) => {
//         setPrefix(suggestion);
//         setFilteredSuggestions("");
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             handleInputChange();
//             handleSuggestionClick();
//         }
//     }

//     return (
//         <div id="search-container">
//             <input
//                 type="text"
//                 name="search-bar"
//                 id="search-bar"
//                 placeholder="Search..."
//                 value={prefix}
//                 onChange={handleInputChange}
//                 onKeyDown={handleKeyDown}
//             />
//             <ul id="suggestions">
//                 {suggestion.map((suggestion, index) => (
//                     <li
//                         key={index}
//                         onClick={() => handleSuggestionClick(suggestion)}
//                     >
//                         {suggestion}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SearchBar;


 // const autocompleteData = [
    //     'Luke Skywalker',
    //     'C-3PO',
    //     'R2-D2',
    //     'Darth Vader',
    //     'Leia Organa',
    //     'Owen Lars',
    //     'Beru Whitesun lars',
    //     'R5-D4',
    //     'Biggs Darklighter',
    //     'Obi-Wan Kenobi',
    // ]