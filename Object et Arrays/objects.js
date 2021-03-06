// start with strings, numbers and booleans

let age = 100;
let age2 = age;
//console.log(age, age2);

age = 200;
//console.log(age, age2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

const team = players;
console.log(players, team);

// You might think we can just do something like this:
/*
team[3] = 'Lux';
console.log(team, players);
*/
// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

const team2 = players.slice(); // faire une copie du tableau et non une référence
team2[3] = 'Lux';
console.log(team2, players);

// one way

// or create a new array and concat the old one in

const team3 = [].concat(players);

// or use the new ES6 Spread

const team4 = [...players];

const team5 = Array.from(players);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:

/*
const captain = person;
captain.number = 99;
console.log(person);
*/

// how do we take a copy instead?

const captain2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(captain2, person);

// We will hopefully soon see the object ...spread

const captain3 = {...person };
console.log(captain3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
    name: 'wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
}

const dev = Object.assign({}, wes);
dev.name = 'Wesley';
dev.social.twitter = '@coolman;' //En modifiant au 2eme niveau cela modifie les 2 objet car Object.assign ne copie que 1 niveau

console.log(wes, dev);

//Pour copier sur tout les niveau mais peu recomander par Wes
const dev3 = JSON.parse(JSON.stringify(wes)); //Transforme en string avec JSON.stringify que l'on copie et retransforme imediatement ern object avec JSON.parse
dev3.social.twitter = '@UltraCoolMan';
console.log(wes, dev3);