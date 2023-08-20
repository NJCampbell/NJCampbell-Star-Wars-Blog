const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			peopleDetails: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchPeople: async () => {
				const response = await fetch("https://swapi.dev/api/people");
				let data = await response.json();
				console.log(data);
				setStore({ people: data.results })
			},
			fetchPlanets: async () => {
				const response = await fetch("https://swapi.dev/api/planets");
				let data = await response.json();
				console.log(data);
				setStore({ planets: data.results })
			},
			fetchVehicles: async () => {
				const response = await fetch("https://swapi.dev/api/vehicles");
				let data = await response.json();
				console.log(data);
				setStore({ vehicles: data.results })
			},
			// fetchIndividualPerson: (index) => {
			// 	fetch("https://www.swapi.tech/api/people/" + index)
			// 		.then(response => {
			// 			if (!response) throw Error(response.statusText);
			// 			return response.json();
			// 		})
			// 		.then(data => {
			// 			let newPeopleArr = [...newPeopleArr, data.result.properties];
			// 			console.log(data);
			// 			setStore({ peopleDetails: newPeopleArr })
			// 		})
			// 		.catch(error => console.log("ERROR MESSAGE @ fetchIndividualPerson()", error))
			// },
			// fetchIndividualPerson: async (index) => {
			// 	const response = await fetch("https://swapi.dev/api/people/" + index);
			// 	let data = await response.json();
			// 	.then(data => {
			// 					newPersonArray = [...newPersonArray, data.result.properties];
			// 					setStore({ peopleDetails: newPeopleArr })
			// 				})
			// 	console.log(data);
			// 	setStore({ personDetails: newPersonArray })
			// },




			initialLoading: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				getActions().fetchPeople();
				getActions().fetchPlanets();
				getActions().fetchVehicles();
				// getActions().fetchIndividualPerson();
			},
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
