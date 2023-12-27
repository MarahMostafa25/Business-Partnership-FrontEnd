// import React from 'react'
// import { TbPasswordUser } from "react-icons/tb";
// import './InputsCss.css';


// function ConfirmPasswordComponent() {
//   return (

//     <div className="inputs">
//       <div className="input">
//         <TbPasswordUser size={30} color="black"  style={{ marginRight: '8px' }} />
//         <input type="Password" placeholder=" Confrim Password" />
//       </div>
//     </div>
//   )
// }

// export default ConfirmPasswordComponent

import React from 'react';
import { TbPasswordUser } from 'react-icons/tb';
import './InputsCss.css';

function ConfirmPasswordComponent({ setConfirmPassword }) {
  const handleConfirmPasswordChange = (event) => {
    // Call the setConfirmPassword function from the parent component to update the state
    setConfirmPassword(event.target.value);
  };

  return (
    <div className="inputs">
      <div className="input">
        <TbPasswordUser size={30} color="black" style={{ marginRight: '8px' }} />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={handleConfirmPasswordChange}
          // You may want to add a value prop if you want to make this a controlled component
          // value={confirmPassword}
        />
      </div>
    </div>
  );
}

export default ConfirmPasswordComponent;
