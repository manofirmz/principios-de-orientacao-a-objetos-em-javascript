
;(function(){
    'use strict';

    // Arguments (Não é um array)

    function add(x, y) {
        return x + y;
    }

    console.log(add.length); // Retorna a aridade da função

    function sum() {
        var result = 0;
        var i = 0;
        var len = arguments.length;
        
        while (i < len) {
            result += arguments[i];
            i++;
        }

        return result;
    }

    console.log(sum(1, 2));
    console.log(sum(3, 4, 5, 6));
    console.log(sum(1));
    console.log(sum());

}());
