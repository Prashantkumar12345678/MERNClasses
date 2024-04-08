console.log("....App Started....");

function callAPI(){
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=5800dd907cad401ab39fe07a390062ea").then(data=>data.json())

    
    .then((data)=>{
        // console.log(data);
        renderUI(data)
    })
}
// callAPI();

const root=document.getElementById("root");
function renderUI(data){
    //bougth  the articles from data
    const articles =data.articles;
    for(let i=0; i<articles.length ;i++){
        const ar =articles[i];
        const div = document.createElement('div')
        div.setAttribute('class','news-card');
        const h3 = document.createElement('h3')
        // div.setAttribute()
        h3.innerText=ar.title;
        div.appendChild(h3);
        // div.innerText='Card';
        const img =document.createElement("img")
        img.src=ar.urlToImage;
        // div.appendChild(h3)
        const p = document.createElement('p')
        
        p.innerText=ar.title;
        div.appendChild(img)
    
        root.appendChild(div);
        div.appendChild(p)
    }

    }

    // single articles from the articles array
    // const root=document.getElementById("root");
   


    // console.log(ar)
   

callAPI();
// renderUI();
