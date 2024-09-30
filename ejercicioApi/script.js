"use strict"

let url = "https://rickandmortyapi.com/api/character"

async function mostrarData() {
    let respuesta = await fetch(url)
    let data = await respuesta.json()
    
    data.results.forEach(element => {
        let index = element.index
        document.querySelector('#container').innerHTML += 
        `<div class="card">
            <img src="${element.image}" alt="Avatar" style="width:75%"> 
            <div id="contenedor">
                <h2> ${element.name} </h2>
                <p> ${element.species} </p>
            </div>
        </div>`
        index += 1;
        if (index >= 5) return;
    }); 
}

mostrarData();