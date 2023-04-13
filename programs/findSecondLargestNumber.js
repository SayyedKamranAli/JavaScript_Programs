let arr =[12,34,24,10,1, 35];
let le = arr.length;


function secondLargest(a, le){
    a.sort();
    let b =0;
    for( let i=le-1; i>=0; i--){
        if(a[i] != a[le-1]){
            b=a[i];
            break;
        }
    }
    return b;
}
let second_Largest =secondLargest(arr , le);
console.log('second_Largest', second_Largest)