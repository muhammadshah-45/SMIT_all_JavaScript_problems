var now = new Date();
var today = now.getDay();
var message;

switch(message) {
case 0 :
 message = "Weekend";
 break;
case 6 :
 message = "Weekend";
 break;
default :
 message = "Weekday";
}
alert(message);

var fruits = ["apples","bananas","oranges"];


for(j = 0; j < fruits.length; j++){
    switch (fruits[j]) {
        case "banana":
            alert("apple mil gya");
            break;
        case "bananas":
            alert("banana mil gya");
            break;
        case "oranges":
            alert("orange mil gya");
            break;    
        default:
            console.log("kch nhi mila yar");
    }
}