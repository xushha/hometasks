// function declaration statement <- подвержен хостингу
// примитивные копируются значением, а реферальные - ссылками
// function definition expression <- не подвержен хостингу

// функція вищого порядку - функція може як аргумент приймати функцію та повертити функцію ( є не у всіх мовах програмув)
// почитать про EcmaScript
//IIFE
// function isEquivalent(s,l){
//     let result ;
//     if (s === l){
//         result = '';
//     } else{
//         result = s;
//     }
//     return result;
// }
//
// console.log(isEquivalent('a', 'a'));

// function deleteLetters(string,letters){
//     let newLetter = ' ';
//     for (let i = 0; i < string.length; i++){
//         for (let j = 0; j < letters.length; j++ ){
//             if (string.charAt(i) === letters.charAt(j)){
//                 continue;
//             } else if (string.charAt(i) !== letters.charAt(j)) {
//                 newLetter = newLetter + string.charAt(i);
//             }
//             console.log(newLetter);
//         }
//     }
//     return newLetter;
// }
// function deleteLetters(string,letters){
//     let newLetter = ' ';
//     for (let i = 0; i < letters.length; i++){
//         for (let j = 0; j < string.length; j++ ){
//             if (string.charAt(j) === letters.charAt(i)){
//                 continue;
//             } else {
//                 newLetter = newLetter + string.charAt(j);
//             }
//             console.log(newLetter);
//         }
//     }
//     return newLetter;
// }

function deleteLetters(string,letters){
    let newLetter = ' ';
    let relevantLetter =' ';
    let outString;
    for (let i = 0; i < letters.length; i++){
        for (let j = 0; j < string.length; j++ ){

                if (string.charAt(j) === letters.charAt(i)){
                    continue;
                } else {
                    outString = string.charAt(j);


                }
                if ( relevantLetter !== outString){
                    relevantLetter = outString;
                }
                else {
                    continue;
                }
            newLetter = newLetter + relevantLetter;

        } string = newLetter;
    } string = newLetter;
    return string;
}



console.log(deleteLetters('hello world', 'ld'));