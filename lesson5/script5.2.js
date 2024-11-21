// task 5.2

const dollar = 26;
const euro= 43.95;
const uah = 1;
let equivalent;

const currency= prompt('Input please currency (usd, euro, uah)');

for (let i = 10; i <= 100; i += 10) {
    if (currency === 'usd') equivalent = dollar;
    if (currency === 'euro') equivalent = euro;
    if (currency === 'uah') equivalent = uah;
    console.log(`${i} ${currency} = ${Math.fround(i*equivalent)} uah`);
}

