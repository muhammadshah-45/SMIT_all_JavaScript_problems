
function vehicleType(type) {
    switch (type) {
        case 'C':
            return 'C for car';
        case 'M':
            return 'M for motorcycle';
        case 'T':
            return 'T for truck';
        default:
            return 'Unknown Vehicle Type';
    }
}
console.log(vehicleType('C'));