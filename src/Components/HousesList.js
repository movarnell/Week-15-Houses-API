import React from 'react'
import { House } from './House';
import { housesApi } from '../rest/HousesApi';

export class HousesList extends React.Component {

        // Initialize component state with an empty array of houses
        state = {
                houses : []
        };

        // Fetch houses from the API when the component mounts
        componentDidMount() {
                this.fetchHouses();
        }

        // Fetch all houses from the API
        fetchHouses = async () => {
                const houses = await housesApi.get();
                this.setState({ houses });
        }

        // Update a house in the list of houses and refetch the updated list from the API
        updateHouse = async (updatedHouse) => {
                await housesApi.put(updatedHouse);
                this.fetchHouses();
        };

        render() {
                return (
                        <div className='house-list'>
                                {/* Map over the array of houses in state and render a House component for each */}
                                {this.state.houses.map((house) => (
                                        <House
                                        house = {house}
                                        key = {house._id}
                                        updateHouse = {this.updateHouse}
                                        />
                                ))}
                        </div>
                )
        }
};


// BELOW IS THE FUNCTION FORMAT OF THE ABOVE CODE 
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

// import React, { useState, useEffect } from 'react';
// import { House } from './House';
// import { housesApi } from '../rest/HousesApi';

// export const HousesList = () => {
//   // Initialize component state with an empty array of houses
//   const [houses, setHouses] = useState([]);

//   // Fetch houses from the API when the component mounts
//   useEffect(() => {
//     fetchHouses();
//   }, []);

//   // Fetch all houses from the API
//   const fetchHouses = async () => {
//     try {
//       const housesData = await housesApi.get();
//       setHouses(housesData);
//     } catch (e) {
//       console.log('Oops, looks like fetchHouses had an issue.', e);
//     }
//   }

//   // Update a house in the list of houses and refetch the updated list from the API
//   const updateHouse = async (updatedHouse) => {
//     try {
//       await housesApi.put(updatedHouse);
//       fetchHouses();
//     } catch (e) {
//       console.log('Oops, looks like updating houses had an issue.', e);
//     }
//   };

//   return (
//     <div className='house-list'>
//       {/* Map over the array of houses in state and render a House component for each */}
//       {houses.map((house) => (
//         <House
//           house={house}
//           key={house._id}
//           updateHouse={updateHouse}
//         />
//       ))}
//     </div>
//   );
// };
// // 