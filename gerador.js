function gerarsenha(){
    let tamanho = 8;
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*"
    senha =""
    
    for(let i = 0; i<tamanho;i++){
        let indice = Math.floor(Math.random()*caracteres.length)
        senha +=caracteres[indice]
    }
    let senha_gerada  = document.getElementById("senhagerada");
    if(senha_gerada){
        senha_gerada.innerHTML = senha
    }
}