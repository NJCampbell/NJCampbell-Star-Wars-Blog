const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchPeople: () => {
				fetch("https://swapi.dev/api/people")
					.then(response =>
						response.json())
					.then(data => {
						console.log(data.results[0].name);
						setStore({ people: data.results })
					})
			},
			fetchPlanets: async () => {
				const response = await fetch("https://swapi.dev/api/planets");
				let data = await response.json();
				console.log(data);
				setStore({ planets: data.results })
			},
			// fetchPlanets: () => {
			// 	fetch("https://swapi.dev/api/planets")
			// 	.then(response => 
			// 		response.json())
			// 	.then(data => {
			// 		console.log(data);
			// 		setStore({ planets: data})
			// 	})
			// },
			fetchVehicles: async () => {
				const response = await fetch("https://swapi.dev/api/vehicles");
				let data = await response.json();
				console.log(data);
				setStore({ vehicles: data.results })
			},
			// fetchVehicles: () => {
			// 	fetch("https://swapi.dev/api/vehicles")
			// 	.then(response => 
			// 		response.json())
			// 	.then(data => {
			// 		console.log(data);
			// 		setStore({ vehicles: data})
			// 	})
			// },

			initialLoading: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				getActions().fetchPeople();
				getActions().fetchPlanets();
				getActions().fetchVehicles();
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
