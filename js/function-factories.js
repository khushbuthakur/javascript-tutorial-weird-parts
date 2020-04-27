function makeGreetings(language) {
    return function (firstName = "Guest", lastName = "User") {
        let whatToSay = "Hi";
        switch (language) {
            case 'en':
                whatToSay = "Hello";
                break;
            case 'es':
                whatToSay = "Hola";
                break;
            case 'hin':
                whatToSay = "Namaste";
                break;
        }

        return function(fromCity = "Mumbai"){
            console.log(`${whatToSay} ${firstName} ${lastName} from ${fromCity}`);
        }
    }
}


let hindiGreeting = makeGreetings('hin')('Khushbu', 'Thakur')();

// Namaste Khushbu Thakur from Mumbai

let englishGreeting = makeGreetings('en');
englishGreeting('John', 'Doe')('London');

// Hola John Doe from London

let spanishGreeting = makeGreetings('es');
spanishGreeting('Mercille', 'Lisbon')('Spain');

// Hola Mercille Lisbon from Spain

let randomGreeting = makeGreetings()()();

// Hi Guest User from Mumbai


