# Instruções de utilização

## Instalação do Site

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adoção de Pets</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="menu.css"> <!-- Adicione o arquivo CSS do menu aqui -->

    <style>
        .buttons-container {
            text-align: center;
            margin-top: 20px;
        }
        .start-button {
            background-color: #ff6b6b;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            margin: 5px;
        }
        .start-button:hover {
            background-color: #ff4f4f;
        }
    </style>
</head>
<body>

    <input type="checkbox" id="menu__toggle"> <!-- Adicione o input para o menu responsivo -->

    <!-- Código do menu responsivo -->
    <label for="menu__toggle" class="menu__btn">
        <span></span>
    </label>

    <ul class="menu__box">
        <li class="menu__item"><a href="tela5.html">Fale Conosco</a>
            
        <li class="menu__item"><a href="tela6.html">Sua conta</a></li>
        <li class="menu__item"><a href="#">Home</a></li>
   
    </ul>
    <!-- Fim do código do menu responsivo -->

    <header class="header-top">
        <div class="search-bar">
            <img src="https://1.bp.blogspot.com/_bKI6wlklZBQ/TRcofeElnII/AAAAAAAAAv8/SJsDop_OnM8/s1600/cachorros015.gif" alt="Cachorro animado" style="max-width: 100px; margin: 0 auto 20px; display: block;">
            <input type="text" placeholder="Pesquisar pets por nome, raça, etc.">
            <button class="search-button"><i class="fas fa-search"></i> Pesquisar</button>
        </div>
    </header>

    <div class="buttons-container">
        <p>O QUE VOCÊ PROCURA?</p>
        <a href="tela7.html" class="start-button">DOAR PET</a>
        <a href="tela2.html" class="start-button">Petinder</a>
        <a href="tela8.html" class="start-button">ADOTAR PET</a>
    </div>

    <div class="image-container">
        <div class="image-wrapper">
            <p>Veja alguns animais que estão disponíveis para adoção</p>
            <img src="https://www.1zoom.me/big2/122/272450-frederika.jpg" class="object-fit-contain border rounded" alt="Descrição da imagem 1">
            <img src="https://www.1zoom.me/big2/122/272450-frederika.jpg" class="object-fit-cover border rounded" alt="Descrição da imagem 2">
            <img src="https://www.1zoom.me/big2/122/272450-frederika.jpg" class="object-fit-fill border rounded" alt="Descrição da imagem 3">
            <img src="https://www.1zoom.me/big2/122/272450-frederika.jpg" class="object-fit-scale border rounded" alt="Descrição da imagem 4">
        </div>
    </div>
</body>
</html>


## Histórico de versões

### [0.1.0] - DD/MM/AAAA
#### Adicionado
- Adicionado ...