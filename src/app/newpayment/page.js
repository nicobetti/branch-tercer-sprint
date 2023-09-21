"use client"

import "../css/NewTransfer.css"
import Form from "react-bootstrap/Form"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function NewPayment() {
    const [rubro, setRubro] = useState("")
    const [beneficiario, setBeneficiario] = useState("")
    const [medio, setMedio] = useState("Débito")
    const [importe, setImporte] = useState("")

    return (
        <>
            <Header></Header>
            <div className="principal">
                <Navbar></Navbar>
                <div className="contenedor-form">
                    <h1> Pagar factura </h1>
                    <Form action="" method="POST" className="formulario-transfer">
                        <div>
                            <label htmlFor="rubro">Rubro:</label>
                            <Form.Select name="rubro" value={rubro} onChange={e => setRubro(e.target.value)}>
                                <option value="Servicios">Servicios</option>
                                <option value="Educación">Educación</option>
                                <option value="Salud">Salud</option>
                                <option value="Préstamo">Préstamo</option>
                                <option value="Seguro">Seguro</option>
                                <option value="Varios">Varios</option>
                            </Form.Select>
                        </div>
                        <div>
                            <label htmlFor="beneficiario">Beneficiario:</label>
                            <Form.Control type="text" name="beneficiario" value={beneficiario} onChange={e => setBeneficiario(e.target.value)}
                            placeholder="Nombre del comercio, empresa" />
                        </div>
                        <div>
                            <label htmlFor="medio">Medio de pago:</label>
                            <Form.Select name="medio" value={medio} onChange={e => setMedio(e.target.value)}>
                                <option value="Débito">Débito</option>
                                <option value="Crédito">Crédito</option>
                            </Form.Select>
                        </div>
                        <div>
                            <label htmlFor="importe">Importe:</label>
                            <Form.Control type="number" name="importe" value={importe} onChange={e => setImporte(e.target.value)} />
                        </div>
                        <button className="boton-transferencia">Enviar</button>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}