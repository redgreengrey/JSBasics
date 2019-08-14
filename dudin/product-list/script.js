import initialList from "./initial-product-list.js";

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