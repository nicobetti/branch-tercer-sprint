import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"
import transferencias from "@/app/db/transfersdb"
import style from "./page.module.css"


export default function TransferDetail({params}){
    
    const transfers = transferencias

    const selectedTransfer = transfers.filter((transfer) => {
      if(transfer.id == params.id) 
       return transfer
    })
    return (
        <>
            <Header></Header>
            <div className="principal">
            <Navbar></Navbar>
            <div className={style.detalle}>
            <h1> Detalle de la transferencia {params.id}</h1>
                <ul className={style.lista}>
                    <li>Transferencia número: {selectedTransfer[0].id}</li>
                    <li>Fecha: {selectedTransfer[0].fecha}</li>
                    <li>Origen: {selectedTransfer[0].origen}</li>
                    <li>Destinatario: {selectedTransfer[0].destinatario}</li>
                    <li>Monto: ${selectedTransfer[0].monto}</li>
                    <li>Motivo: {selectedTransfer[0].motivo}</li>
                    <li>Referencia: {selectedTransfer[0].referencia == "" ? "No se incluyó una referencia" : selectedTransfer[0].referencia}</li>
                </ul>
            </div>
            </div>
            <Footer></Footer>
        </>
    )
}