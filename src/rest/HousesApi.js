// Define a constant that holds the URL of the API endpoint for houses
const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

// Define a class that encapsulates API calls for houses
class HousesApi {
        // Define a method to get all houses from the API
        get = async () => {
                try {
                        // Send a GET request to the houses API endpoint
                        const resp = await fetch(HOUSES_ENDPOINT);
                        // Parse the response as JSON data
                        const data = await resp.json();
                        // Return the parsed data
                        return data;
                } catch(e) {
                        // If an error occurs, log it to the console
                        console.log('Oops, looks like fetchHouses had an issue.', e);
                }
        }

        // Define a method to update a single house in the API
        put = async (house) => {
                try{    
                        // Send a PUT request to the houses API endpoint, specifying the house ID in the URL
                        const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                                method: 'PUT',
                                headers: {
                                        'Content-Type': 'application/json'
                                },
                                // Convert the house object to a JSON string and include it in the request body
                                body: JSON.stringify(house)
                        });
                        // Parse the response as JSON data
                        return await resp.json();
                } catch(e) {
                        // If an error occurs, log it to the console
                        console.log('Oops, looks like updating houses had an issue.', e);
                }  
        }
}

// Create an instance of the HousesApi class and export it as a named export
export const housesApi = new HousesApi();
