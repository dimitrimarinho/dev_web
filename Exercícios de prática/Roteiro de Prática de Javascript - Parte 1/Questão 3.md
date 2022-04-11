3. Escreva uma instrução JavaScript para realizar cada uma das seguintes tarefas:

a) Declare as variáveis c, thisIsAVariable, q76354 e number. Use a palavra chave var.

    var c, thisIsAVariable, q76354, number;

b) Exiba uma caixa de diálogo solicitando que o usuário insira um número inteiro. Mostre um valor padrão de 0 na caixa de diálogo. Veja a figura 6.5 do Cap. 6 do livro dos Deitel.

    window.prompt("Insira um número inteiro", 0)

c) Converta uma string em um inteiro e armazene o valor convertido na variável age. Suponha que a string esteja armazenada em stringValue. Veja a Figura 6.7 do Cap. 6 do livro dos Deitel.

    age = parseInt(stringValue)

d) Se o número de uma variável não for igual a 7, exiba "O número da variável não é igual a 7" em uma caixa de diálogo de mensagem.

    if (variavel != 7){
        window.alert("O número da variável não é igual a 7");
    }

e) Gere uma linha de texto HTML5 que exibirá a mensagem "This is JavaScript" no documento HTML5. Veja a figura 6.2 do Cap. 6 do livro dos Deitel.

    <p id="writeInHTML5"></p>
    <script>
        document.getElementById("writeInHTML5").innerHTML = "This is JavaScript";
    </script>

    Resposta melhor (Assim é independente da estrutura do documento HTML):
        document.write("<p>This is JavaScript</p>");