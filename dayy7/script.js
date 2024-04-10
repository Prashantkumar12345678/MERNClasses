
// const fs = require('node:fs');
// const data = fs.readFileSync('./myReadme.txt');
// console.log(data.toString())



// const fs = require('fs');
// const data = fs.readFileSync('./myReadme.txt', {encoding:'utf-8'});
// console.log(data)
 
// const fs = require('fs')
// fs.writeFileSync('./logs.txt', " 10TH April 2024: Day 7")

// const fs = require('fs');
// console.log("Start")
// const data = fs.readFileSync('./myReadme.txt', {encoding:'utf-8'});
// console.log(data);
// console.log("End");


//-----promises in file system-----------
// const fsPromises = require('fs/promises');
// console.log('Start');
// const pr = fsPromises.readFile('./myReadme.txt',{encoding:'utf8'});
// console.log(pr)
//  pr.then((res)=>{
//     console.log(res);
//  })
//   console.log('End')

//----CALL BACK IN FILE SYSTEM((fs)------
// const fs = require('fs');
// fs.readFile('./myReadme.txt',{encoding:'utf8'},(err , data)=>{
//     console.log(data)
// })

// const http = require('http');
// const app = http.createServer((req , res)=>{
//     console.log('Recieved');
// })
//  app.listen(1400);

 //http:localhost:1400/

//  const http = require('http');
// const app = http.createServer((req , res)=>{
//     console.log('Request recieved');
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type':'text/html'
//     })
//     res.end("<h2>hello ! </h2> <h3> hii everyone</h3> <h1> who are you.</h1>");
// })
// app.listen(1400, ()=>{
//      console.log('-----------Server Started----------------------')
// });

//---------------MINI--PROJECT-------------

const http = require('http');

const fs = require('fs');

const data =fs.readFileSync('./data.json','utf-8');
const dataObj = JSON.parse(data);
const products = dataObj.products;
console.log(data);
 const htmlTemplate =`
 <!DOCTYPE HTML>
 <html lang="en-US">
 <head>
 <style>

  .product-card{
    max-width:500px;
    margin:20px auto;
    border: 3px double brown;
    border-radius:8px;
    padding:16px;
  }
 </style>

</head>
<body> _PRODUCTS_CARDS__</body>
</html>
 `
 const cardTemplate =`
 <div class ='product-card'>
 <h4>_TITLE_</h4>
 <p>_INFO_</p>
 </div>
 `
//  const card1= cardTemplate.replace('_TITLE_',products[0].title)
//                             .replace('_INFO_',products[0].description); 
//  const card2= cardTemplate.replace('_TITLE_',products[1].title).replace('_INFO_', products[1].description); 

  const allCards =products.map((elem) => {
    let newCard = cardTemplate;
    newCard=newCard.replace('_TITLE_',elem.title)
    newCard=newCard.replace('_INFO_',elem.description)
    return newCard;

  });

    //   console.log("\n: card1:",card1)
    //   console.log('\n:card2:',card2)
const page= htmlTemplate.replace('_PRODUCTS_CARDS__',allCards);
const app = http.createServer((req , res)=>{
    console.log('Request recieved');
    console.log(req.url);
    res.writeHead(200,{
        'content-type':'text/html'
    })
    res.end(page);
})
app.listen(1400, ()=>{
     console.log('-----------Server Started----------------------')
});