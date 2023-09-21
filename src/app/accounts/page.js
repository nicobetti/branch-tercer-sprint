import "../css/Accounts.css"
import Link from 'next/link'
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Accounts() {
    return (
        <>
            <Header></Header>
            <div className="principal">
            <Navbar></Navbar>
            <div className="container-m m-3 contenedor-cuentas" >
                <div className="container p-2 bg-secondary text-white cada-cuenta">
                    <h4 >Caja de Ahorro en $ARS</h4>
                    <p>Saldo: $***</p>
                    <p>CBU: 000215684156</p>
                    <Link href="" className="btn btn-primary">Ver detalle</Link>
                </div>
                <div className="container p-2 bg-secondary text-white cada-cuenta">
                    <h4 >Caja de Ahorro en $USD</h4>
                    <p>Saldo: $***</p>
                    <p>CBU: 000223627091</p>
                    <Link href="" className="btn btn-primary">Ver detalle</Link>
                </div>
                <div className="container p-2 bg-secondary text-white cada-cuenta">
                    <h4 >Tarjeta terminada en 8004</h4>
                    <p>Saldo: $***</p>
                    <p>Vencimiento: 07/11</p>
                    <Link href="" className="btn btn-primary">Ver detalle</Link>
                </div>
                <div className="container p-2 bg-secondary text-white cada-cuenta">
                    <h4 >Tarjeta terminada en 4256</h4>
                    <p>Saldo: $***</p>
                    <p>Vencimiento: 09/11</p>
                    <Link href="" className="btn btn-primary">Ver detalle</Link>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
        
    )
}