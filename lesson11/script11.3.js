const button = document.getElementById('colorChanger');
const text = document.getElementById('text');
button.style.backgroundColor = 'pink';
button.style.color = 'white';
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
const changeColor = function(){
    text.style.color = 'green';
}
