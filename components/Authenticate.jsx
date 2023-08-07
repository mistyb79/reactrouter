import { useState } from "react";

function Authenticate() {
    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    async function handleClick() {
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/signup",
                 {
                   method: "GET",
                   headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${token}`,
                   }   
                  }
               )
        } catch (error) {
            
        }
    }
    return (
    <div>
        <h2>Authenicate!</h2>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
    </div> 
    )
}

export default Authenticate;
