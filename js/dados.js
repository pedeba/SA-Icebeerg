let usuarios = JSON.parse(localStorage.getItem("users"))
let userlog = JSON.parse(localStorage.getItem("pessoalogada"))
let nomeEditInput = document.getElementById("nomeEdit")
let userEditInput = document.getElementById("userEdit")
let pass1EditInput = document.getElementById("pass1Edit")
let pass2EditInput = document.getElementById("pass2Edit")
let emailEditInput = document.getElementById("emailEdit")
let telefonEditInput = document.getElementById("telefoneEdit")
let enderecoEditInput = document.getElementById("enderecoEdit")
let msgerro = document.getElementById("msgerro")
mostraDados.innerHTML=`<b>Nome</b>: ${userlog.nome} <br> <b>Usuário</b>: ${userlog.usuario} <br> <b>E-mail</b>: ${userlog.email} <br> <b>Telefone</b>: ${userlog.telefone} <br> <b>Endereço</b>: ${userlog.endereco}<br> `
nomeEditInput.value = userlog.nome
userEditInput.value = userlog.usuario
emailEditInput.value= userlog.email
telefonEditInput.value=userlog.telefone
enderecoEditInput.value=userlog.endereco

function editarDados(){
    if (!nomeEditInput.value && !userEditInput.value){
        msgerro.innerText = 'Você preencheu nenhum campo.'
        msgerro.style.opacity = '1'
    } else {
        usuarios.forEach((user)=>{
            if(user.usuario == userlog.usuario){
                editardado(user, userEditInput.value, 'usuario')
                editardado(user, nomeEditInput.value, 'nome')
                editardado(user, emailEditInput.value, 'email')
                editardado(user, telefonEditInput.value, 'telefone')
                editardado(user, enderecoEditInput.value, 'endereco')
            }
        })
        attLocalStorage()
        window.location.reload()  
    }
}

function editardado(user, inputvalue, prop){
    if(inputvalue){
        user[prop] = inputvalue
        userlog[prop] = inputvalue
    }    
}

function editarSenha() {
    if(!pass1EditInput.value || !pass2EditInput.value){
        msgerro.innerText = 'Você não preencheu todos os campos.'
        msgerro.style.opacity='1'
    } else if (pass1EditInput.value !== pass2EditInput.value){
        msgerro.innerText = 'As senhas estão diferentes.'
    } else {
        usuarios.forEach((user)=>{
            if(user.usuario == userlog.usuario){
                user.senha = pass1EditInput.value
                userlog.senha = pass1EditInput.value
            }
        })
        msgerro.innerText = 'Senha alterada com sucesso!'
        msgerro.style.color = 'yellowgreen'
        msgerro.style.opacity = '1'
        pass1EditInput.value = ''
        pass2EditInput.value = ''
        attLocalStorage()
    }
    
}

function attLocalStorage(){
    localStorage.users = JSON.stringify(usuarios)
    localStorage.pessoalogada = JSON.stringify(userlog)  
}