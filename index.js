
const buttonFirstTeddy = document.getElementById('ask-teddy')
const teddyResultElt = document.getElementById('teddy-result')

// Appel avec fetch (promise)
async function getTeddiesData(){
    const apiUrl = "http://localhost:3000/api/teddies/"

    // promess = il promet quil va recup les infos, on ajoute "then" pour le chaînage et on définit la fonction directement dedans 
    const data = await fetch(apiUrl)
    const json = await data.json()
    console.log(json)
    return json
}



async function displayProduct(event) {
    
    event.preventDefault()
    console.log("Evenement détecté");


    // 1 récup nom de ville a aller chercher
    // const cityName = inputElt.value
    // console.log(cityName)

    // 2 récup info météo de cette ville
    const teddiesData = await getTeddiesData()
    console.log(teddiesData)
}

buttonFirstTeddy.addEventListener('click', displayProduct)


// Appel avec XMLHttpRequest
// var request = new XMLHttpRequest();
// request.onreadystatechange = function() {
//     if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
//         var response = JSON.parse(this.responseText);
//         console.log(response[0].name);
//     }
// };
// request.open("GET", "http://localhost:3000/api/teddies/");
// request.send();
