interface Product{
    id:number;
    name:string;
    price:number;
    inStock:boolean
}
function logProduct(product:Product):void{
    console.log(`product id = ${product.id} 
        product name = ${product.name} 
        product price = ${product.price}
        is product in stock = ${product.inStock}`);
}
type productOrError = Product | string;
function wrapValue<T>(value : T) : T[]{
    return [value];

}
interface ApiResult<T>{
    data : T;
    success:boolean;
    message: string
}

function printProductInfo( result : ApiResult<Product> ):void{
    if(result.success==true){
        console.log(result.data);
    }
    else{
        console.log(result.message);
    }


}