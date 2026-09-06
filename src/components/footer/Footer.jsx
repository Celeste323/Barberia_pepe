import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-dark text-light py-4 mt-auto w-100">
                <div className="container-fluid">
                    <div className="row text-center">
                        {/* Columna izquierda */}
                        <div className="col-md-4 mb-2">
                            <p style={{ color: "#d4af37" }}>© 2026 |  Barbería Clase A</p>
                        </div>

                        {/* Columna central */}
                        <div className="col-md-4 mb-2">
                            <p style={{ color: "#d4af37" }}>Nuestra Direccion Barcarse 1100</p>
                        </div>

                        {/* Columna derecha */}
                        <div className="col-md-4 mb-2">
                            <p style={{ color: "#d4af37" }}>A tu servicio (0387) 2464676</p>
                        </div>
                    </div>

                        {/* Línea dorada superior opcional */}
                        <hr style={{ borderTop: "2px solid #d4af37", opacity: "1" }} />

                        {/* Íconos de redes sociales */}
                    <div className="d-flex justify-content-center gap-4 mt-3">
                        <a href="#facebook" style={{ color: "#d4af37" }}>
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#instagram" style={{ color: "#d4af37" }}>
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#whatsapp" style={{ color: "#d4af37" }}>
                            <i className="bi bi-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
