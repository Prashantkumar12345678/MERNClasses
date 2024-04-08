// function FetchAPI(){
//     const url ="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=MVEQTUC4VEGZQ3NRLKZG6PEPR"
//     .then((res)=>res.json())
//     .then(renderUI)

//     fetch(url);
// }
// FetchAPI()

const root =document.getElementById("root");

    function renderUI(data){
        // const data=data.days;
        // console.log(days);

        const row = document.createElement("tr")

        let cell1 = document.createElement("th");
        cell1.innerText ="Date";
        row.appendChild(cell1)
        let cell2 = document.createElement("th");
        cell1.innerText ="Maximum Temperature";
        row.appendChild(cell2)
        // let cell3 = document.createElement("th");
        // cell1.innerText ="Minimum Teamperature";
        // row.appendChild(cell3)

         rows.appendChild(row)
        root.appendChild(row)

    }
    renderUI();
