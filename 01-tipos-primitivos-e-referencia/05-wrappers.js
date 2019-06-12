
;(function(){
    'use strict';

    /** 
        Tipos wrappers primitivos: 
        String, 
        Number, 
        Boolean
        
        São criados internamente apenas quando são lidos
        Não é aconselhado criar tipos wrappers
        instanceof não idenficar tipo wrappers como objetos
    */

    var name = 'Rafael';
    var temp = new String(name);
    var firstChar = temp.charAt(0);
    temp = null;
    // console.log(name.charAt(0)); // R
    console.log(firstChar); // R

    var str = 'Rafael';
    var temp = new String(str);
    temp.lastName = 'Felipe';
    temp = null;
    var temp = new String(str);
    temp = null;
    // str.lastName = 'Felipe';
    // console.log(temp.lastName); // Em strict mode retorna undefined

    var string = 'string';
    var number = 420;
    var boolean = false;

    console.log('string:', string instanceof String);
    console.log('number:', number instanceof Number);
    console.log('boolean:', boolean instanceof Boolean);

    // Problemas ao criar wrappers primitivos
    var string = new String('string');
    var number = new Number(420);
    var boolean = new Boolean(false);

    console.log('string', typeof string);
    console.log('number', typeof number);
    console.log('boolean', typeof boolean);

}());
