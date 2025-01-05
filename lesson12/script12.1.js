const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
let link;

const handleClick = (event) => {
    if (event.target.id === 'button1') {
        link = prompt('Please input your target page');
    } else if (event.target.id === 'button2') {
        window.location.href = link;
    }
};

button1.addEventListener('click', handleClick);
button2.addEventListener('click', handleClick);
