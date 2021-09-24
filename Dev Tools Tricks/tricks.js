const dogs = [{
    name: 'Snickers',
    age: 2
}, {
    name: 'hugo',
    age: 8
}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular

// Interpolated
/*
console.log('Hello i am a %s shit!', 'piece');
// Styled
console.log('%c I am some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue');
*/
// warning!

console.warn('Be Carefull');

// Error :|
console.error('fuck shit !');

// Info

console.info('crocodiles eat 3-4 people per year');

// Testing

console.assert(1 === 2, "Non c'est faux Nico");

// clearing
/*
console.clear();
*/
// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together

dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log(` ${dog.name} is ${dog.age} year `);
    console.log(` ${dog.name} is ${dog.age + 7} year `);
    console.groupEnd(`${dog.name}`);

});
// counting

console.count('Wes');
console.count('Mike');
console.count('Wes');
console.count('Mike');
console.count('Wes');
console.count('Mike');
console.count('Mike');
console.count('Mike');
console.count('Mike');
console.count('Wes');
console.count('Mike');
console.count('Wes');
console.count('Mike');
console.count('Mike');
console.count('Wes');

// timing

console.time('fetching data');
fetch('https://api.github.com/users/websos')
    .then(data => data.json)
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });


//Table

console.table(dogs)