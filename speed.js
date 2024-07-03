//Generates speeding tickets based on speed limit of 70.
//Creates a demerit point on every 5 km/h above speed limit and suspends license for 12 or more demerits.

function speedTicket(speed = 85){
    const speedLimit = 70;

    //Checks if speed is greater than limit. Otherwise returns 'Ok'.
    if(speed > speedLimit){
        const demerit = Math.floor((speed - speedLimit)/5);

        //Checks if the demerit points is above 12 thus suspending license. Otherwise returns points awarded.
        if(demerit >= 12){
            return `License suspended`;
        } else {
            return `Points: ${demerit}`;
        }       
    } else {
        return `Ok`;
    } 
}

speedTicket()


