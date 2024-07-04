
function stairCase(steps = 3){
    //loop through to create the steps 
    for(let i = 1; i <= steps; i++){
        //define the stair variable
        let stair = "";
        for(let j = 1; j <= i; j++){
            stair += '#';
        }        
        console.log(stair)        
    }       
}

stairCase();