import React, { useState } from 'react';

export const NewRoomForm = (props) => {
        // State variables for name and area of the new room
        const [name, setName] = useState('');
        const [area, setArea] = useState(undefined);

        // Event handler for area input that parses the input and updates the state
        const handleAreaInput = (e) => {
                const int = parseInt(e.target.value, 10);
                setArea(int >=0 ? int : '');
        }

        // Event handler for form submission that calls addNewRoom function if input is valid
        const onSubmit = (e) => {
                e.preventDefault();
                if (name && area) {
                        props.addNewRoom({name, area});
                        setName('');
                        setArea('');
                }       else {
                        console.log('invalid input');
                        }
                };
                return (
                        <div>
                                <h4>Add a new room</h4>
                                <form onSubmit={onSubmit}>
                                        <input
                                        type='text'
                                        placeholder='name'
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        />
                                        <input 
                                        type='text'
                                        placeholder='area'
                                        onChange={handleAreaInput}
                                        value={area}
                                        />
                                        <button type='submit'>Add Room</button>
                                </form>
                        </div>
                )
        };

// BELOW IS THE FUNCTION FORMAT FOR THE ABOVE CODE
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

//         import React, { useState } from 'react';

// export function NewRoomForm(props) {
//   // State variables for name and area of the new room
//   const [name, setName] = useState('');
//   const [area, setArea] = useState(undefined);

//   // Event handler for area input that parses the input and updates the state
//   const handleAreaInput = (e) => {
//     const int = parseInt(e.target.value, 10);
//     setArea(int >= 0 ? int : '');
//   }

//   // Event handler for form submission that calls addNewRoom function if input is valid
//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (name && area) {
//       props.addNewRoom({name, area});
//       setName('');
//       setArea('');
//     } else {
//       console.log('invalid input');
//     }
//   };
  
//   return (
//     <div>
//       <h4>Add a new room</h4>
//       <form onSubmit={onSubmit}>
//         <input
//           type='text'
//           placeholder='name'
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//         />
//         <input 
//           type='text'
//           placeholder='area'
//           onChange={handleAreaInput}
//           value={area}
//         />
//         <button type='submit'>Add Room</button>
//       </form>
//     </div>
//   );
// }
