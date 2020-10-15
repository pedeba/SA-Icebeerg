let nomeCerv = document.getElementById("nomeCerv")
let tipoCerv = document.getElementById("tipoCerv")
let descricao = document.getElementById("descricao")
let usuarios = JSON.parse(localStorage.users)
let userLog = JSON.parse(localStorage.pessoalogada)

//verificacao
function addCerv(){
    if(nomeCerv.value == '' || tipoCerv.value == 'Tipo da Cerveja' || descricao.value ==''){
        alert("Insira todas as informações")
    } else {
        cadastrarCerv(nomeCerv.value, tipoCerv.value, descricao.value)
        nomeCerv.value=null;
        descricao.value=null; 
        tipoCerv.value= "Tipo da Cerveja"
    }
}
//cria nova cerveja
function cadastrarCerv(nome, tipo, descricao){
    let novoProduto = {nome: nome, tipo: tipo, descricao: descricao}
    usuarios.forEach((user)=>{
        if(user.usuario == userLog.usuario){
            addLocalSorage(user, novoProduto)
        }
    })
}
//adiciona no localStorage
function addLocalSorage(user, novoProduto){
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
   addProdutos(novoProduto)
}
//cria nova chave produtos
function addProdutos(novoProduto){
    let todosProdutos
    if(!localStorage.produtos) {
        todosProdutos = []
    } else {
        todosProdutos = JSON.parse(localStorage.produtos)
    }
    todosProdutos.push(novoProduto)
    localStorage.produtos = JSON.stringify(todosProdutos)
    window.location.reload()
}