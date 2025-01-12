const container = document.getElementById('container');
container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') alert(`You clicked on the ${event.target.id}`) ;
    else alert('You did not click on the button');
})


