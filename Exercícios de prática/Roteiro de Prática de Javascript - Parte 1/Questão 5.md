5. Escreva um site com um script que solicite ao usuário três inteiros, calcule e imprima o produto deles. Veja o exemplo da figura 6.7 do Cap. 6 do livro dos Deitel. Siga a seguinte sequência de instruções:

a) Comente que o script calculará o produto de três inteiros 

b) Declare as variáveis x, y, z e result.

c) Declare as variáveis xVal, yVal e zVal.

d) Solicitar ao usuário que insira o primeiro valor, leia o valor do usuário e armazene-o na variável xVal.

e) Solicitar ao usuário que insira o segundo valor, leia o valor do usuário e armazene-o na variável yVal.

f) Solicitar ao usuário que insira o terceiro valor, leia o valor do usuário e armazene-o na variável zVal.

g) Converta a string xVal para um inteiro e armazene o resultado na variável x.

h) Converta a string yVal para um inteiro e armazene o resultado na variável y.

i) Converta a string zVal para um inteiro e armazene o resultado na variável z.

j) Calcule o produto dos três inteiros contidos nas variáveis x, y e z, e atribua o resultado à variável resultado.

k) Escreva uma linha de texto HTML5 contendo a string "O produto é " seguida do valor da variável resultado.


### Resposta

~~~
 <p id="writeInHTML5"></p>    
        <script>
            // O script calculará o produto de três inteiros
            var x, y, z, result;
            var xVal, yVal, zVal;
            xVal = window.prompt("Insira o primeiro valor:");
            yVal = window.prompt("Insira o segundo valor:");
            zVal = window.prompt("Insira o terceiro valor:");
            x = parseInt(xVal);
            y = parseInt(yVal);
            z = parseInt(zVal);
            resultado = x * y * z;
            document.getElementById("writeInHTML5").innerHTML = "O produto é " + resultado;
        </script>    
 ~~~
