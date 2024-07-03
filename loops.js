
function stairCase(steps = 3){ 
    for(let i = 1; i <= steps; i++){
        let stair = "";
        for(let j = 1; j <= i; j++){
            stair += '#';
        }
        console.log(stair)        
    }       
}

stairCase();