// function generateTable(){
//     for (let i=0;i <= 10; i++){
//         console.log(`=== column ${i} ===`);
//         for (let j = 0 ; j <= 10; j++){
//             console.log(`${i} * ${j} = ${i*j}`);
//         }
//     }
// }
// generateTable();
const textBlock = document.getElementById('textBlock');
const button = document.getElementById('colorChanger');
button.onclick = () => {
    textBlock.style.color = 'red';
}