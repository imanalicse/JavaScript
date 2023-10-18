let person = '{"name":"Iman\nAli", "address_1":"West shewrapara\\nMirpur","city":"Dhaka \n north"}';
let regex = /(?<!\\)\n/g; // Negative lookbehind - Matches "\n" only if "\n" is not preceded by "\".
person = person.replace(regex, "\\n") // Solution of parse - Uncaught SyntaxError: Bad control character in string literal in JSON at position 13 (line 1 column 14)
person = JSON.parse(person)
console.log(person)

let name = "Iman \n Ali";

document.getElementById("test").innerHTML = name;
