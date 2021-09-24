/*const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];



let ulBand = document.querySelector('#bands');

let sortWithout = bands
    .sort((first, second) => {
        if (first.indexOf('The') === 0 || first.indexOf('A') === 0 || first.indexOf('An') === 0) {
            let [article, word] = first.split(' ');
            if (article.length <= 3) {
                first = word;
            }
        }
        if (second.indexOf('The') === 0 || second.indexOf('A') === 0 || second.indexOf('An') === 0) {
            let [article, word] = second.split(' ');
            if (article.length <= 3) {
                second = word;
            }
        }
        if (first > second) {
            return 1;
        } else {
            return -1;
        }
    })
    .map(band => {
        let li = document.createElement('li');
        li.textContent = `${band}`;
        ulBand.appendChild(li);
    });

*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------
/*    WES METHODES  */
//-----------------------------------------------------------------------------------------------------------------------------------------------------
/**/

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
};

let sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join("");



const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];