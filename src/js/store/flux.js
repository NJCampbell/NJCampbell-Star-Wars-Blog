const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			personDetails: {},
			planetDetails: {},
			vehicleDetails: {},
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
			fetchPersonDetails: async (personId) => {
				const response = await fetch(`https://swapi.dev/api/people/${personId}`);
				let personData = await response.json();
				console.log(personData);
				getActions().updatePersonDetails({ data: personData });

			},
			updatePersonDetails: (personData) => {
				const store = getStore();
				setStore({ ...store, personDetails: personData });
			},
			fetchPlanetDetails: async (planetId) => {
				const response = await fetch(`https://swapi.dev/api/people/${planetId}`);
				let planetData = await response.json();
				console.log(planetData);
				getActions().updatePlanetDetails();

			},
			updatePlanetDetails: (planetData) => {
				const store = getStore();
				setStore({ ...store, planetDetails: planetData });
			},
			fetchVehicleDetails: async (vehicleId) => {
				const response = await fetch(`https://swapi.dev/api/people/${vehicleId}`);
				let vehicleData = await response.json();
				console.log(vehicleData);
				getActions().updateVehicleDetails();

			},
			updateVehicleDetails: (vehicleData) => {
				const store = getStore();
				setStore({ ...store, vehicleDetails: vehicleData });
			},






			initialLoading: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				getActions().fetchPeople();
				getActions().fetchPlanets();
				getActions().fetchVehicles();
				getActions().fetchPersonDetails();
				getActions().fetchPlanetDetails();
				getActions().fetchVehicleDetails();

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

