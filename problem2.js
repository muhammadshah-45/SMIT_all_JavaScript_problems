
// var fruitName = 'apple';

function fruitName(name) {
    switch (name){
        case "apple":
            console.log("apple price: per kilo 200" );
            break ; 
        case "strawberry":
            console.log("strawberry price: per kilo 320 ");   
            break;
        default:
            console.log("invalid data ");     
    }

}

fruitPrice("strawberry")