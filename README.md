# Calculadora Web

Este é um projeto de uma calculadora simples baseada na web, desenvolvida usando HTML, CSS e JavaScript.

## Funcionalidades

- Interface amigável e responsiva.
- Suporte para operações básicas: adição, subtração, multiplicação e divisão.
- Botão de limpar (`C`) para redefinir a calculadora.
- Função de backspace (`←`) para remover o último dígito inserido.
- Exibição interativa dos resultados na tela.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

- **index.html**: Contém a estrutura da calculadora, incluindo os botões e o display.
- **styles.css**: Define o estilo da calculadora, como layout, cores e fontes.
- **main.js**: Contém a lógica de funcionamento da calculadora, incluindo as operações e manipulações do DOM.

## Como Usar

1. Clone o repositório para sua máquina local.
2. Abra o arquivo `index.html` no seu navegador.
3. Utilize os botões da calculadora para realizar operações matemáticas.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Exemplo de Código

```html
<div class="calcular">
  <input type="text" class="display" disabled>
  <div class="buttons">
    <button type="button">7</button>
    <button type="button">8</button>
    <button type="button">9</button>
    <button type="button">*</button>
    <!-- Outros botões -->
    <button type="button">=</button>
  </div>
</div>
.calcular {
  width: 200px;
  margin: 100px auto;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #ff7f00, #ff0088);
}

.display {
  width: 100%;
  height: 40px;
  text-align: right;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 40px;
  font-size: 18px;
  background-color: white;
  color: black;
}

Esse README fornece uma visão geral do seu projeto, como ele funciona, e como os usuários podem utilizá-lo. Ele também inclui exemplos de código para ajudar os usuários a entenderem melhor a implementação.
