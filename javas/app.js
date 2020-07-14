// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// 1. Programma numeri da 1 a 100
// 2. multipli di 3 scrivere Fizz
// 3. multipli di 5 scrivere Buzz
// 4. multipli di 3 e 5 scrivere FizzBuzz
// CREATA VARIABILE
var multiplo;
// ASSEGNATO ALLA VARIABILE IL VALORE I
for (var i = 1; i <= 100; i++) {
    multiplo = i;

        if (i % 3 == 0 ) {
            multiplo = "Fizz"
        }
        else if (i % 5 == 0) {
            multiplo = "Buzz"
        }

        if (i % 3 == 0 && i % 5 == 0) {
            multiplo = "FizzBuzz"
        }

        console.log(multiplo);

}
