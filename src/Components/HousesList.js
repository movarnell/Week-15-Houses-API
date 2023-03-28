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
