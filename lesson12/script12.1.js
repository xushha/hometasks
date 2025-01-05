const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
let link;

const handleClick = (event) => {
    if (event.target.id === 'button1') {
        link = prompt('Please input your target page');
        try {
            new URL(link);
        } catch (e) {
            alert('Invalid URL');
            link = null;
        }
    } else if (event.target.id === 'button2') {
        if (link) {
            window.location.href = link;
        } else {
            alert('Please enter valid URL');
        }
    }
};

button1.addEventListener('click', handleClick);
button2.addEventListener('click', handleClick);
