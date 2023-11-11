import "../styles/Login.css";

import { useNavigate } from 'react-router-dom';

export default function Login() {

let navigate = useNavigate();

    const goToTracker = () => {
navigate('/tracker');
    }

return (
<>
    <h1>Login</h1>
    <div className="button-container">
    <button onClick={goToTracker}>Login</button>
    </div>
    </>
)}


