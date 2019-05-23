function balikKata(kata) {
    var a = kata.split("");
    var b = a.reverse();
    var c = b.join("");
    return c
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe')); 
console.log(balikKata('I am a bookworm')); 
console.log(balikKata('Coding is my hobby')); 
console.log(balikKata('Super')); 