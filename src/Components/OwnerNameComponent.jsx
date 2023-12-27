// import React from 'react'
// import { IoPersonSharp } from "react-icons/io5";
// import './InputsCss.css';


// function OwnerNameComponent() {
//   return (
   
//     <div className="inputs">
//       <div className="input">
//         <IoPersonSharp size={30} color="black"  style={{ marginRight: '8px' }} />
//         <input type="Text" placeholder="Owner name" />
//       </div>
//       </div>

//   )
// }

// export default OwnerNameComponent

import React from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import './InputsCss.css';

function OwnerNameComponent({ setOwnerName }) {
  const handleOwnerNameChange = (event) => {
    // Call the setOwnerName function from the parent component to update the state
    setOwnerName(event.target.value);
  };

  return (
    <div className="inputs">
      <div className="input">
        <IoPersonSharp size={30} color="black" style={{ marginRight: '8px' }} />
        <input
          type="text"
          placeholder="Owner Name"
          onChange={handleOwnerNameChange}
          // You may want to add a value prop if you want to make this a controlled component
          // value={ownerName}
        />
      </div>
    </div>
  );
}

export default OwnerNameComponent;
