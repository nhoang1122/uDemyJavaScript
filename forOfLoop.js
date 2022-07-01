const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item)

for (const item of menu.entries()) {
    console.log(item)
}

console.log([...menu.entries()])

for (const items of menu.entries()) {
    console.log(`${items[0] + 1}  :  ${items[1]}`);
}

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1} : ${el}`)
}