 const sum= function( a , b){
    console.log(a+b)
}

const mul= function( a , b){
    console.log(a*b)
}

//  module.exports = {
//     fn1:sum,
//     fn2:mul,
//  };

const name = "Ajay";
console.log('Module 1 ........')
module.exports={
    sum , 
    mul,
    'name':name

}
