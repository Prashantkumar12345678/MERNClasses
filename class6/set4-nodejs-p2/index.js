// const figlet = require('figlet');

// figlet('Prashant ', (err , data)=>{
//     console.log(data);
// })

// fetch ('https://api.github.com/users/deepak3440')
// .then ((res)=>{
//     return res.json();
// })
//  .then ((data)=>{
//     console.log(data);

//  })
//  .catch(err)=>{
//     console.log('error occured')
//  }

//  console.log('end')

//  -----asysn comment----

// console.log('start')
//  async function getApi(){
//     const pr = await fetch('https://api.github.com/users/deepak3440');
//     const data = await pr.json();
//     console.log(pr);
// }
// getApi();


console.log('Start');


async function  callAPI(){
    const pr= new Promise((res, rej)=>{
        console.log('promise1....');
        setTimeout(() => {
            // console.log('timeout1......')
            res('done');
        },10000);
    })
    console.log('promise 1 completed......')
}
callAPI();
console.log('End')