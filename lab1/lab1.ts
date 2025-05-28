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

//============================================================================
//usage

const p :Product={
    id:1,
    name:"laptop",
    price:10000,
    inStock:true
}
logProduct(p);


let pOrE:productOrError;
pOrE= p ;
if(typeof(p) == typeof(pOrE)){
    console.log("p is productOrError");
}

const num = wrapValue<number>(5);
console.log(num);

const apiProduct: ApiResult<Product>={
    data:p,
    success:true,
    message:"succesful"
}
printProductInfo(apiProduct);
