let amigos = [];

function agregarAmigo(){
    let inputAmigo =  document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if(nombreAmigo===""){
        alert("Debe ingresar un nombre");
        return;

    }

    amigos.push(nombreAmigo);
    console.log(amigos);

    inputAmigo.value = "";

    actualizarListaAmigos();
}



function actualizarListaAmigos(){

    const listaAmigos = document.getElementById("listaAmigos")

    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {

        const itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);

    });

}

function sortearAmigo(){

    if (listaAmigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }

    const indiceGanador = Math.floor(Math.random()*amigos.length);
    const ganador = amigos[indiceGanador];
    const resultado = document.getElementById("resultado");
    
    listaAmigos.innerHTML = "";
    resultado.innerHTML = `<l1> El amigo secreto es: ${ganador}</li>`;
   

}