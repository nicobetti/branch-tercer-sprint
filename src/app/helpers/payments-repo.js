import fs from "fs"
import payments from "../db/payments.json"

const paymentsRepo = {
    getAll : () => payments,
    create,
}

function create(payment) {
    // generate new payment id
    payment.id = payments.length ? Math.max(...payments.map(x => x.id)) + 1 : 1;

    // set date created 
    payment.fecha = new Date().toISOString();

    // add and save payment
    payments.push(payment);
    saveData();
}

function saveData() {
    fs.writeFileSync("../db/transfers.json", JSON.stringify(payments, null, 2));
}

export default paymentsRepo