/*---sum of Array---
var array=[20,30,40,50];
var sum=0;
for(let i=0;i<=array.length-1;i++)
    {
        sum+=array[i];
    }
console.log(sum);
    */

//----sum using functions----
function sumArray(arr){
    let sum=0;
    for(let i=0;i<=arr.length-1;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}   
var a=sumArray([20,30,40,60]);
console.log(a);

/*---even in an array-----
function getEven(arr){
    var evenNum=[];
    for(i=0;i<=arr.length-1;i++)
    {
        if(arr[i]%2==0){
            evenNum.push(arr[i]);
        }}
        return evenNum;
}
var a=getEven([20,33,41,60]);
console.log(a);
*/

/*fetchiong dulicate ------
function duplicateArray(aar)
{
    var dup_arr=[];
    for(i=0;i<=aar.length-1;i++){
        for(j=i+1;j<=aar.length-1;j++)
        {
            if(aar[i]==aar[j]){
                dup_arr.push(aar[i]);

            }
    }}
    return dup_arr;
}

var ab=[12,12,41,41,95,12,75,12,45,78,98,78,45]
var a=duplicateArray(ab)
console.log(a)
*/

/*---max valuue in an array----
function MaxArray(aar)
{
    var max_arr=aar[0];
    for(i=0;i<=aar.length-1;i++){
        
            if(max_arr<aar[i]){
               max_arr= aar[i];

            }
    }
    return max_arr;
}

var ab=[12,12,41,41,95,12,75,12,45,78,98,78,45]
var a=MaxArray(ab)
console.log(a)
*/

/*----sorting---
function sortArray(arr){
    var sorted_arr=[];
    for(let i=0;i<=arr.length-1;i++){
        for(let j=i+1;j<=arr.length-1;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j];
                arr[j]=temp;

            }
        }

    }
    return arr;

}
var ab=[12,12,41,41,95,12,75,12,45,78,98,78,45]
var a=sortArray(ab)
console.log(a)
*/