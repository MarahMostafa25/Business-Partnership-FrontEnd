// import React from 'react';
// import { MdEmail } from 'react-icons/md';

// function EmailComponent() {
//   return (
//     <div className="input">
//       {/* Use MdEmail as a React component */}
//       <MdEmail size={20} color="gray" />
//       <input
//         type="email"
//         placeholder="Email"
      
//       />
//     </div>
//   );
// }

// export default EmailComponent;


import React from 'react';
import { MdEmail } from 'react-icons/md';

function EmailComponent({ setEmail }) {
  const handleEmailChange = (event) => {
    // Call the setEmail function from the parent component to update the email state
    setEmail(event.target.value);
  };

  return (
    <div className="input">
      {/* Use MdEmail as a React component */}
      <MdEmail size={20} color="gray" />
      <input
        type="email"
        placeholder="Email"
        onChange={handleEmailChange}
        // You may want to add a value prop if you want to make this a controlled component
        // value={email}
      />
    </div>
  );
}

export default EmailComponent;

