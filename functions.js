/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', 'Hello Mattie Mungane' etc]
*/

export function greetUsers(customers) {
    const greetings = customers.map((customer => `Hello ${customer.first_name} ${customer.last_name}`));
    return greetings;
}

/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', etc]
*/

export function greetUsersOverAge60(customers) {
    const filteredGreetings = customers
        .filter(item => item.age > 60)
        .map(item => `Hello ${item.first_name} ${item.last_name}`);
    
    return filteredGreetings;
}


/* 
Output: 
4532
*/
export function addAllAges(customers) {

    return customers.reduce((accumulator, currentAge) => accumulator + currentAge.age, 0);
    
}

/* 
Output: 
4.5
*/

export function getAverageCoolFactor(customers) {
    const averageCool = customers
        .reduce((accumulator, currentCool) => accumulator + currentCool.cool_factor, 0);

    return Math.floor(averageCool / customers.length);
}

/* 
Output: 
{
    female: 4,
    male: 3,
    nonbinary: 2,
    etc . . .
}
*/

export function getTotalOfEachGender(customers) {
    return customers.reduce((accumulator, person) => {
        if(accumulator[person.gender]) {
            accumulator[person.gender]++;
        } else {
            accumulator[person.gender] = 1;
        }
        return accumulator;
    
    }, {});
}


/* 
Output: 
 {
    female: 3,
    male: 2,
    nonbinary: 1,
    etc . . .
 }
*/

export function getGenderBreakdownOfFordOwners(customers) {
    return customers.filter(vehicle => vehicle.car_make === 'Ford')
        .reduce((accumulator, person) => {
            if(accumulator[person.gender]) {
                accumulator[person.gender]++;
            } else {
                accumulator[person.gender] = 1;
            }
            return accumulator;
    
        }, {});
    
    
}
//////////////////////////////////////////////////////////
///////////// STRETCH GOALS /////////////////////////////
/////////////////////////////////////////////////////////

/* 
Output: 
{
    ford: {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    mercedes:  {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    etc . . .
}
*/

// export function getGenderBreakdownOfEachCar(customers) {
//     Object.keys(customers)
//         .filter((key) => key.includes('car'))
//         .reduce((accumulator, person) => {
//             return Object.assign(accumulator, {
//                 [person]: customers[person]
//             });},

//         {});
      
  
// }

/* 
Output: 
{
    ford: [3, 5, 4, 4, 7, 5],
    mercedes: [8, 5, 6, 8, 3, 9],
    honda: [2, 4, 4, 3, 7, 1],
    etc. . .
}
*/


export function getAllCoolFactorsOfEachCar(customers) {
    return true;
}

/* 
Output: 
{
    ford: 5.4
    mercedes:  8.5
    honda: 2.3
}
*/

export function getAverageCoolFactorOfEachCar(customers) {
    return true;
}


/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 55,
    20:  38,
    30: 12,
    40: 31,
    50: 62,
    60: 93,
    70: 45,
    80: 32,
    90: 11,
}
*/

export function makeAgeBrackets(customers) {
    return true;
}

/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: [3, 5, 4, 4, 7, 5],
    20: [8, 5, 6, 8, 3, 9],
    30: [1, 8, 4, 1, 9, 2],
    40: [2, 4, 4, 3, 7, 1],
    etc . . .
}
*/

export function getCoolFactorsByAgeBracket(customers) {
    return true;
}


/* 
Output: 
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 5.6,
    20: 3.1
    30: 7.8,
    40: 9.5,
    etc . . .
}
*/
function getBracket(customer) {
    return (Math.floor(customer.age / 10 * 10));
}
export function getAverageCoolFactorByAgeBracket(customers) {
    const arrayMap = 
    customers.reduce((acc, curr) => {
        const bracket = getBracket(curr);

        if(acc[bracket]) {
            acc[bracket].push(curr.cool_factor);
        } else {
            acc[bracket] = [curr.cool_factor];
        }
        return acc;
    }, {});

    for(let key of Object.keys(arrayMap)) {
        const coolArray = arrayMap[key];
        const sumCoolFact = coolArray.reduce((acc, curr) => acc + curr, 0);
        const average = sumCoolFact / coolArray.length;

        arrayMap[key] = average;
    }

    return arrayMap;
}

