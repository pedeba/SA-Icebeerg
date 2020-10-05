let usuarios = JSON.parse(localStorage.getItem("users"))
let userlog = JSON.parse(localStorage.getItem("pessoalogada"))
let nomeEditInput = document.getElementById("nomeEdit")
let userEditInput = document.getElementById("userEdit")
let pass1EditInput = document.getElementById("pass1Edit")
let pass2EditInput = document.getElementById("pass2Edit")
mostraDados.innerHTML=`Nome: ${userlog.nome} <br> Usuario: ${userlog.usuario} `

function editarDados(){
    if (!nomeEditInput.value && !userEditInput.value){
        alert("Você não alterou nenhum campo.")
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
    }
}

function editarSenha() {
    if(!pass1EditInput.value || !pass2EditInput.value){
        alert("Não deixe Campos vazios!")
    } else if (pass1EditInput.value !== pass2EditInput.value){
        alert("As senhas estão diferentes")
    } else {
        usuarios.forEach((user)=>{
            if(user.usuario == userlog.usuario){
                user.senha = pass1EditInput.value
                userlog.senha = pass1EditInput.value
            }
        })
    }
    alert("Senha alterada com sucesso!")
    attLocalStorage()
}

function attLocalStorage(){
    localStorage.users = JSON.stringify(usuarios)
    localStorage.pessoalogada = JSON.stringify(userlog)
    window.location.reload()      
}