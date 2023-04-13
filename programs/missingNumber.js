let arr =[1,4,7,13];
function missingNumber(arr){
    let missArr =[];
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);
    for(let i=minNum; i<maxNum;i++){
        if(arr.indexOf(i)<0){
            missArr.push(i);
        }
    }
    return missArr;
}

const miss = missingNumber(arr);
console.log('miss', miss)