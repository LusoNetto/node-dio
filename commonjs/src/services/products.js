// todas as funcoes de produtos

const productType = {
    version: "digital",
    tax: "x1"
}

const apiURL = {
    url: "https://url.com.br"
};

async function getFullName(codeId, productName) {
    return await doBreakLine() + await doBreakLine() + codeId + "--" + productName;
}

async function doBreakLine(){
    return "\n";
}

async function getProductLabel(productName) {
    return productName;
}

module.exports = {getFullName, getProductLabel, productType};