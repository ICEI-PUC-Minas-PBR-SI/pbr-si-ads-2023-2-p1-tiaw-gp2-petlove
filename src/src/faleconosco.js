document.getElementById("Enviar").addEventListener("click", () => {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    var user = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    let arraycadastro = [];

    if (localStorage.getItem('dados') !== null) {
        arraycadastro = JSON.parse(localStorage.getItem('dados'));
    }

    localStorage.setItem("dados");

    alert("Mensagem enviada com sucesso");
});
