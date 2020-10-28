let cervejasLista = document.getElementById("cervejas")
let produtos = JSON.parse(localStorage.produtos)
let modal = document.querySelector(".modal-container")
let btnFecharModal = document.querySelector('.modal-container .fechar')
let usuarios = JSON.parse(localStorage.users)
let userlog = JSON.parse(localStorage.pessoalogada)
//EXCREVE NA TELA
for(let i = 0; i<produtos.length; i++){
    cervejasLista.appendChild(document.createElement("div")).classList.add("div-cerveja")
}
let cervejas = document.querySelectorAll(".div-cerveja")
cervejas.forEach(function(div, index){
    div.appendChild(document.createElement('img')).setAttribute('src', 'img/beer1.svg')
    div.appendChild(document.createElement('h3')).innerText = produtos[index].nome
    div.appendChild(document.createElement('h2')).innerHTML = `Tipo: <span>${produtos[index].tipo}</span>`
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
    
    usuarios.forEach((user)=>{
        user.produtos.forEach((prod)=>{
            if(produtos[index].usercervejeiro == prod.usercervejeiro){
                cervejeiroModal.innerHTML = `<b>Cervejeiro: </b>${user.nome}`
                emailModal.innerHTML = `<b>E-mail: </b>${user.email}`
                telefoneModal.innerHTML = `<b>Telefone: </b>${user.telefone}`
                enderecoModal.innerHTML= `<b>Endereco: </b>${user.endereco}`
            }
        })
    })
}

function salvaVisualizacao(index){
    if(!produtos[index].visualizacao){
        produtos[index].visualizacao = 0
    }
    if(!produtos[index].vistopor){
        produtos[index].vistopor =[]
    }
    let arraycervejeiro = []
    produtos.forEach((prod)=>{
        if(prod.usercervejeiro !== userlog.usuario){
            arraycervejeiro.push(prod)
        }
    })
    if(!produtos[index].vistopor.includes(userlog.usuario)){
        arraycervejeiro.forEach((prod)=>{
            if(prod.nome == produtos[index].nome && prod.descricao == produtos[index].descricao){
                produtos[index].vistopor.push(userlog.usuario)
                produtos[index].visualizacao += 1
                console.log(produtos[index])
            }
        })
    }
    localStorage.produtos = JSON.stringify(produtos)
}

btns.forEach((btn, index)=>{
    btn.innerText = 'Mais Informações'
    btn.addEventListener('click', ()=>{
        abrirModal()
        salvaVisualizacao(index)
        exibeInfo(index)
    })
})


//FILTRO
let filtroselect = document.getElementById("filtroselect")

function filtro(){
    switch(filtroselect.value){
        case 'Todos':
            removeAll()
            break
        case 'Larger':
            removeAll()
            removeTipo()
            break
        case 'Ales':
            removeAll()
            removeTipo()
            break
        case 'Lambics':
            removeAll()
            removeTipo()
            break     
    }
}
function removeAll(){
    cervejas.forEach(cerv=>cerv.classList.remove('esconde'))
}
function removeTipo(){
    produtos.forEach((prod, index)=>{
        if(prod.tipo !== filtroselect.value){
           cervejas[index].classList.add('esconde')
        }
    })
}
filtroselect.addEventListener('change', filtro)