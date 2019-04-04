//from 1 through 1000
for (var i = 1; i <= 100; i++) {
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
}