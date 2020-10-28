const usuarioInput = window.document.getElementById("usuario")
const senhaInput = window.document.getElementById("senha")
const senhaInput2 = window.document.getElementById("senha2")
const nomeInput = window.document.getElementById("nomecompleto")
const telefoneInput = window.document.getElementById("telefone")
const enderecoInput = window.document.getElementById("endereco")
const emailInput = window.document.getElementById("email")
const mensagem = window.document.getElementById("msgerro")
let usuarios = JSON.parse(localStorage.users)
mensagem.style.color = 'red'

function registro() {
    if (usuarioInput.value == ''|| senhaInput.value =='' || senhaInput2.value =='' || nomeInput.value == ''){
        mensagem.innerHTML = 'Insira todas as Informações.'
    } else if (senhaInput.value !== senhaInput2.value) {
        mensagem.innerHTML = 'Os campos de senha estão diferentes.'
    } else {
        cadastrar(usuarioInput.value, senhaInput.value, nomeInput.value, telefoneInput.value, enderecoInput.value, emailInput.value)
    }
}

function cadastrar(usuario, senha, nome, telefone, endereco, email){
    let novoUser = {usuario: usuario, senha: senha, nome: nome, telefone: telefone, endereco: endereco, email: email, produtos: []}
    let users = localStorage.getItem("users");
    if (users == null) {
        users = [];
    }else {
        users = JSON.parse(users);
    }
    let repeteUser = users.some((item)=>{
        return usuario == item.usuario
    })
    let repeteEmail = users.some((item)=>{
        return email == item.email
    })
    let repeteTelefone = users.some((item)=>{
        return telefone == item.telefone
    })
    if(repeteUser){
        mensagem.innerHTML = 'Este nome de usuário já foi registrado.'
    } else if(repeteEmail){
        mensagem.innerHTML = 'Este email já foi registrado.'
    } else if(repeteTelefone){
        mensagem.innerHTML = 'Este telefone já foi registrado.'  
    }else {
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
