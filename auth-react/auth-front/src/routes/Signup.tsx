import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/constants";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthResponseError } from "../types/types";

export default function Signup() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");
    const [errorResponse, setErrorResponse] = useState("");

    const auth = useAuth();
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/signup`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name,
                    username,
                    password,
                }),
            });
        
            if (response.ok){
                console.log("El usuario se creo correctamente");
                setErrorResponse ("");
            }else{
                console.log("Error, algo ocurrio")
                const json = await response.json() as AuthResponseError;
                setErrorResponse(json.body.error);
                return;
            }
        }catch (error){
            console.log(error);

        }
    }

    if(auth.isAuthenticated){
        return <Navigate to= "/Dashboard" />
    }

    return (
        <DefaultLayout>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button>Crear Usuario</button>
            </form>
        </DefaultLayout>
        
            
    );
}