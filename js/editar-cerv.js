let btnadd = document.getElementById("btn-add")
let lista = document.getElementById("meusprodutos")
let modal = document.querySelector('.modal-container')
let btnFecharModal = document.querySelector('[data-modal="fechar"]')
let btnFecharModalExlcui = document.querySelector('.fecharExclui')
let btnEditDef = document.getElementById("btnEditarDef")
let btnExcluirDef = document.getElementById("btnExcluirDef")
let modalExclui = document.querySelector(".excluirCerveja-modal")
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
//MODAL
let btnEditar = document.querySelectorAll('.div-cerveja .btn-edit')
let btnExclui = document.querySelectorAll('.div-cerveja .btn-exclui')
function abrirModal(modal){
  modal.classList.add('ativo')
}

function fecharModal(){
  modal.classList.remove('ativo')
  modalExclui.classList.remove('ativo')
}
btnFecharModal.addEventListener('click', fecharModal)
btnFecharModalExlcui.addEventListener('click', fecharModal)
function cliqueforafechar(event){
  if(event.target === this){
      modal.classList.remove('ativo')
      modalExclui.classList.remove('ativo')
  }
}
modal.addEventListener('click', cliqueforafechar)
modalExclui.addEventListener('click', cliqueforafechar)
//////////////////////////////////////////////

//EDITAR CERVEJA
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
    abrirModal(modal)
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


//EXLUIR CERVEJA
let posicaoExclui = document.getElementById("posicao-exclui")
function excluirCerv(index){
  posicaoExclui.innerText = index
}

btnExclui.forEach((btn, index)=>{
  btn.addEventListener('click', ()=>{
    abrirModal(modalExclui)
    excluirCerv(index)
  })
})

//EXCLUI CERVEJA DOS
function excluirDef(){
  usuarios.forEach((user)=>{
    if(user.usuario == userlog.usuario){
      user.produtos.forEach((prod, index)=>{
        if(index == +posicaoExclui.innerText){
          user.produtos.splice(user.produtos.indexOf(prod), 1)
          produtosex(index)
        }
      })
    }
  })
  function produtosex(index){
    produtos.forEach((prod)=>{
      if(prod.nome == userlog.produtos[index].nome && prod.descricao == userlog.produtos[index].descricao){
        produtos.splice(produtos.indexOf(prod), 1)
      }
    })
  }
  userlog.produtos.forEach((prod, index)=>{
    if(index == +posicaoExclui.innerText){
      userlog.produtos.splice(userlog.produtos.indexOf(prod), 1)
    }
  })
  attLocalStorage()
  console.log(produtos)
}
btnExcluirDef.addEventListener("click", excluirDef)
//ATTLOCALSTORAGE
function attLocalStorage(){
  localStorage.users = JSON.stringify(usuarios)
  localStorage.pessoalogada = JSON.stringify(userlog)
  localStorage.produtos = JSON.stringify(produtos)
  window.location.reload()  
}