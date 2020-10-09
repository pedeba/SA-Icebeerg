let cervejasLista = document.getElementById("cervejas")
let produtos = JSON.parse(localStorage.produtos)

for(let i = 0; i<produtos.length; i++){
    cervejasLista.appendChild(document.createElement("div")).classList.add("div-cerveja")
}
let cervejas = document.querySelectorAll(".div-cerveja")
cervejas.forEach(function(div, index){
    div.appendChild(document.createElement('img')).setAttribute('src', 'img/beer1.svg')
    div.appendChild(document.createElement('h3')).innerText = produtos[index].nome
    div.appendChild(document.createElement('h2')).innerText = `Tipo: ${produtos[index].tipo}`
    div.appendChild(document.createElement('p')).innerText = produtos[index].descricao
    // div.appendChild(document.createElement('button')).innerText = 'Mais informações'
})
