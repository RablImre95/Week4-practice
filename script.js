const data = ["one", "two", "three", "four", "five", "six", "seven"]

/*data.forEach((element, index, array) => {
    console.log(`The ${index}. element of the "${array}" array is: ${element} `)    
}) */

//FOREACH - DOES NOT HAVE RETURN VALUE --> UNDEFINED

/*const newData = [];
const result = data.forEach(element => newData.push(`new${element}`));
console.log(newData) */

/*const result = data.map((element, index, array) => {
    console.log(`The ${index}. element of the "${array}" array is: ${element} `)
})
console.log(result); */

// MAP - ALWAYS HAS RETURN VALUE --> ARRAY WITH SAME LENGTH AS ORIGINAL ARRAY
/*data.map(element => `new${element}`)
console.log(result); */

/*const result = data.filter((element) => element.length > 3)
console.log(result) */

// const result = data.reduce((prev,curr) => prev + curr, "jéghidegmitiszol");
/*
1. prev: "jéghidegmitiszol"
    curr: "one"
    callback: pre + curr -> "jéghidegmitiszol + "one" -> "jéghidegmitiszolone"
2. prev: "jéghidegmitiszol"
    curr: "one"
    callback: pre + curr -> "jéghidegmitiszol + "two" -> "jéghidegmitiszolwo"

*/
// console.log(result)

// const result = data.reduce((prev,curr) => prev + curr);
/*
1. prev: "one"
    curr: "two"
    callback: prev + current -> "one" + "two" -> "onetwo"
2. prev: "onetwo"
    curr: "tthree"
    callback: prev + current -> "onetwo" + "three" -> "onetwothree"
*/
// console.log(result)

/*const result = data.find(element => element.length > 3);
console.log(result); */

const result = data.findIndex(element => element.length > 3);
console.log(result);