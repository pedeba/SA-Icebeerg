let cervejasLista = document.getElementById("cervejas")
let produtos = JSON.parse(localStorage.produtos)
let modal = document.querySelector(".modal-container")
let btnFecharModal = document.querySelector('.modal-container .fechar')
let usuarios = JSON.parse(localStorage.users)

//EXCREVE NA TELA
for(let i = 0; i<produtos.length; i++){
    cervejasLista.appendChild(document.createElement("div")).classList.add("div-cerveja")
}
let cervejas = document.querySelectorAll(".div-cerveja")
cervejas.forEach(function(div, index){
    div.appendChild(document.createElement('img')).setAttribute('src', 'img/beer1.svg')
    div.appendChild(document.createElement('h3')).innerText = produtos[index].nome
    div.appendChild(document.createElement('h2')).innerText = `Tipo: ${produtos[index].tipo}`
    div.appendChild(document.createElement('p')).innerText = produtos[index].descricao
    div.appendChild(document.createElement('button')).classList.add('btn-info')
})
//MODAL
let btns = document.querySelectorAll('.div-cerveja .btn-info')
function abrirModal(){
    modal.classList.add('ativo')
}
function fecharmodal(){
    modal.classList.remove('ativo')
}
function forafechar(event){
    if(event.target === this){
     modal.classList.remove('ativo')
    }
}
modal.addEventListener('click', forafechar)
btnFecharModal.addEventListener('click', fecharmodal)

//Mostra info
function exibeInfo(index){
    let nomeModal = document.getElementById("nomeModal")
    let tipoModal = document.getElementById("tipoModal")
    let descModal = document.getElementById("descModal")
    let cervejeiroModal = document.getElementById("cervejeiroModal")
    let emailModal = document.getElementById("emailModal")
    let telefoneModal = document.getElementById("telefoneModal")
    let enderecoModal = document.getElementById("enderecoModal")
    nomeModal.innerText = produtos[index].nome
    tipoModal.innerHTML = `<b>Tipo: </b>${produtos[index].tipo}`
    descModal.innerHTML = `<b>Descrição: </b>${produtos[index].descricao}`
    cervejeiroModal.innerHTML = `<b>Cervejeiro: </b>${produtos[index].cervejeiro}`
    usuarios.forEach((user)=>{
        user.produtos.forEach((prod)=>{
            if(produtos[index].nome == prod.nome){
                emailModal.innerHTML = `<b>E-mail: </b>${user.email}`
                telefoneModal.innerHTML = `<b>Telefone: </b>${user.telefone}`
                enderecoModal.innerHTML= `<b>Endereco: </b>${user.endereco}`
            }
        })
    })
}

btns.forEach((btn, index)=>{
    btn.innerText = 'Mais Informações'
    btn.addEventListener('click', ()=>{
        abrirModal()
        exibeInfo(index)
    })
})


//FILTRO