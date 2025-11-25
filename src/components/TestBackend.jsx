// src/components/TestBackend.jsx
import { useEffect, useState } from "react";

export default function TestBackend() {
    const [status, setStatus] = useState({
        data: null,
        error: null,
        loading: true,
    });

    useEffect(() => {
        const fetchBackendStatus = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/test");
                const result = await response.json();

                setStatus({
                    data: result.message,
                    error: null,
                    loading: false,
                });
            } catch {
                setStatus({
                    data: null,
                    error: "❌ No se pudo conectar con el backend",
                    loading: false,
                });
            }
        };

        fetchBackendStatus();
    }, []);

    const { data, error, loading } = status;

    return (
        <section className="test-backend-container">
            <h1 className="title">🔍 Prueba de conexión con Backend</h1>

            {loading && <p>Conectando...</p>}
            {data && <p className="success">{data}</p>}
            {error && <p className="error">{error}</p>}
        </section>
    );
}
