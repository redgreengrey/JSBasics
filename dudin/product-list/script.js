// import initialList from "./initial-product-list.js";

let initialList = [
    {
        title: 'apple',
        type: 'fruit',
        price: 50
    },
    {
        title: 'tomato',
        type: 'vegetable',
        price: 59
    },
    {
        title: 'watermelon',
        type: 'berries',
        price: 4
    },
    {
        title: 'avocado',
        type: 'fruit',
        price: 98
    },
    {
        title: 'pear',
        type: 'fruit',
        price: 23
    },
    {
        title: 'potatoes',
        type: 'root crop',
        price: 34
    },
    {
        title: 'radish',
        type: 'root crop',
        price: 12
    },
    {
        title: 'carrot',
        type: 'root crop',
        price: 29
    },
    {
        title: 'cucumber',
        type: 'vegetable',
        price: 11
    },
    {
        title: 'orange',
        type: 'fruit',
        price: 44
    },
    {
        title: 'mandarin',
        type: 'fruit',
        price: 25
    },
    {
        title: 'cabbage',
        type: 'vegetable',
        price: 19
    },
    {
        title: 'pumpkin',
        type: 'vegetable',
        price: 23
    },
    {
        title: 'strawberry',
        type: 'berries',
        price: 78
    },
];

const discountButton = document.getElementById('discountButton');

let redusedList = initialList.reduce((accumulator, currentElement) => {
    if (!!currentElement.price && currentElement.price < 80) {
        accumulator.push({...currentElement, discount: true});
    }
    return accumulator;
}, []);

let resultWithNoReduce = [];
for (let item of initialList) {
    if (item.price < 80) {
        resultWithNoReduce.push({...item, discount: true});
    }
}

function createList(ID, itemsList) {
    let element = document.getElementById(ID);
    if (!!element) {
        let ul = document.createElement('ul');
        element.appendChild(ul);

        itemsList.forEach(function (product) {
            let li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML += product.title + ': ' + product.price;
        })
    }
}

createList('productsList', initialList);

function showDiscountProducts(event) {
    console.log(event);
    createList('discountList', redusedList);
    event.target.disabled = true;
}

discountButton.addEventListener('click', showDiscountProducts);