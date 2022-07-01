const orderSet = new Set([
    'Pasta', 
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza'
]);

console.log(orderSet)

console.log(new Set('JONAS'))

console.log(new Set())

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');

console.log(orderSet)

orderSet.delete('Risotto');
console.log(orderSet)

for (const order of orderSet) {
    console.log(order)
}

orderSet.clear();
console.log(orderSet)

///////////////////////////////////

const staff = ['Waiter' , 'Chef' , 'Waiter' , 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = new Set(staff);
const uniqueStaffArr = [...new Set(staff)];
console.log(uniqueStaff);
console.log(uniqueStaffArr);
console.log(new Set(['Waiter' , 'Chef' , 'Waiter' , 'Manager', 'Chef', 'Waiter']).size);