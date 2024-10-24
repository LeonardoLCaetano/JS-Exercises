
/*EXERCISE 1*/
function convertToFahrenheit(celsius){

    return ((celsius * 9 / 5) + 32);
}



function convertToCelsius(fahrenheit){

    return (fahrenheit - 32) * 5 / 9;
}



function convertTemperature(degrees, unit){
    if(unit === 'C'){
        const result = convertToFahrenheit(degrees);
        console.log(`${result}F`)
    } else if(unit === 'F'){
        const result = convertToCelsius(degrees);
        console.log(`${result}C`)
    }
}

convertTemperature(30, 'C')
convertTemperature(100, 'F')

/*EXERCISE 2*/

function convertLength(length, from, to){
    if(from === 'km' && to === 'miles'){
        return `${length * 1.6} km.`
    } else if(from === 'miles' && to === 'km'){
        return `${length / 1.6} miles.`
    } else if(from === to){
        return `${length} ${to}.`
    }
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));

/*EXERCISE 3*/
function updatedLengthConvert(length, from, to){
    if(from === 'km' && to === 'miles'){
        return `${length * 1.6} km.`
    } else if(from === 'miles' && to === 'km'){
        return `${length / 1.6} miles.`
    } else if(from === to){
        return `${length} ${to}.`
    } else if(from === 'km' && to === 'ft'){
        return `${length * 3281} ft.`
    } else if(from === 'miles' && to === 'ft'){
        return `${length * 5280} ft`
    }
} 

console.log(updatedLengthConvert(22, 'km', 'ft'))
console.log(updatedLengthConvert(35, 'miles', 'ft'))