// import React from 'react'
// import { TbPasswordUser } from "react-icons/tb";
// import './InputsCss.css';


// function PasswordComponent() {
//   return (

//     <div className="inputs">
//       <div className="input">
//         <TbPasswordUser size={30} color="black"  style={{ marginRight: '8px' }} />
//         <input type="Password" placeholder="Password"  />
//       </div>
//     </div>
//   )
// }

// export default PasswordComponent

import React from 'react';
import { TbPasswordUser } from 'react-icons/tb';
import './InputsCss.css';

function PasswordComponent({ setPassword }) {
  const handlePasswordChange = (event) => {
    // Call the setPassword function from the parent component to update the password state
    setPassword(event.target.value);
  };

  return (
    <div className="inputs">
      <div className="input">
        <TbPasswordUser size={30} color="black" style={{ marginRight: '8px' }} />
        <input
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          // You may want to add a value prop if you want to make this a controlled component
          // value={password}
        />
      </div>
    </div>
  );
}

export default PasswordComponent;
