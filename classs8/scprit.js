// console.log("Hello");
const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync("./data.json","utf8");
const dataObj = JSON.parse(data).products;
// console.log(data);

const cardTemplate = `
<div class='product-card'>
 <h3> $TITLE</h3>
  <img src="$ima_src" alt='product-image'></img>
  <a href ="$product_link"> More Info</a>

</div>
`;
 let result =[];
 for(let i=0; i<dataObj.length;i++)
 {
     let temp = cardTemplate;
     temp = temp.replace('$TITLE',dataObj[i].title)
     temp = temp.replace('$ima_src',dataObj[i].images[0])
     temp = temp.replace('$product_link',`/product?id=${i}`)
    result.push(temp);
 }
 result =result.join(' ');
//  console.log(result);
const server = http.createServer((req, res)=>{
    // res.end(cardTemplate);
    // const route = req.url;
    // console.log('\n',route, '\n')
    // const pathName =path.pathName
    const {pathname , query} =url.parse(req.url , true)
    console.log('\n', query ,'\n')
    if(pathname =='/home'){
        res.end(result);

        
    }else if
         ( pathname =='/product'){
             const id = query.id;
              const item = dataObj[id];
             console.log(dataObj[id])
             res.end(`

             <div>
             <h4>${item.title}</h4>
             <img src="${item.images[0]}"/>
            <p> ${item.brand}</p>
            <p> ${item.rating}</p>

             </div>
             `);


         }
         else
         {
            res.end('404 Error...Not Found!')
         }
    
    // res.end(result);
     
});
server.listen(1300);

