// Will always be sorted

// Counter Solution
function countUniqueValues(array){
    let counter = {};

    for(const value of array){
        console.log(value)
        counter[value] = counter[value] ? counter[value] + 1 : 1;
    }

    return Object.keys(counter).length;
}

// Pointer Solutions

function countUniqueValues2(array){
    if(array.length === 0) return 0;
    let i = 0;
    let j = 1;

    while(j < array.length){
        if(array[i] === array[j]) {
            j++;
        } else {
        //  array[i+1] = array[j]
        //  i++
            i++;
            array[i] = array[j];
        }
    }
    return i+1;
}
countUniqueValues2([1,1,1,1,2,3,3,3,3,3,4,4,4,4,4,4]);