# Resumo das Aulas de Front-End

Este repositório contém os exemplos de código e informações abordados nas aulas de front-end. Cada seção abaixo corresponde a uma aula específica.

## Aula 1 - Introdução ao HTML

Nesta aula, introduzimos o HTML e criamos uma estrutura básica de página HTML.

## Aula 2 - HTML Básico

A segunda aula cobriu conceitos básicos do HTML, incluindo a marcação de texto, parágrafos e formatação de texto.

## Aula 3 - Inserindo Imagens

Nesta aula, aprendemos a inserir imagens em uma página HTML usando a tag `<img>`.

## Aula 4 - Estrutura de Página

A quarta aula focou na estrutura geral de uma página, incluindo cabeçalho, links e seções.

## Aula 5 - Menu de Navegação

Na quinta aula, criamos um menu de navegação usando listas não ordenadas e links.

## Aula 6 - Conteúdo Multimídia

A sexta aula abordou a incorporação de conteúdo multimídia, como vídeos e áudios, em uma página HTML.

## Aula 7 - SEO e SMO

Nesta aula, discutimos a importância do SEO (Search Engine Optimization) e SMO (Social Media Optimization). Abordamos conceitos e tags relacionadas ao SEO e SMO em uma página HTML.

## Aula 1 - CSS 

### Diferenças entre Classes e IDs em HTML e CSS

Classes e IDs são seletores usados em HTML e CSS para aplicar estilos e comportamentos a elementos específicos em uma página da web. Aqui estão as principais diferenças entre classes e IDs:

#### Sintaxe

- **Classes**: As classes são definidas no HTML usando o atributo `class` e no CSS usando um ponto (`.`) seguido pelo nome da classe (por exemplo, `.minha-classe`).
- **IDs**: Os IDs são definidos no HTML usando o atributo `id` e no CSS usando uma cerquilha (`#`) seguida pelo nome do ID (por exemplo, `#meu-id`).

#### Unicidade

- **Classes**: Pode ser aplicada a múltiplos elementos na mesma página. Você pode usar a mesma classe em vários elementos.
- **IDs**: Deve ser único em toda a página. Cada ID deve ser usado apenas uma vez. Se você usar o mesmo ID em vários elementos, isso é considerado inválido e pode causar problemas.

#### Especificidade

- **Classes**: São menos específicas do que IDs. Os estilos aplicados a uma classe afetarão todos os elementos que usam essa classe.
- **IDs**: São altamente específicos. Qualquer estilo aplicado a um ID terá precedência sobre qualquer outra regra de estilo, incluindo classes.

#### Reutilização

- **Classes**: São ideais para estilos que você deseja reutilizar em vários elementos.
- **IDs**: Geralmente são usados para elementos exclusivos, como cabeçalhos, rodapés ou elementos de alto nível que não se repetem na página.

#### Seletores em CSS

- **Classes**: São selecionadas usando o ponto (`.minha-classe`) em CSS.
- **IDs**: São selecionados usando a cerquilha (`#meu-id`) em CSS.

## Aula 1 - CSS - Continuação


Nesta aula, introduzimos o uso de CSS (Cascading Style Sheets) para estilizar elementos HTML. Abordamos vários conceitos-chave:

- **Seletores CSS**: Aprendemos a selecionar elementos HTML usando diferentes tipos de seletores, incluindo classes, IDs e seletores de atributos.

- **Estilização de Texto**: Demonstramos como aplicar estilos de texto, como cor e tamanho de fonte, a elementos HTML, incluindo cabeçalhos (`<h1>`) e parágrafos (`<p>`).

- **Fundo de Página**: Mostramos como definir imagens de fundo para elementos, personalizando o fundo de um contêiner específico.

- **Flexbox**: Introduzimos o conceito de flexbox e como ele pode ser usado para criar layouts flexíveis, como os contêineres `.d1`, `.d2`, e `.d3`.

- **Animação CSS**: Demonstramos como criar animações com CSS usando a propriedade `@keyframes`, que é usada no elemento `.d4anim`.


## Aula 8 - Formulários em HTML e CSS

Nesta aula, exploramos a criação de formulários em HTML e aplicamos estilos a esses formulários usando CSS. Aqui estão os principais conceitos abordados:

- **Estrutura de Formulário HTML**: Aprendemos a criar formulários HTML usando elementos como `<form>`, `<input>`, `<textarea>`, e `<button>`. Cada um desses elementos desempenha um papel fundamental na coleta de informações dos usuários.

- **Estilização de Formulários**: Usamos CSS para estilizar nossos formulários. Aplicamos estilos aos campos de entrada de texto, campos de email e à área de texto. Também estilizamos o botão de envio para torná-lo atraente.

- **Fundos e Cores**: Personalizamos o fundo da página e dos elementos do formulário com cores e imagens de fundo.

## Aula 9 - JavaScript: Operações Matemáticas Básicas

Nesta aula, abordamos os seguintes tópicos:

- **Solicitar entrada do usuário**: Usamos o método `prompt` para solicitar números e operadores do usuário.

- **Verificação de sinal**: Utilizamos um loop `while` para verificar se o operador fornecido é válido (ou seja, um dos quatro operadores: adição, subtração, multiplicação ou divisão).

- **Conversão de texto para número**: Usamos `parseInt` para converter as entradas do usuário, que são strings, em números inteiros (integers).

- **Realização de operações matemáticas**: Dependendo do operador inserido, realizamos a operação correspondente (adição, subtração, multiplicação ou divisão) e armazenamos o resultado na variável `resultadoFinal`.

- **Exibição do resultado**: Por fim, usamos `alert` para exibir o resultado ao usuário.

Esta aula fornece uma introdução às operações matemáticas básicas em JavaScript e como interagir com o usuário para realizar cálculos simples em um navegador da web.

## Aula 10 - Manipulação do DOM com JavaScript

Nesta aula, exploramos a manipulação do Document Object Model (DOM) usando JavaScript. Abaixo está um exemplo de código usado na aula:

```javascript
var p = document.getElementsByTagName('p');

for (var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + " algo -";
}