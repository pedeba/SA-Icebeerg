let btnadd = document.getElementById("btn-add")
let lista = document.getElementById("meusprodutos")
let modal = document.querySelector('.modal-container')
let btnFecharModal = document.querySelector('[data-modal="fechar"]')
let btnEditDef = document.getElementById("btnEditarDef")
let userlog = JSON.parse(localStorage.pessoalogada)
let produtos = JSON.parse(localStorage.produtos)
function escreveReload(){
  for(let i = 0; i<userlog.produtos.length;i++){
    lista.appendChild(document.createElement('div')).classList.add('div-cerveja')
  }
  escreveDiv()
}
escreveReload()
function escreveDiv(){
  let divs = document.querySelectorAll('.div-cerveja')
  divs.forEach((div,index)=>{
    div.appendChild(document.createElement('p')).innerText = userlog.produtos[index].nome
    div.appendChild(document.createElement('button')).classList.add("btn-exclui")
    div.appendChild(document.createElement('button')).classList.add("btn-edit")

  })
  btns('.div-cerveja .btn-edit', 'Editar')
  btns('.div-cerveja .btn-exclui', 'Excluir')
}
function btns(seletor, escrito){
  let btns = document.querySelectorAll(seletor)
  btns.forEach((b)=>{
    b.innerText = escrito
  })
}
//Editar
let btnEditar = document.querySelectorAll('.div-cerveja .btn-edit')
//MODAL
function abrirModal(){
  modal.classList.add('ativo')
}

function fecharModal(){
  modal.classList.remove('ativo')
}
btnFecharModal.addEventListener('click', fecharModal)
function cliqueforafechar(event){
  if(event.target === this){
      modal.classList.remove('ativo')
  }
}
modal.addEventListener('click', cliqueforafechar)
//////////////////////////////////////////////
let nome = document.getElementById("nomeEdit")
let tipo = document.getElementById("tipoCervEdit")
let desc = document.getElementById("descricao-edit")
let posicao = document.getElementById("posicao")


function editarCerv(index){
  nome.value = userlog.produtos[index].nome
  tipo.value = userlog.produtos[index].tipo
  desc.value = userlog.produtos[index].descricao
  posicao.innerText = index
}
btnEditar.forEach((btn, index)=>{
  btn.addEventListener('click', ()=>{
    abrirModal()
    editarCerv(index)
  })
})

function editardef(){
  usuarios.forEach((user)=>{
    if(user.usuario == userlog.usuario){
      user.produtos.forEach((prod, index)=>{
        if(index == +posicao.innerText){
          att(prod)
        }
      })
    }
  })
  produtos.forEach((prod)=>{
    if(prod.nome == userlog.produtos[+posicao.innerText].nome && prod.descricao == userlog.produtos[+posicao.innerText].descricao){
      att(prod)
    }
  })
  userlog.produtos[+posicao.innerText].nome = nome.value
  userlog.produtos[+posicao.innerText].tipo = tipo.value
  userlog.produtos[+posicao.innerText].descricao = desc.value
  attLocalStorage()
}
btnEditDef.addEventListener('click', editardef)

function att(prod){
  prod.nome = nome.value
  prod.tipo = tipo.value
  prod.descricao = desc.value
  console.log(prod)
}

function attLocalStorage(){
  localStorage.users = JSON.stringify(usuarios)
  localStorage.pessoalogada = JSON.stringify(userlog)
  localStorage.produtos = JSON.stringify(produtos)
  window.location.reload()  
}