// console.log("GEC Start")

// function printPretty(){
//     console.log('prettyStart');
//     let ans=2+3;
//     console.log(ans);
//     console.log('prettyEnd')
// }
// // setTimeout( printPretty,1000);

// // console.log('GEC End');

// const btn = document.getElementById('btn');
// btn.addEventListener("click", printPretty);


//  console.log('Start');
// const req = fetch("https://images.unsplash.com/photo-1712007426396-08068359b6c7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")



//  console.log(req);
//  req.then(()=>console.log('Feteched'));
// console.log('End');



console.log('Start')
const req = fetch('httpss://dummyjson.com/products/1')
.then(res => res.json())
.then(res =>console.log(res))
// .then(json => console.log(json))
.catch(err=>{
    console.log("error occurred in fetech api")
})

// const res =req.then(res=>res.json());
// res.then((data)=>console.log(data));

        //   end=2+3*4; 
 console.log("End");