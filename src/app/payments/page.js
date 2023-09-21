import style from "../css/Payments.module.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PaymentTableRow from "../components/PaymentTableRow";
import pagos from "../db/paymentsdb"


export default function Payments() {
    const payments = pagos

    return (
        <>
            <Header></Header>
            <div className="principal">
            <Navbar></Navbar>
            <div className="container-lg mt-3 tabla-bootstrap" id={style.pagos}>
                <h2>Pagos realizados</h2>
                <p><strong>ATENCION:</strong> Algunos pagos pueden demorar hasta 24hs en verse reflejados.</p>
                <table className="table table-hover" id={style.tablaPago}>
                    <thead className="table-dark">
                        <tr>
                            <th>Fecha</th>
                            <th className="oculto">Medio de pago</th>
                            <th className="oculto">Beneficiario</th>
                            <th>Importe</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                    {payments.map((payment) => {
                                return <PaymentTableRow key={payment.id} id={payment.id} fecha={payment.fecha} medio={payment.medio}  
                                beneficiario={payment.beneficiario} importe={payment.importe}></PaymentTableRow>
                            })}
                    </tbody>
                </table>
            </div>
        </div>
        <Footer></Footer>
        </>
        
    )
}