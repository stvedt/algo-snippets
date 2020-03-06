let arrayOne = [1,2,1];
let arrayTwo = [1,1,4];

function same(array, arraySquared) {
    if(arraySquared.length !== array.length) return false;

    for (num in array) {
        for (let i = 0; i < arraySquared.length; i++){
            if (num*num === arraySquared[i]){
                arraySquared.splice(i, 1);
            }
        }
    }
    if (arraySquared.length === 0) return true
}

same (arrayOne, arrayTwo);