import { useState } from "react";
import Button from 'react-bootstrap/Button';
function Authenticate ({ token }) {
   const [successMessage, setSuccessMessage] = useState(null);
   const [error, setError] = useState(null);
   
   async function handleClick() {
      try {
         const response = await fetch(
            "https://fsa-jwt-practice.herokuapp.com/authenticate",
             {
               method: "GET",
               headers: {
                 "Content-Type": "application/json",
                 Authorization: `Bearer ${token}`,
               }   
              }
           );
           const result = await response.json();
           setSuccessMessage(result.message);
           console.log(result.data.username);
      } catch (error) {
        setError(error.message); 
      }
   }
   return (
      <>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <Button onClick={handleClick} variant="success">Authenticate Token!</Button>{' '}
      </>
   );
}
export default Authenticate

