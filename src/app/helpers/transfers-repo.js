import fs from "fs"
import transfers from "../db/transfers.json"

const transfersRepo = {
    getAll : () => transfers,
    create,
}

function create(transfer) {
    // generate new transfer id
    transfer.id = transfers.length ? Math.max(...transfers.map(x => x.id)) + 1 : 1;

    // set date created 
    transfer.fecha = new Date().toISOString();

    // add and save transfer
    transfers.push(transfer);
    saveData();
}

function saveData() {
    fs.writeFileSync("../db/transfers.json", JSON.stringify(transfers, null, 2));
}

export default transfersRepo