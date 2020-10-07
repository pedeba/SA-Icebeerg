let usuarios = JSON.parse(localStorage.getItem("users"))
let userlog = JSON.parse(localStorage.getItem("pessoalogada"))
let nomeEditInput = document.getElementById("nomeEdit")
let userEditInput = document.getElementById("userEdit")
let pass1EditInput = document.getElementById("pass1Edit")
let pass2EditInput = document.getElementById("pass2Edit")
let msgerro = document.getElementById("msgerro")
mostraDados.innerHTML=`Nome: ${userlog.nome} <br> Usuário: ${userlog.usuario} `
nomeEditInput.value = userlog.nome
userEditInput.value = userlog.usuario

function editarDados(){
    if (!nomeEditInput.value && !userEditInput.value){
        msgerro.innerText = 'Você preencheu nenhum campo.'
        msgerro.style.opacity = '1'
    } else {
        usuarios.forEach((user)=>{
            if(user.usuario == userlog.usuario){
                if(userEditInput.value){
                    user.usuario = userEditInput.value
                    userlog.usuario = userEditInput.value
                }
                if(nomeEditInput.value){
                    user.nome = nomeEditInput.value
                    userlog.nome = nomeEditInput.value
                }  
            }
        })
        attLocalStorage()
        window.location.reload()  
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