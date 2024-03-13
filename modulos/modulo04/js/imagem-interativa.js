function changeImage(buttonNumber) {
    var imageSrc = "";
    switch (buttonNumber) {
        case '01':
            imageSrc = "./image/mapa-mundi-1.svg";
            break;
        case '02':
            imageSrc = "./image/mapa-mundi-2.svg";
            break;
        case '03':
            imageSrc = "./image/mapa-mundi-3.svg";
            break;
        case '04':
            imageSrc = "./image/mapa-mundi-4.svg";
            break;
        case '05':
            imageSrc = "./image/mapa-mundi-5.svg";
            break;
        case '06':
            imageSrc = "./image/mapa-mundi-6.svg";
            break;
        // Adicione os casos para os outros botões numerados aqui
        default:
            // Define uma imagem padrão caso não seja encontrada uma correspondência
            imageSrc = "./image/mapa_interativo.png";
            break;
    }
    // Altera o atributo src da imagem com o id "mapaInterativo"
    document.getElementById("mapaInterativo").src = imageSrc;
}