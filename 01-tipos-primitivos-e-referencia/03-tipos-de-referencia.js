
;(function(){
    'use strict';

    /**
        Tipos de referência:
        Armazenam uma referência à um objeto na memória, 
        diferente de tipos primitivos que alocam o valor 
        ao objeto variável.

        Podem ser extendidos facilmente.
        Para apagar/remover a referência de objetos, basta atribuir o valor null
    */

    var object1 = new Object();
    var object2 = object1; 

    console.log(object1);
    console.log(object2);

    object1.myAwesomeProperty = 'Awesome';

    console.log(object2.myAwesomeProperty);

    object1 = null;

    console.log(object1);
    console.log(object2);

    // Instanciando tipos próprios

    var items = new Array();
    var now = new Date();
    var error = new Error('Something bad happened');
    var func = new Function('console.log("oi");');
    var object = new Object();
    var regExp = new RegExp('\\d+');

    console.log(items);
    console.log(now);
    console.log(error);
    console.log(func);
    console.log(object);
    console.log(regExp);

}());
