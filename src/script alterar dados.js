document.getElementById("alterar_email").addEventListener("click", (event) => {
    event.preventDefault();

    var novoEmail = document.getElementById('novo_email').value;

    const usuariosSalvos = JSON.parse(localStorage.getItem('dados'));

    var usuario = usuariosSalvos.find(x => x.email == email);

    if (usuario !== undefined) {

        usuario.email = novoEmail;

        localStorage.setItem('dados', JSON.stringify(usuariosSalvos));

        alert('Email alterado com sucesso!');
    } else {
        alert('Usuário não encontrado');
    }
});

document.getElementById("alterar_senha").addEventListener("click", (event) => {
    event.preventDefault();

    var novaSenha = document.getElementById('nova_senha').value;

    const usuariosSalvos = JSON.parse(localStorage.getItem('dados'));

    var usuario = usuariosSalvos.find(x => x.email == email);

    if (usuario !== undefined) {

        usuario.senha = novaSenha;

        localStorage.setItem('dados', JSON.stringify(usuariosSalvos));

        alert('Senha alterada com sucesso!');
    } else {
        alert('Usuário não encontrado');
    }
});

document.getElementById("excluir_conta").addEventListener("click", (event) => {
    event.preventDefault(); // Impede o envio do formulário

    // Confirmação da exclusão da conta
    var confirmacao = confirm("Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.");

    if (confirmacao) {

        const usuariosSalvos = JSON.parse(localStorage.getItem('dados'));

        var indiceUsuario = usuariosSalvos.findIndex(x => x.email == email);

        if (indiceUsuario !== -1) {

            usuariosSalvos.splice(indiceUsuario, 1);

            localStorage.setItem('dados', JSON.stringify(usuariosSalvos));

            alert('Conta excluída com sucesso!');

            window.location.href = "./cadastro.html";
        } else {
            alert('Usuário não encontrado');
        }
    }
});
