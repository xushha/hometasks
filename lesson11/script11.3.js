
const pic = document.createElement('img');
const picName = Math.floor(Math.random() * 9) + 1;
pic.src = `${picName}.jpg`;
pic.style.width = pic.style.height = '300px';
document.body.insertAdjacentElement('beforeend',pic);
