function deepClone(value) {
    if (value === null || typeof value !== 'object') {
        return value;
    }

    // Date
    if (value instanceof Date) {
        return new Date(value);
    }

    // Array
    if (Array.isArray(value)) {

        const result = [];
        for (const item of value) {
            result.push(deepClone(item));
        }
        return result;

    }

    // Object
    const clone = {};
    for (const key in value) {
        clone[key] = deepClone(value[key]);
    }
    return clone;
}


const dateTest = new Date("2024-02-14T10:30:00");

const objTest = {
  name: "Vaibhavi",
  numbers: [1, 2, 3],
  meta: {
    active: true,
    tags: ["js", "clone"],
    createdAt: new Date("2023-08-10")
  }
};

const arrTest = [
  1,
  "hello",
  [10, 20, [30,  7],  [10, 20, [30, 40]]],
  new Date("2020-05-15")
]

console.log("Date Test: ", deepClone(dateTest));
console.log("Object Test: ", deepClone(objTest));
// console.log("Array Test: ", deepClone(arrTest));

let cloneArr = deepClone(arrTest);
for(let i = 0; i < cloneArr.length; ++i){
    console.log(" Cloned: ", cloneArr[i]);
}