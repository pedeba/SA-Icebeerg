let nomeCerv = document.getElementById("nomeCerv")
let tipoCerv = document.getElementById("tipoCerv")
let descricao = document.getElementById("descricao")
let usuarios = JSON.parse(localStorage.users)
let userLog = JSON.parse(localStorage.pessoalogada)


function addCerv(){
    if(nomeCerv.value == '' || tipoCerv.value == 'Tipo da Cerveja' || descricao.value ==''){
        alert("Insira todas as informações")
    } else {
        cadastrarCerv(nomeCerv.value, tipoCerv.value, descricao.value)
    }
}
function cadastrarCerv(nome, tipo, descricao){
    let novoProduto = {nome: nome, tipo: tipo, descricao: descricao}
    usuarios.forEach((user)=>{
        if(user.usuario == userLog.usuario){
            addLocalSorage(user, novoProduto)
        }
    })
}
function addLocalSorage(user, novoProduto){
   let todosProdutos
   let produtosUser
   if(!user.produtos){
       produtosUser = []
   } else {
       produtosUser = user.produtos
   }
   produtosUser.push(novoProduto)
   user.produtos = produtosUser
   localStorage.users = JSON.stringify(usuarios)
   localStorage.pessoalogada = JSON.stringify(user)
   if(!localStorage.produtos) {
       todosProdutos = []
   } else {
       todosProdutos = JSON.parse(localStorage.produtos)
   }
   todosProdutos.push(novoProduto)
   localStorage.produtos = JSON.stringify(todosProdutos)
}

