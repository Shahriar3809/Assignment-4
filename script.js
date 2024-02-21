
function calculateMoney(ticketSale) {
    if(ticketSale < 0 || typeof ticketSale !== 'number') {
        return "Invalid Number";
    }
    const totalEaring = ticketSale * 120;
    const cost = 500 + (8 * 50);
    return totalEaring - cost;
}





function checkName(name) {
    if(typeof name !== "string") {
        return "invalid";
    } else {
        const inputName = name.toLowerCase();
        if(inputName.endsWith('a') || 
            inputName.endsWith('y') || 
            inputName.endsWith('i') || 
            inputName.endsWith('e') || 
            inputName.endsWith('o') || 
            inputName.endsWith('u') || 
            inputName.endsWith('w')) {
            return "Good Name";
    } else {
        return "Bad Name"
    }
    } 
}





function deleteInvalids(array) {
    if(!Array.isArray(array)) {
        return "Invalid Array";
    } else {
        let newArr = [];
        for(let item of array) {
            if(!isNaN(item) && typeof item === 'number') {
                newArr.push(item);
        }
    }
    return newArr;
    }
}



function password(obj) {
    if(typeof obj.name !== 'string' || typeof obj.siteName !== 'string' || typeof obj.birthYear !== 'number' || obj.birthYear.toString().length !== 4) {
        return "invalid"
    } else {
        const website = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
        const personName = obj.name;
        const year = obj.birthYear;
        const output = website + '#' + personName + '@' + year;
        return output; 
    }
}




function monthlySavings(arr,livingCost) {
    if(!Array.isArray(arr) || arr.length < 1 || livingCost < 0 || typeof livingCost !== 'number') {
        return "invalid input";
    } else {
        let income = 0;
        let tax = 0;
        for(let item of arr) {
            income += item;
            if(item >= 3000) {
                tax = tax + (item * (20/100));
            }
    }
    const totalEaring = income - tax;
    const savings = totalEaring - livingCost;
    
    if(savings < 0) {
        return "earn more"
    } else {
        return savings;
    }
    }
}

