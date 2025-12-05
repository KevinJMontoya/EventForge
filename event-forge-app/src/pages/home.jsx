import { useNavigate } from "react-router-dom";
//import '../styling/Home.css' 

export default function HomePage() {
    const nav = useNavigate();

    function redirect(path) {
            const navigate = useNavigate();
            navigate(path);
    }

    const myStyle = {
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "24px",

        backgroundImage: `url(${'./assets/rooftopImage.jpg'})`,
        backgroundSize: 'coverPage',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        color: '#fff',
    };

    const yes=1;

    const handleLoginClick = () => {
        nav('/login');
    };

    const handleRegisterClick = () => {
        nav('/register');

    }; 


    return (
            <div className='App' style={{myStyle }}>

                <div className="card" style={{ maxWidth: 720, margin: "48px auto", padding: 24, border: "1px solid #e6e6e6", borderRadius: 8 }}>  
                    <h1>Welcome to EventForge! </h1>
                    <h2>Your gateway to unforgettable events.</h2>

                    <button className="loginButton" onClick={handleLoginClick}>Login</button>
                    <span> </span>
                    <button className="registerButton" onClick={handleRegisterClick}>Register</button>
                </div>
            </div>

  );
}
