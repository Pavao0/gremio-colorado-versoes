//Validação de senha
function verificarSenha() {
    var s1 = document.getElementById("senha").value;
    var s2 = document.getElementById("confSenha").value;
    if (s1 != s2){
        alert("A senhas não conferem!");
        return false;
    }
    else {
        return true
    }
}