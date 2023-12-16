const email_login = localStorage.getItem('emailLogado');
const senha_login = localStorage.getItem('senhaLogada');

document.getElementById("alterar_email").addEventListener("click", (event) => {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var novoEmail = document.getElementById('novo_email').value;

    var usuariosSalvos = JSON.parse(localStorage.getItem('dados'));
    var usuario = usuariosSalvos.find(x => x.email == email);
 
    if (usuario !== undefined) {
        for (let index = 0; index < usuariosSalvos.length; index++) {
            if(usuariosSalvos[index].email == email){
                usuariosSalvos[index].email = novoEmail
                localStorage.setItem('dados', JSON.stringify(usuariosSalvos));
                alert('Email alterado com sucesso!');
                break
            }
        }
    } else {
        alert("usuário não encontrado")
    }
});

document.getElementById("alterar_senha").addEventListener("click", (event) => {
    event.preventDefault();

    var senha = document.getElementById('senha').value;
    var novaSenha = document.getElementById('nova_senha').value;
    var usuariosSalvos = JSON.parse(localStorage.getItem('dados'));
    var usuario = usuariosSalvos.find(x => x.senha == senha);

    if (usuario !== undefined) {
        for (let index = 0; index < usuariosSalvos.length; index++){
            if(usuariosSalvos[index].senha == senha){
                usuariosSalvos[index].senha = novaSenha
                localStorage.setItem('dados', JSON.stringify(usuariosSalvos));
                alert('Senha alterada com sucesso!');
                break
            }
            else{
                alert("o email ou senha estão incorretos")
            }
        }
    } else {
        alert('Usuário não encontrado, faça login para alterar sua senha');
    }
});

document.getElementById("excluir_conta").addEventListener("click", (event) => {
    event.preventDefault(); // Impede o envio do formulário

    var confirmacao = confirm("Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.");

    if (confirmacao) {
        var email_login = localStorage.getItem('emailLogado');
        var usuariosSalvos = JSON.parse(localStorage.getItem('dados'));

        // Verificar se o usuário está logado
        if (email_login) {
            var indiceUsuario = usuariosSalvos.findIndex(x => x.email == email_login);

            if (indiceUsuario !== -1) {
                usuariosSalvos.splice(indiceUsuario, 1);

                localStorage.setItem('dados', JSON.stringify(usuariosSalvos));
                localStorage.removeItem('emailLogado');
                localStorage.removeItem('senhaLogada');

                alert('Conta excluída com sucesso!');
                window.location.href = "./cadastro.html";
            } else {
                alert('Usuário não encontrado');
            }
        } else {
            alert('Usuário não está logado. Faça login para excluir a conta.');
        }
    }
});
