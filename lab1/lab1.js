function logProduct(product) {
    console.log("product id = ".concat(product.id, " \n        product name = ").concat(product.name, " \n        product price = ").concat(product.price, "\n        is product in stock = ").concat(product.inStock));
}
function wrapValue(value) {
    return [value];
}
function printProductInfo(result) {
    if (result.success == true) {
        console.log(result.data);
    }
    else {
        console.log(result.message);
    }
}
//============================================================================
//usage
var p = {
    id: 1,
    name: "laptop",
    price: 10000,
    inStock: true
};
logProduct(p);
var pOrE;
pOrE = p;
if (typeof (p) == typeof (pOrE)) {
    console.log("p is productOrError");
}
var num = wrapValue(5);
console.log(num);
var apiProduct = {
    data: p,
    success: true,
    message: "succesful"
};
printProductInfo(apiProduct);
