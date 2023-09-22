"use client"

import "../css/NewTransfer.css"
import Form from "react-bootstrap/Form"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
// import transfersRepo from "../helpers/transfers-repo";

 

export default function NewTransfer() {
    const [destinatario, setDestinatario] = useState("CBU")
    const [origen, setOrigen] = useState("Caja de ahorro ARS")
    const [motivo, setMotivo] = useState("")
    const [monto, setMonto] = useState("")
    const [referencia, setReferencia] = useState("")

/*     const nuevaTransfer =  {
        method: 'POST',
        body: {
            origen: {origen},
            destinatario: {destinatario},
            monto: {monto},
            motivo: {motivo},
            referencia: {referencia}
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
    } 
    
    const handleSubmit = () => {
        transfersRepo.create(nuevaTransfer)
    } */
    return (
        <>
            <Header></Header>
            <div className="principal">
                <Navbar></Navbar>
                <div className="contenedor-form">
                    <h1> Nueva transferencia</h1>
                    <Form  className="formulario-transfer">
                        <div className="destinatario-wrapper">
                            <label htmlFor="destinatario">Destinatario:</label>
                            <Form.Select name="identificacion" id="identificacion" value={destinatario} onChange={e => setDestinatario(e.target.value)}>
                                <option value="CBU">CBU</option>
                                <option value="Alias">Alias</option>
                            </Form.Select>
                            <Form.Control type="text" name="destinatario" id="destinatario" placeholder={destinatario} />
                        </div>
                        <div>
                            <label htmlFor="origen">Cuenta de origen:</label>
                            <Form.Select name="origen" id="origen" value={origen} onChange={e => setOrigen(e.target.value)}>
                                <option value="Caja de ahorro ARS">CA $ARS 000215684156</option>
                                <option value="Caja de ahorro USD">CA $USD 000215684157</option>
                            </Form.Select>
                        </div>
                        <div>
                            <label htmlFor="monto">Monto:</label>
                            <Form.Control type="number" id="monto" name="monto" value={monto} onChange={e => setMonto(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="motivo">Motivo:</label>
                            <Form.Select name="motivo" id="motivo" value={motivo} onChange={e => setMotivo(e.target.value)}>
                                <option value="alquiler">Alquiler</option>
                                <option value="expensas">Expensas</option>
                                <option value="facturas">Facturas</option>
                                <option value="prestamo">Préstamo</option>
                                <option value="seguro">Seguro</option>
                                <option value="varios">Varios</option>
                            </Form.Select>
                        </div>
                        <div>
                            <label htmlFor="referencia">Referencia:</label>
                            <Form.Control type="text" id="referencia" name="referencia" value={referencia} onChange={e => setReferencia(e.target.value)} />
                        </div>
                        <button className="boton-transferencia" >Enviar</button>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}