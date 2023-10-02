const oper = prompt('Choose operation(add, dif, mult, div)')
const num1 = parseFloat(prompt('Enter first number'))
const num2 = parseFloat(prompt('Enter second number'))
if (isNaN(num1) || isNaN(num2)){
    alert('Wrong number') 
} else {
    let result 

    switch (oper) {
        case 'add':
            operSign = '+'
            result = num1 + num2
            break;
        case 'dif':
            operSign = '-'
            result = num1 - num2
            break;
        case 'mult':
            operSign = '*'
            result = num1 * num2
            break;
        case 'div':
            operSign = '/'
            result = num1 / num2
            break;
    
        default: 
        alert('Wrong Operation') 
            break;
    }
    if (result !== undefined ){
        alert(`${num1} ${operSign} ${num2} = ${result}`)
    }
}