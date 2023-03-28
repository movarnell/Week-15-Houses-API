import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
        // Destructure the 'house' and 'updateHouse' props from the parent component
        const { house, updateHouse } = props; 

        // Define a function to delete a room from the house object
        const deleteRoom = (roomId) => {
                // Create a new object that contains all the properties of the 'house' object,
                // except for the room with the specified 'roomId'
                const updatedHouse = {
                        ...house, 
                        rooms: house.rooms.filter((x) => x._id !== roomId)
                };
                // Update the 'house' object in the parent component's state with the new object
                updateHouse(updatedHouse);
        }

        // Define a function to add a new room to the house object
        const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room] })
        
        // Define a function to render the list of rooms in the house object
        const rooms = () => (
                <ul>
                        {house.rooms.map((room, index) => (
                                <li key={index}>
                                        <label> {`${room.name} area: ${room.area}`}
                                        </label>
                                        <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
                                </li>
                        ))}
                </ul>
        );

        return (
                <div>
                        {/* Render the name of the house */}
                        <h1>{house.name}</h1>
                        {/* Render the list of rooms */}
                        {rooms()}
                        {/* Render a form to add a new room */}
                        <NewRoomForm addNewRoom={addNewRoom} />
                </div>
        );

};


// FUNCTION FORMAT SHOWN BELOW
//VVVVVVVVVVVVVVVVVVVVVVVVVV

// function House(props) {
//         const { house, updateHouse } = props;
        
//         function deleteRoom(roomId) {
//         const updatedHouse = {
//         ...house,
//         rooms: house.rooms.filter((x) => x._id !== roomId)
//         };
//         updateHouse(updatedHouse);
//         }
        
//         function addNewRoom(room) {
//         updateHouse({ ...house, rooms: [...house.rooms, room] });
//         }
        
//         function rooms() {
//         return (
//         <ul>
//         {house.rooms.map((room, index) => (
//         <li key={index}>
//         <label>
//         {${room.name} area: ${room.area}}
//         </label>
//         <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
//         </li>
//         ))}
//         </ul>
//         );
//         }
        
//         return (
//         <div>
//         <h1>{house.name}</h1>
//         {rooms()}
//         <NewRoomForm addNewRoom={addNewRoom} />
//         </div>
//         );
//         }
        
//         export { House };