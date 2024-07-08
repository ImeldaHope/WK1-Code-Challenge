//Importing readline module for command line input
const readline = require('readline');

//Creates readline interface to read from command line
const speedInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Prompting user input:
speedInput.question('Please enter your speed in numbers: ',(speedValue) => {
 
    const momentum = parseFloat(speedValue);


    //Generates speeding tickets based on speed limit of 70.
    //Creates a demerit point on every 5 km/h above speed limit and suspends license for 12 or more demerits.

    function speedTicket(speed = 85){
        const speedLimit = 70;

        //Checks if speed is greater than limit. Otherwise returns 'Ok'.
        if(speed > speedLimit){
            const demerit = Math.floor((speed - speedLimit)/5);

            //Checks if the demerit points is above 12 thus suspending license. Otherwise returns points awarded.
            if(demerit > 12){
                console.log("License suspended");                
                return `License suspended`;
            } else {
                console.log(`Points: ${demerit}`);
                return `Points: ${demerit}`;
            }       
        } else {
            console.log("Ok");
            return `Ok`;
        } 
    }

    speedTicket(momentum)

    speedInput.close();          
})
