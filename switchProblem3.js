

var score = 102;

switch (true){
    case (score >= 30 &&  score <= 50):
        console.log("Fail");
        break;
    case (score >= 51 && score <= 70):
        console.log("Poor");
        break;
    case (score >= 71 && score <= 85):
        console.log("Good");
        break;
    case (score >= 86 && score <= 90):
        console.log("Very Good");
        break;
    case (score >= 91 && score <= 102):
        console.log("Excellent");
        break;
    default :
        console.log("Invalid Score");                    
}

// A) :- Good 
// B) :- Poor
// c) :- Excellent
// D) :- Invalid Score

console.log(sum(3,5)); 

function sum ( a ,b){
    console.log(a + b);
}
