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

const [first,second] = restaurant.categories;
console.log(first,second);

const [one, , three] = restaurant.categories;
console.log(one, three);

console.log(restaurant.order(2,0))

const [starter, main] = restaurant.order(2,0);
console.log(starter,main)

////////////////////////////////////////

const nested = [2,4,[5,6]];

const [i, , j] = nested;
console.log(i,j)

const [x , , [y,z]] = nested;
console.log(x,y,z)

/////////////////////////////////////////

const [a,b,c] = [8,9]
console.log(a,b,c)

//////////////////////////////////////

const [d = 1, e = 1, f = 1] = [8,9]
console.log(d,e,f)