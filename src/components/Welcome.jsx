import { useNavigate } from "react-router-dom";
import "../App.css";
import fondo from "../assets/logo.png"; // ✅ IMPORTACIÓN CORRECTA

export default function Welcome() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/aislamiento");
    };

    return (
        <section className="container fade-in">

            {/* Imagen centrada */}
            <div className="welcome-image-container">
                <img src={fondo} alt="Fondo" className="welcome-image" />
            </div>

            <h1 className="welcome-title">Bienvenido(a)</h1>

            <p className="welcome-description">
                Antes de ingresar a la habitación, revisa las medidas de seguridad necesarias.
            </p>

            <button onClick={handleStart} className="btn">
                Iniciar
            </button>
        </section>
    );
}
