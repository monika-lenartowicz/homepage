console.log('siema');
const name = "Monika Lenartowicz";
const age = "45";
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);

console.log("witaj geniuszu, skoro tu zaglądasz!");

const day__coten=document.querySelector('.day__coten');
console.log(day__coten);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[1]);

console.log(day__coten.innerHTML);
day__coten.innerHTML = "<strong>pozdro js<strong>";

if ('javascript' != 'java'){
   console.log("to prawda")
}

function calculate(x) {
   x = x + 3;
   console.log(x);
   return x*7;
}
console.log(calculate(2));
const myCalculation = calculate(4);
console.log (myCalculation);

const calculateFat = (x) => {
   x = x + 3;
   console.log(x);
   return x*7;
}
console.log(calculateFat(2));

const calculateFatet = x => (x+3)*7;

console.log(calculateFatet(2));

const welcome = (name, age) => {
   console.log(`witaj ${name}, masz ${age} lat`);
}

welcome ('Monika', 45);