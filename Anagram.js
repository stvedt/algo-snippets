function anagram(string1, string2){
    if (string1.length !== string2.length){
        return false;
    }

    let letterCount1 = {};
    let letterCount2 = {};
    for(let i = 0; i < string1.length; i++) {
        const letter1 = string1[i];
        letterCount1[letter1] = (letterCount1[letter1]) ? letterCount1[letter1] + 1 : 1;

        const letter2 = string2[i];
        letterCount2[letter2] = (letterCount2[letter2]) ? letterCount2[letter2] + 1 : 1;
    }
//     console.log(letterCount1);
//     console.log(letterCount2);

    for(let i = 0; i < string2.length; i++) {// loop through one set of keys instead
        const letter = string1[i];
        if ( letterCount1[letter] !== letterCount2[letter] ) return false;
    }
    return true;

}


anagram('cinem','asenic');

anagram('steve', 'sven'); // false

// anagram('bba','bab');