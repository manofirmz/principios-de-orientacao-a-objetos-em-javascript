
;(function(){
    'use strict';

    /**
        Assinaturas e sobrecargas de funções
        Não existe sobrecarga de funções em JS
    */

    function fn(arg) {
        return arg;
    }

    function fn() {
        return 'fn!';
    }

    // var fn = new Function('arg', 'return arg;');
    // fn = new Function('return "fn!"');

    console.log(fn()); // fn!

    // Sobrecarga
    function fn(arg) {
        if (arg === undefined)
            return 'fn!';
        return arg;
    }

    console.log(fn('hello!'));
    console.log(fn());

}());
