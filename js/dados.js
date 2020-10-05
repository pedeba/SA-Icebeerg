let usuarios = JSON.parse(localStorage.getItem("users"))
let userlog = JSON.parse(localStorage.getItem("pessoalogada"))
let nomeEditInput = document.getElementById("nomeEdit")
let userEditInput = document.getElementById("userEdit")
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
        localStorage.users = JSON.stringify(usuarios)
        localStorage.pessoalogada = JSON.stringify(userlog)
        window.location.reload()
    }

}

