// console.log('hello')
// setTimeout(()=>{
//     console.log('Timeout....')}, 1000);
// console.log('End')

// setTimeout(()=>{
//     console.log('Timeout1....')}, 15000);
// console.log('hello')
// setTimeout(()=>{
//     console.log('Timeout2....')}, 10000);
//     console.log("Intermidate")
// console.log('End')


// --------- Why we use Promises--------
// function createOrder(x ,fn){

//     console.log(x);
//   setTimeout(()=> { fn('lik123')},1000);
//   setTimeout(()=> { fn('lik123')},1000);
// }
// function makePayment(orderID){
//     console.log(orderID);

// }
//  createOrder('Soap',makePayment);




 //-------Create Own Promise---------

//  setTimeout(()=>{
//     console.log('First timeout....')
//  },0);

//  const pr=new Promise((resolve ,reject)=>{
//     setTimeout(()=>{reject("Some itmes of out of stock");},0);
//  });
//  console.log(pr);

//  pr.then((res)=>{
//     console.log(res);
//  }).catch((err)=>{
//     console.log(err)  
//  })

//  const pr=new Promise((resolve ,reject)=>{
//     //---we right our logic here----------
//      if(true){
//      setTimeout(()=>{
//         resolve();
//      }, Math.random()%10*10000);
//      }
//      else{
//         reject();
//      }
//     });
//     console.log(pr);

// setTimeout(function abc(){
//     console.log('I am one');
// },0);
// const pr=new Promise((res ,rej)=>{
//     setTimeout(()=>{res('done')},0);
// })
// pr.then(f=unction b(res){
//     console.log("Promise Completed:", res)
// });
// setTimeout(function xyz(){
//     console.log('1 on top');
// },0);