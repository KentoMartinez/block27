import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function SignUpForm({ setToken }) {
   const [username, setUsername] = useState ("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(null);
   
   async function handleSubmit(event) {
      event.preventDefault();
      
      try { 
         const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          }); 
         const result = await response.json();
         setToken(result.token);
         console.log(result);
      } catch (error) {
         setError (error.message);
      }
    }
   return (
      <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="Username" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
   );
}
export default SignUpForm
