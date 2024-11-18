/**this variable represents the case of task we want to see */
let task= parseInt(prompt("Please input what task you want to see . 1,2,3 or 4?" ));

switch(task) {
 //hw task 4.1
  case 1:{
      let name= prompt('What is your name?');
      alert(`Hello, ${name}. How are you?`);
      break;
  }
  //hw task 4.2
    case 2:{
        let answer1= false;
        let answer2= false;
        sum = (prompt('Please input your three digit number'));
        if(sum[0] === sum[1] && sum[1] === sum[2]){
            answer1 = true;
            answer2 = true;
        } else if (sum[0] === sum[1] || sum[1] === sum[2] || sum[2] === sum[0]) {
            answer2 = true;
        }
        alert(`Is it true that all numbers are equal? ${answer1}\n ` +`Is it true that we have equal numbers here? ${answer2}`);
        break;
    }

   //hw task 4.3
        case 3: {
            let userYear = prompt('Please input your year of birth');
            let userCity = prompt('Please input the name of the town you live: ');
            let userSport = prompt('What is your favourite sport ?');

            if (userYear === null){
                message = 'year of birth';
            } else if (userCity === null){
                message = 'your town'
            } else if( userCity === 'Kyiv'){
                userCity = 'Kyiv, the capital of Ukraine';
            } else if( userCity === 'London'){
                userCity = 'London, the capital of Great Britain';
            }
            else if( userCity === 'Washington'){
                userCity = 'Washington, the capital of USA';

            }
            switch (userSport){
                case 'football':
                    icon = ('Do you want to be new Lionel Messi?');
                    break;
                case 'basketball':
                    icon = ( 'Do you want to be new Shaquille O Neal');
                    break;
                case 'tennis':
                    icon = ( 'Do you want to be new Roger Federer');
                    break;
                case null:
                    message = 'your favourite sport';
                    break;
                default:
                    icon = '';
                    break;
            }

            if (userYear === null || userCity === null || userSport === null){
                alert(`I\`m sad you dont want to share your ${message} with me :(`)
            }else {
                alert(`You were born in ${userYear}. You live in ${userCity}. Your favourite sport is ${userSport}.${icon}`);
            }break;
        }

        // hw task 4.4
    case 4:{
        let numOrStr = prompt('input number or string');
        console.log(numOrStr);
        switch (true) {
            case numOrStr === null:
                console.log('ви скасували');
                break;
            case numOrStr.trim() === '':
                console.log('Empty string');
                break;
            case isNaN(+numOrStr):
                console.log('number is Ba_NaN');
                break;
            default:
                console.log('Ok!');
                break;
        }
    break;
    }

    default:{
        alert('Please choose the number of the above');
        break;
    }


}
