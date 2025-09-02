function gerarsenha() {
    const tamanho = document.getElementById("tamanho").value;
    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const especiais = "!@#$%¨&*()-_=+[{]}~:;.,<>/?|\\";
    const todosCaracteres = maiusculas + minusculas + numeros + especiais;
    
    let senha = "";
    
    // Garante que a senha tenha pelo menos um de cada tipo de caractere
    senha += maiusculas[Math.floor(Math.random() * maiusculas.length)];
    senha += minusculas[Math.floor(Math.random() * minusculas.length)];
    senha += numeros[Math.floor(Math.random() * numeros.length)];
    senha += especiais[Math.floor(Math.random() * especiais.length)];
    
    // Preenche o restante da senha com caracteres aleatórios
    for (let i = senha.length; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * todosCaracteres.length);
        senha += todosCaracteres[indice];
    }
    
    // Embaralha a senha para aumentar a aleatoriedade
    senha = senha.split('').sort(() => 0.5 - Math.random()).join('');
    
    const senhaGeradaElement = document.getElementById("senhagerada");
    if (senhaGeradaElement) {
        senhaGeradaElement.innerHTML = senha;
    }
}

function copiarSenha() {
    const senhaGerada = document.getElementById("senhagerada").innerText;
    const btnCopiar = document.getElementById("btnCopiar");

    // Tenta usar a Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(senhaGerada)
            .then(() => {
                const originalText = btnCopiar.innerText;
                btnCopiar.innerText = 'Copiado!';
                setTimeout(() => {
                    btnCopiar.innerText = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error('Falha ao copiar a senha: ', err);
                alert('Falha ao copiar a senha. Por favor, copie manualmente.');
            });
    } else {
        // Fallback para navegadores mais antigos (obsoleto)
        const textarea = document.createElement("textarea");
        textarea.value = senhaGerada;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        alert('Senha copiada!');
    }
}

