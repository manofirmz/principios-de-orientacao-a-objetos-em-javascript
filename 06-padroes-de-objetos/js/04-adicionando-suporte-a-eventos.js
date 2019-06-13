'use strict';

// Adicionando suporte à eventos em objetos junto ao uso de mixins

function EventTarget() {}

EventTarget.prototype = {
    constructor: EventTarget, 
    
    addListener: function addListener(type, listener) {
        if (!this.hasOwnProperty('_listeners'))
            this._listeners = [];
        
        if (!this._listeners[type])
            this._listeners[type] = [];
        
        this._listeners[type].push(listener);
    }, 

    removeListener: function removeListener(type, listener) {
        if (this._listeners && Array.isArray(this._listeners[type])) {
            var listeners = this._listeners[type];
            
            listeners.forEach(function(item, index) {
                if (listener === item)
                    listeners.splice(index, 1);
            });
        }
    }, 

    fire: function fire(event) {
        if (!event.target)
            event.target = this;
        
        if (!event.type)
            throw new Error("Event object missing 'type' property!");

        if (this._listeners && Array.isArray(this._listeners[event.type])) {
            var listeners = this._listeners[event.type];
            listeners.forEach(function(listener) {
                listener.call(this, event);
            });
        }
    }
};

var events = new EventTarget;

function handleMessageEvent(event) {
    console.log(event.data);
}

// events.addListener('message', handleMessageEvent);

// events.fire({
//     type: 'message', 
//     data: 'Hello world'
// });

// events.removeListener('message', handleMessageEvent);

// Mixin

function mixin(receiver, supplier) {
    for (var property in supplier)
        if (supplier.hasOwnProperty(property))
            receiver[property] = supplier[property];

    return receiver;
}

// Usando o mixin

/**
 * Neste exemplo, 
 * não faz o menor sentido person ser uma instância de EventTarget, 
 * fora o overhead de propriedades escritas por fora o objeto
 */

// var person = new EventTarget;

// person._name = 'Rafael';
// person.getName = function getName() {
//     // console.log(this._name);
//     this.fire({ type: 'namesaid', data: this._name });
// };

// function handleNameSaid(event) {
//     console.log(event.data);
// }

// person.addListener('namesaid', handleNameSaid);
// person.getName();

// Uma possivel solução

// function Person(name) {
//     this.name = name;
// }

// Person.prototype = Object.create(EventTarget.prototype);
// Person.prototype.constructor = Person;

// Person.prototype.sayName = function sayName() {
//     console.log(this.name);
//     this.fire({ type: 'namesaid', data: this.name });
// }

// var person = new Person('Rafael');

// Também não faz sentido Person ser um tipo EventTarget
// console.log(person instanceof Person);
// console.log(person instanceof EventTarget);

// E lá vamos nós...

// function Person(name) {
//     this.name = name;
// }

// mixin(Person.prototype, EventTarget.prototype);
// mixin(Person.prototype, {
//     constructor: Person, 
//     sayName: function sayName() {
//         console.log(this.name);
//         this.fire({ type: 'namesaid', data: this.name });
//     }
// });

// var person = new Person('Rafael');
// console.log(person instanceof Person);
// console.log(person instanceof EventTarget);

/**
 * Copiando as propriedades sem usar herança pseudoclássica e 
 * sem alterar a cadeia de protótipos de person
 */

var person = mixin(new EventTarget(), {
    name: 'Rafael', 
    sayName: function sayName() {
        this.fire({ type: 'namesaid', data: this.name });
    }
});

person.addListener('namesaid', function(event) {
    console.log(event.data);
});

// person.sayName();

/**
 * Nem tudo são flores, propriedades de acesso neste caso 
 * seriam convertidas para propriedades de dados, 
 * já que são criadas por atribuição e não usando Object.defineProperty()
 */

// Alterando o mixin

function mixin(receiver, supplier) {
    var keys = Object.keys(supplier);
    
    keys.forEach(function(property) {
        var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
        Object.defineProperty(receiver, property, descriptor);
    });

    return receiver;
}

var person = mixin(new EventTarget, {
    get name() {
        return 'Rafael';
    }, 

    sayName: function sayName() {
        // console.log(this.name);
        this.fire({ type: 'namesaid', data: this.name });
    }
});

// console.log(person.name);
// person.name = 'Felipe'; // Cannot set property name of #<EventTarget> which has only a getter
person.addListener('namesaid', function(event) {
    console.log(event.data);
});
person.sayName();
