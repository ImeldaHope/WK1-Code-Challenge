//Sort array of numbers from lowest to highest

function bubbleSort(){
    const arr = [5,6,1,3,4,2]
    let num = arr.length;
    for(let i = 0; i < num-1; i++ ){
        for(let j = 0; j < num-1-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }        
    }
    return arr;
}
// console.log(bubbleSort());
bubbleSort();
