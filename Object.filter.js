function filterObject(test) {
    const t = {}
    for (let o in this) {
        if (test(this[o])) t[o] = this[o]
    }
    return t
}


Object.prototype.filterObject = filterObject;

const obj = {a: 1, b: 2, c: 3, d: 4}
const filteredObject = obj.filterObject(value => value >= 2)

console.log(filteredObject);
