const express = require('express')
const app = express()
app.get('/home',(req , res)=>{
 res.send("<h4> Welcome</h4>" );
})
app.post('/product',(req , res)=>{
    console.log('request received')
    res.send("<h4> Welcome Post</h4>" );
   })
   app.patch('/product',(req , res)=>{
    res.send("<h4> Welcome Patch</h4>" );
   })
   app.delete('/product',(req , res)=>{
    res.send("<h4> Welcome Delete</h4>" );
   })
   
;
app.listen(1200);


