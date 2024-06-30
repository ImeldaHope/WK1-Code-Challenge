//Generates speeding tickets based on speed limit of 70.
//Creates a demerit point on every 5 km/h above speed limit and suspends license for 12 or more demerits.

function speedTicket(speed = 85){
    const speedLimit = 70;

    if(speed > speedLimit){
        const demerit = Math.floor((speed - speedLimit)/5);

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


