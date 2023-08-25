//Print odd numbers in an array using Anonymouy function


let addNo=function(fullArrays){

    for(let value of fullArrays){
        if (value %2 !==0){
            console.log(value);
        }
    }

}
let fullArrays=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
addNo(fullArrays);