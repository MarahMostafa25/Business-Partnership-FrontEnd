// import React from 'react'
// import { FaBuilding } from "react-icons/fa";
// import './InputsCss.css';

// function CompanyNameComponent() {
//   return (
 
//     <div className="inputs">
//       <div className="input">
//       <FaBuilding size={30} color="black"  style={{ marginRight: '8px' }} />
//         <input type="text" placeholder="Company Name" />
//       </div>
//       </div>

//   )
// }

// export default CompanyNameComponent

import React from 'react';
import { FaBuilding } from 'react-icons/fa';
import './InputsCss.css';

function CompanyNameComponent({ setCompanyName }) {
  const handleCompanyNameChange = (event) => {
    // Call the setCompanyName function from the parent component to update the state
    setCompanyName(event.target.value);
  };

  return (
    <div className="inputs">
      <div className="input">
        <FaBuilding size={30} color="black" style={{ marginRight: '8px' }} />
        <input
          type="text"
          placeholder="Company Name"
          onChange={handleCompanyNameChange}
          // You may want to add a value prop if you want to make this a controlled component
          // value={companyName}
        />
      </div>
    </div>
  );
}

export default CompanyNameComponent;
