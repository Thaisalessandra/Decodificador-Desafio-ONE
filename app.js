let palavra = "";

function codificarPalavra() {
    let palavra = "";
    let palavraDecodificada = document.querySelector('input').value;
    palavraDecodificada = palavraDecodificada.toLowerCase();
   
    for (let i = 0; i < palavraDecodificada.length; i++) {
        var element = palavraDecodificada[i];
        if (element == 'e') {
            palavra = palavra + "enter";

        }
        else if (element == 'i' ) {

            palavra = palavra + "imes";
        }
        else if (element == 'a' ) {

            palavra = palavra + "ai";
        }
        else if (element == 'o' ) {

            palavra = palavra + "ober";
        }
        else if (element == 'u' ) {

            palavra = palavra + "ufat";
        }
        else {

            palavra = palavra + element;

        }
    }

    const elemento = document.querySelector(".h6-encript");

    elemento.innerHTML = palavra;
    document.querySelector('input').value = "";
    let elemento2 = document.querySelector(".h2-titulo");
    elemento2.innerHTML= 'Palavra Criptografada';
    
    
}

function decodificarPalavra() {
    let palavra = "";
    let palavraCodificada = document.querySelector('input').value;
   
    let indiceAux = palavraCodificada.length;

    for (let i = 0; i < palavraCodificada.length; i++) {
       

        if (palavraCodificada[i] == 'a' && palavraCodificada[i + 1] == 'i') {

            palavra = palavra + 'a';
            i += 1;
        }
        else if (palavraCodificada[i] == 'e' && palavraCodificada[i + 1] == 'n') {
            i += 4;
            palavra += 'e';

        }
        else if (palavraCodificada[i] == 'i' && palavraCodificada[i + 1] == 'm') {

            palavra += 'i';
            i += 3;
        }
        else if (palavraCodificada[i] == 'o' && palavraCodificada[i + 1] == 'b') {
            palavra += 'o';
            i += 3;

        }
        else if (palavraCodificada[i] == 'u' && palavraCodificada[i + 1] == 'f') {
            palavra += 'u';
            i += 3;
        }
        else{
            palavra+=palavraCodificada[i];
        }
        
    }

    
    
    const elementoo=document.querySelector('.h6-encript');
    elementoo.innerHTML = palavra;
    let elemento2 = document.querySelector(".h2-titulo");
    elemento2.innerHTML= 'Palavra descriptografada';
    

}






function copiarTexto() {
    let elemento = document.querySelector(".h6-encript");
    let textoCopia = elemento.innerHTML;
    navigator.clipboard.writeText(textoCopia);
    elemento.innerHTML= 'Palavra Copiada para área de transferência';
}


