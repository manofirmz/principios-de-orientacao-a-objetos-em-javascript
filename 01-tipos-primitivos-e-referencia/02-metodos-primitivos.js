
;(function(){
    'use strict';

    // Métodos primitivos

    var name = 'Rafael';
    var lowerCaseName = name.toLowerCase();
    var firstLetter = name.charAt(0);
    var middleOfName = name.substring(2, 4);
    var count = 10;
    var fixedCount = count.toFixed(2);
    var hexCount = count.toString(16);
    var flag = true;
    var stringFlag = flag.toString();

    console.log(lowerCaseName);
    console.log(firstLetter);
    console.log(middleOfName);
    console.log(fixedCount);
    console.log(hexCount);
    console.log(stringFlag);

}());
