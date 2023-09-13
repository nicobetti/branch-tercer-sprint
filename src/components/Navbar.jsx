import "../css/Navbar.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className="menu-desplegado">
                <ul className="lista">
                     <li><Link to="/"><i className="fa-solid fa-house"></i> Inicio</Link></li>
                    <li><Link to="/accounts"><i className="fa-solid fa-credit-card"></i> Cuentas</Link></li>
                    <li><Link to="/payments"><i className="fa-solid fa-receipt"></i> Pagos</Link></li>
                    <li><Button id="transfer-collapse-button"
                        onClick={() => setOpen(!open)}
                        aria-controls="opciones-transferencia"
                        aria-expanded={open}><i className="fa-solid fa-arrow-right-arrow-left"></i> Transferencias
                        </Button></li>
                    <Collapse in={open}>
                        <div id="opciones-transferencias">
                            <div><Link to="/transfers">Comprobantes</Link></div>
                            <div><Link to="/newtransfer">Nueva transferencia</Link></div>
                        </div>
                    </Collapse>
                    <li><Link to="/conversor"><i className="fa-solid fa-dollar-sign"></i> Conversor</Link></li>
                    <li><Link to="/loansimulator"><i className="fa-solid fa-piggy-bank"></i> Préstamos</Link></li>
                </ul>
            </nav >
        </>
    )
}

