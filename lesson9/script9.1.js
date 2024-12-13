const company = {
    sales: [
        { name: 'Jhon', salary: 1000 },
        { name: 'Alice', salary: 600 },
        { name: 'Bob', salary: 1200 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
            { name: 'Max', salary: 600 },
        ],
        internals: [
            { name: 'Jack', salary: 1300 },
        ]
    }
}

function totalSales(company) {
    let salarySum = 0;
    for (let el in company) {
        if (Array.isArray(company[el])) {
            company[el].forEach(employee => {
                salarySum += employee.salary;
            });
        } else if (typeof company[el] === 'object') {
            salarySum += totalSales(company[el]);
        }
    }

    return salarySum;
}

const total = totalSales(company);
console.log(total);