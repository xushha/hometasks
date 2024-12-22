const textBlock = document.getElementById('textBlock');
const button = document.getElementById('colorChanger');

let clicks = 0;
button.addEventListener('click', () => {
    clicks++;
    if (clicks %2!== 0){
        textBlock.style.color = 'red';
    }else {
        textBlock.style.color = '';
    }

});