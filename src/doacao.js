document.getElementById("btnenviar").onclick = function(event) {
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

            localStorage.setItem('imagem', imagemBase64);
            console.log('Nome do PET:', nome_cachorro);
            console.log('Idade do PET:', idade_cachorro);
            console.log('Raça do PET:', raca_cachorro);
            console.log('Imagem Base64:', imagemBase64);
            console.log('Curiosidades sobre o PET:', curiosidades_cachorro);
        };

        leitor.readAsDataURL(fotos_cachorro.files[0]);
    } else {
        console.log('Por favor, selecione uma imagem');
    }
};
