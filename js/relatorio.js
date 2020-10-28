let userlog = JSON.parse(localStorage.pessoalogada)
let produtos = JSON.parse(localStorage.produtos)
let table = document.getElementById("table")
let produtosuser = produtos.filter((prod)=>{
  if (prod.usercervejeiro == userlog.usuario){
    return prod
  }
})

for(let i =0; i<produtosuser.length; i++){
  table.appendChild(document.createElement('tr'))
}
let trs = document.querySelectorAll('tr')
trs.forEach((tr, index)=>{
  if(!tr.classList.contains('cabeca-table')){
    tr.appendChild(document.createElement('td')).innerText= produtosuser[index-1].nome
    tr.appendChild(document.createElement('td')).innerText= produtosuser[index-1].visualizacao
  }
})

