import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"
import pagos from "@/app/db/paymentsdb"
import style from "./page.module.css"


export default function TransferDetail({params}){
    
    const payments = pagos

    const selectedPayment = payments.filter((payment) => {
      if(payment.id == params.id) 
       return payment
    })
    return (
        <>
            <Header></Header>
            <div className="principal">
            <Navbar></Navbar>
            <div className={style.detalle}>
            <h1> Detalle del pago {params.id}</h1>
                <ul className={style.lista}>
                    <li>Pago número: {selectedPayment[0].id}</li>
                    <li>Fecha: {selectedPayment[0].fecha}</li>
                    <li>Medio: {selectedPayment[0].medio}</li>
                    <li>Rubro: {selectedPayment[0].rubro}</li>
                    <li>Beneficiario: {selectedPayment[0].beneficiario}</li>
                    <li>Importe: ${selectedPayment[0].importe}</li>
                </ul>
            </div>
            </div>
            <Footer></Footer>
        </>
    )
}