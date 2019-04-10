//test functions
console.log("Testing an invalid number (-1):");
heeHaw(-1);
console.log("Testing a valid number (50):");
heeHaw(50);


//from 1 through 100
/*for (var i = 1; i <= 100; i++) {
    //check for Hee
    if(i%3 == 0 && i%5 != 0){
        console.log("Hee");
    }
    //check for Haw
    if(i%5 == 0 && i%3 != 0){
        console.log("Haw");
    }
    //check for both
    if(i%3 == 0 && i%5 == 0){
        console.log("Hee Haw")
    }
    //other
    if(i%3 != 0 && i%5 != 0){
        console.log(i);
    }
}*/

//function without recursion
/*function heeHaw(num){
    if (num < 1 || typeof num != "number"){
        console.log("Invalid number!");
        return;
    }
    //from 1 through 1000
    for (var i = 1; i <= num; i++) {
        //check for Hee
        if(i%3 == 0 && i%5 != 0){
            console.log("Hee");
        }
        //check for Haw
        if(i%5 == 0 && i%3 != 0){
            console.log("Haw");
        }
        //check for both
        if(i%3 == 0 && i%5 == 0){
            console.log("Hee Haw");
        }
        //other
        if(i%3 != 0 && i%5 != 0){
            console.log(i);
        }
    }
}*/

//helper for testing
function heeHaw(num){
    recursiveHeeHaw(num, 1);
}

//function with recursion
function recursiveHeeHaw(num, current){
    if (num < 1 || typeof num != "number"){
        console.log("Invalid number!");
        return;
    }

    if(current < num){
        //check for Hee
        if(current%3 == 0 && current%5 != 0){
            console.log("Hee");
            recursiveHeeHaw(num, current+1);
        }
        //check for Haw
        if(current%5 == 0 && current%3 != 0){
            console.log("Haw");
            recursiveHeeHaw(num, current+1);
        }
        //check for both
        if(current%3 == 0 && current%5 == 0){
            console.log("Hee Haw");
            recursiveHeeHaw(num, current+1);
        }
        //other
        if(current%3 != 0 && current%5 != 0){
            console.log(current);
            recursiveHeeHaw(num, current+1);
        }
    }
}