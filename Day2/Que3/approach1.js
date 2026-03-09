function commonElementFunc(a, b) {
    // Complexity: O(min(m,n))
    a.sort();
    b.sort();
    let i = 0, j = 0;
    let n = a.length, m = b.length;

    let result = [];
    while (i < n && j < m) {
        if (a[i] === b[j]) {
            result.push(a[i]);
            i++;
            j++;
            continue;
        }
        if (a[i] < b[j]) {
            i++;
        }
        else {
            j++;
        }
    }
    console.log(result);
}

// const a = [1,2,3,4,5];
const a = [1, 2, 3, "abc", 4, true, 5];
const b = [0, 1, 'abc', "mnp", 3, 5, 8, 9];


commonElementFunc(a, b);