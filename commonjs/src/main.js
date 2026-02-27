const {getFullName, getProductLabel, productType} = require("./services/products")
const {devArea, client} = require("./services/config");

const database = require("./services/database");

async function main() {
    let valor = await getFullName(1, "nomeCompleto");
    console.log(valor);
    let valor2 = await getProductLabel("Namednfjks");
    console.log(valor2);

    console.log(productType.version, productType.tax);

    console.log(devArea.version, devArea.production);
    console.log(client.device);

    database.connectToDataBase();
    database.disconnectToDataBase();
}

main();