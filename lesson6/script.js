

function deleteLetters(string,letters){
    let newLetter = ' ';
    let relevantLetter =' ';
    let outString;
    let newString = string;
    for (let i = 0; i < letters.length; i++){
        let newLetter = '';
        for (let j = 0; j < newString.length; j++ ){

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

        }
        string = newLetter;
        newString = string;



    }
    return newString;
}

let TestString = prompt('Please input your message');
let TestLetters = prompt ('please input letters you want to delete from that message');

console.log(deleteLetters(TestString,TestLetters));

