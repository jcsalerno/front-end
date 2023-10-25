
        var numeroInicial = prompt('Informe o primeiro número: ');
        var sinal = prompt('Informe o sinal da sua operação: ');

        while(sinal != '-' && sinal != '+' && sinal != '*' && sinal != '/'){
            alert('Por favor, informe um sinal válido! ');
            sinal = prompt('Informe o sinal da sua operação: ');
        }

        var numeroFinal = prompt('Informe o segundo número:');

        //Função que transforma string em int no JS

        numeroInicial = parseInt(numeroInicial);
        numeroFinal = parseInt(numeroFinal);

        var resultadoFinal = 0;

        if(sinal == '+'){
            resultadoFinal = numeroInicial + numeroFinal;
        }else if(sinal == '-'){
            resultadoFinal = numeroInicial - numeroFinal;
        }else if(sinal == '*'){
            resultadoFinal = numeroInicial * numeroFinal;
        }else if(sinal == '/'){
            resultadoFinal = numeroInicial / numeroFinal;
        }

        alert('O resultado final é:' +resultadoFinal);
