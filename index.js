

// Appel avec fetch (promise)
async function getTeddiesData(){
    const apiUrl = "http://localhost:3000/api/teddies/"

    // promess = il promet quil va recup les infos, on ajoute "then" pour le chaînage et on définit la fonction directement dedans 
    const data = await fetch(apiUrl).then(
        console.log("fetch done")
        )
    const json = await data.json()
    // console.log(json)
    return json
}


async function displayProduct(event) {
    
    event.preventDefault()
    console.log("Evenement détecté");


    //TODO: récup teddy par id
    // const teddyID = inputElt.value 
    // console.log(teddyID)

    // 2 récup infos du teddy
    const teddiesData = await getTeddiesData()
    const teddyData =  teddiesData[0]

    // get DOM elements
    const imageTeddy = document.getElementById('imageURL')
    const nameTeddy = document.getElementById('title')
    const descriptionTeddy = document.getElementById('description')
    const priceTeddy = document.getElementById('price')
    const colors1Teddy = document.getElementById('colors1')
    const colors2Teddy = document.getElementById('colors2')
    const colors3Teddy = document.getElementById('colors3')

    // populate DOM elements with data
    nameTeddy.innerHTML = teddyData.name
    descriptionTeddy.innerHTML = teddyData.description
    priceTeddy.innerHTML = teddyData.price + "€"

    // it have worked but dropdown wont open.apply.?
    colors1Teddy.innerHTML = teddyData.colors[0]
    colors2Teddy.innerHTML = teddyData.colors[1]
    colors3Teddy.innerHTML = teddyData.colors[2]
    

    var src = document.createAttribute("src")
    src.value = teddyData.imageUrl
    imageTeddy.setAttributeNode(src);           
    
    // teddiesData[0].forEach(element => {
    // });
}

window.addEventListener("load", displayProduct) 




// ------ Appel avec XMLHttpRequest ------
// var request = new XMLHttpRequest();
// request.onreadystatechange = function() {
//     if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
//         var response = JSON.parse(this.responseText);
//         console.log(response[0].name);
//     }
// };
// request.open("GET", "http://localhost:3000/api/teddies/");
// request.send();
