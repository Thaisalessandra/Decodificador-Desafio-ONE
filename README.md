
# Challenge ONE - Decodificador de Texto

Este projeto foi desenvolvido como resposta a um desafio proposto pelo programa ONE. Para concluir o desafio, foram necessárias habilidades em HTML, CSS e JavaScript. O projeto tem como objetivo permitir que usuários criptografem textos, como também descriptografar textos com o mesmo padrão de criptografia.

Requisitos:
- Não utilize letras com acentos ou caracteres especiais
##
Por exemplo:
- %$áìó@

## Aprendizado


- Responsividade com MEDIA QUERIES
- Uso Clipboard API
- HTML
- CSS
- JavaScript

## Funcionalidades

- Criptografar textos
- Descriptografar textos 
- Copiar e colar textos


## Descubra qual é a mensagem criptografada❓

### 📋Copie o texto criptografado
```javascript
fufatncimesobernoberufatufatufat!   
```


## Como utilizar API Clipboard

#### Copiar elemento html

```javascript
function copiarTexto(){
    let elemento = document.querySelector(".input_texto");
    let copiaTexto = elemento.innerHTML;
    navigator.clipboard.writeText(copiaTexto);
}    
```


## Stack utilizada

**Front-end:** HTML, CSS, Bootstrap

**Back-end:** JavaScript

**Desafio concluído com sucesso! 💻✨**
