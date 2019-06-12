
;(function(){
    'use strict';

    /**
        Declarações versus expressões de função
        Função declaradas são içadas (hoited) para o topo do contexto onde foram criadas
        Podem ser chamadas antes de serem criadas, já que o objeto function possui um nome
        Expressões de função não são içadas
        Como funções são objetos, podem ser usadas como qualquer outro tipo de referência
            como parametros de outras funções
            podem ser retornadas 
            podem ser atribuídas a variáveis
        O método sort() do objeto Array aceita uma função de comparação para 
        ordenas valores, já que seu comportamento padrão é converter todos os itens em string 
        e depois ordena-los.
    */

    // var result = add(1, 2);
    // console.log(result);

    // function add(x, y) {
    //     return x + y;
    // }

    // console.log(add(1, 2)); // add is not a function

    // var add = function add(x, y) {
    //     return x + y;
    // };

    // var fn = new Function('console.log("fn")');
    // var fun = fn;

    // fun();

    var items = [2, 1, 3, 5, 10, 4];

    console.log(items.sort()); // [ 1, 10, 2, 3, 4, 5 ]
    var result = items.sort(function(x, y) {
        return x - y;
    });
    console.log(result); // [ 1, 2, 3, 4, 5, 10 ]
    var reverse = result.slice().reverse(); // criar uma cópia usando o método slice()
    console.log(reverse); // apenas result.reverse() modifica a referência
    console.log(items);
    
}());
