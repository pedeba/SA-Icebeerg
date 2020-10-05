//FUNCIONALIDADES DO MENU
let usuarioLogado = document.getElementById("usuario-logado")
if(!localStorage.pessoalogada){
usuarioLogado.classList.add("esconde")
naoLogado()  
} else{
    usuarioLogado.classList.remove("esconde") 
    let usuarioLogadoLS = JSON.parse(localStorage.pessoalogada)
    usuarioLogado.innerText = usuarioLogadoLS.nome
}
function naoLogado(){
    let user = document.getElementById("dropdown")
    user.addEventListener("click", abreLogin)
    function abreLogin(event){
        event.preventDefault()
        window.location.href="login.html"
    }
}
function openDados(){
    window.location.href = 'dados.html'
}
function sair(){
    localStorage.removeItem('pessoalogada')
}