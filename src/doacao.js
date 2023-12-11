document.querySelector("form").onsubmit = function(event) {
    event.preventDefault(); 

    var nome_cachorro = document.getElementById("nome_cachorro").value;
    var idade_cachorro = document.getElementById("idade_cachorro").value;
    var raca_cachorro = document.getElementById("raca_cachorro").value;
    var fotos_cachorro = document.getElementById("fotos_cachorro");
    var curiosidades_cachorro = document.getElementById("curiosidades_cachorro").value;

    if (fotos_cachorro.files.length > 0) {
        var leitor = new FileReader();

        leitor.onload = function(e) {
            var imagemBase64 = e.target.result;

            // Armazenar os dados em localStorage
            var dadosDoacao = {
                nomeCachorro: nome_cachorro,
                idadeCachorro: idade_cachorro,
                racaCachorro: raca_cachorro,
                fotosBase64: imagemBase64,
                curiosidadesCachorro: curiosidades_cachorro
            };

            localStorage.setItem('dadosDoacao', JSON.stringify(dadosDoacao));
            alert('Agradecemos pela sua doação!');
            console.log('Dados salvos:', dadosDoacao);
        };

        leitor.readAsDataURL(fotos_cachorro.files[0]);
    } else {
        console.log('Por favor, selecione uma imagem');
    }
};
