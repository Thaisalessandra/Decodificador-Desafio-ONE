
# Challenge ONE - Decodificador de Texto

Este projeto foi desenvolvido como resposta a um desafio proposto pelo programa ONE. Para concluir o desafio, foram necessárias habilidades em HTML, CSS e JavaScript. Além disso, foi necessário conhecimento sobre lógica computacional e a capacidade de interpretação para que fosse possível utilizar a API proposta.

Requisitos:
- Não utilize letras com acentos nem caracteres especiais
##
Por exemplo:
- %$áìó@

## Aprendizados

Desafio Programa ONE

- Responsividade
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
