
;(function(){
    'use strict';

    /**
        Tipos primitivos:
        String = '', ""
        Number = 1, 1.2
        Boolean = true, false
        Undefined = undefined
        Null = null

        O operador typeof identifica tipos primitivos
        Null deve ser comparado stritamente com ele mesmo (null === null), 
        do contrario retorna object (typeof null)
    */

    var name = 'Rafael';
    var int = 1;
    var float = 1.2;
    var flag = true;
    var empty = undefined; // empty;
    var nullValue = null;

    console.log('string:', typeof name);
    console.log('number:', typeof int);
    console.log('number:', typeof float);
    console.log('boolean:', typeof flag);
    console.log('undefined:', typeof empty);
    console.log('typeof null:', typeof nullValue);
    console.log('null === null?', null === null);

}());
