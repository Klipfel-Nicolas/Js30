const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];



function addItem(e) {
    e.preventDefault()

    const text = this.querySelector('[name=item]').value;

    const item = {
        text, //ECMA6 fait directement reference a la const text
        done: false
    };

    item.text = text;
    items.push(item);

    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items)); // 1er items est le nom de key qu on donne dans localstorage, tout ce qu on met dans localStorage doit etre en string (pas objet, array ou number)
    this.reset(); // permet de reset le form apres validation (vide le champ input text);
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} >
                <label for="item${i}">${plate.text}</label>
            </li>
        `
    }).join("");
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // si le click ne corespond pas a un ipute return rien;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone)

populateList(items, itemsList);


// ---------------- EXO ----------------

let toggleAllBtn = document.querySelector('#check');
let deleteAllBtn = document.querySelector('#deleteAll');

let checkUncheck;


function toggleAll() {

    items.forEach(item => {
        if (item.done === true >= items.length) {
            checkUncheck = false;
        } else {
            checkUncheck = true;
        }
    });

    checkUncheck = !checkUncheck

    if (checkUncheck) {
        items.forEach(item => item.done = true);
    } else {
        items.forEach(item => item.done = false);
    }


    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
};

function deleteAll() {
    localStorage.clear();
    itemsList.innerHTML = "<li>Loading Tapas...</li>";

}


toggleAllBtn.addEventListener('click', toggleAll);
deleteAllBtn.addEventListener('click', deleteAll);