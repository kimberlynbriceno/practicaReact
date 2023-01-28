
const cards = document.querySelector("#cardDinamica")
const template = document.querySelector("#templateCard").content
const fragment = document.createDocumentFragment() 
const loading = document.querySelector("#loadingId")


 document.addEventListener('DOMContentLoaded', () => {
        callFetch()
 })

 const callFetch = async () => {
    try{
        loadingData(true)
        const Response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await Response.json()
        paintData(data)
    }
    catch(err){

    }
    finally{
         loadingData(false)
    }
 }

const paintData = (data) => {
    
    data.results.forEach((item) => {
    const clone = template.cloneNode(true)
    clone.querySelector("h3").textContent = item.name
    clone.querySelector("#img").setAttribute("src", item.url)

        fragment.appendChild(clone)

    });
    cards.appendChild(fragment)
}


 const loadingData = (estado) => {

    if(estado){
        loading.classList.remove("d-none") 
    }
    else{
        loading.classList.add("d-none") 

    }
 }



