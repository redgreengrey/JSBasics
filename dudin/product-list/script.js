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

let getReducedList = function (list) {
    return list.reduce((accumulator, currentElement) => {
        if (!!currentElement.price && currentElement.price < 80) {
            accumulator.push({...currentElement, discount: true});
        }
        return accumulator;
    }, []);
};

let getDiscountList = function (list) {
    let result = [];
    for (let item of list) {
        if (item.price < 80) {
            result.push({...item, discount: true});
        }
    }
    return result;
};

let getDiscountedListByMap = function (list) {
    return list.filter(item => item.price < 80).map(item => ({...item, discount: true}));
};

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
    createList('discountList', getReducedList(initialList));
    getReducedList(initialList).forEach(item => console.log(item));
    event.target.disabled = true;
}

discountButton.addEventListener('click', showDiscountProducts);