const usuarioInput = window.document.getElementById("usuario")
const senhaInput = window.document.getElementById("senha")
const senhaInput2 = window.document.getElementById("senha2")
const nomeInput = window.document.getElementById("nomecompleto")
const mensagem = window.document.getElementById("msgerro")
let usuarios = JSON.parse(localStorage.users)
mensagem.style.color = 'red'

function registro() {
    if (usuarioInput.value == ''|| senhaInput.value =='' || senhaInput2.value =='' || nomeInput.value == ''){
        mensagem.innerHTML = 'Insira todas as Informações.'
    } else if (senhaInput.value !== senhaInput2.value) {
        mensagem.innerHTML = 'Os campos de senha estão diferentes.'
    } else {
        cadastrar(usuarioInput.value, senhaInput.value, nomeInput.value)
    }
}

function cadastrar(usuario, senha, nome){
    let novoUser = {usuario: usuario, senha: senha, nome: nome}
    let users = localStorage.getItem("users");
    if (users == null) {
        users = [];
    }else {
        users = JSON.parse(users);
    }
    const repeteUser = users.some((item)=>{
        return usuario == item.usuario
    })
    if(repeteUser){
        mensagem.innerHTML = 'Este nome de usuário já foi registrado.'
    } else {
        users.push(novoUser); 
        localStorage.users = JSON.stringify(users)
        window.location.href = 'loginfeito.html' 
    }    
}
function logar() {
    if (usuarioInput.value == ''|| senhaInput.value ==''){
        mensagem.innerHTML = 'Insira todas as Informações.'
    } else {
        mensagem.innerHTML ='Usuário ou senha inválidos.'
    }
    usuarios.forEach((item)=>{
        if(usuarioInput.value == item.usuario && senhaInput.value == item.senha){
            mensagem.innerHTML=''
            localStorage.setItem('pessoalogada', JSON.stringify(item))
            window.location.href = 'index.html'
        }     
    })
}
function dados(){
    let userlog=JSON.parse(localStorage.getItem("pessoalogada"))
    mostraDados.innerHTML=`Nome: ${userlog.nome} <br> Usuario: ${userlog.usuario} `
}