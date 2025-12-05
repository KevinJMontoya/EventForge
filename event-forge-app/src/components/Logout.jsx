import { useNavigate } from "react-router-dom";

export default function Logout() {
    const nav =  useNavigate();

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    
    window.location.href = "/login";
  
}
