
;(function(){
    'use strict';

    /** 
        Mudando o this
        call = this, parametros nomeados, 
        apply = this, array contendo todos os parametros, 
        bind = this, parametros nomeados (opcional)
    */

    function sayNameForAll(label) {
        return label + ': ' +  this.name;
    }

    var rafael = {
        name: 'Rafael'
    };

    var felipe = {
        name: 'Felipe'
    };

    // Call
    console.log(sayNameForAll.call(rafael, 'rafael'));
    console.log(sayNameForAll.call(felipe, 'felipe'));

    // Apply
    console.log(sayNameForAll.apply(rafael, ['rafael']));
    console.log(sayNameForAll.apply(felipe, ['felipe']));

    // Bind
    var sayNameForRafael = sayNameForAll.bind(rafael, 'rafael');
    var sayNameForFelipe = sayNameForAll.bind(felipe);

    console.log(sayNameForRafael());
    console.log(sayNameForFelipe('felipe'));

}());
