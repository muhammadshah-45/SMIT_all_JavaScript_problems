
// var light = "red";

function trafficLight(light){
    switch(true){
        case light === "red":
            console.log("Stop");
            break;
        case light === "yellow":
            console.log("Prepare to stop");
            break;
        case light === "green":
            console.log("Go!");
            break;
        default:
            console.log("Invalid light color");
            break;
    }
}

trafficLight("yellow");