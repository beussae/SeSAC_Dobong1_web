//for문 배열
let arr = [];
for(d=1; d<=100; d++)[
    arr.push(d)

]
console.log(arr)
//for문 배열의 합
let sum = 0;
for(d=0; d<=arr.length; d++){
    sum +=d;
}
console.log(sum)
//for of 문 배열의 합
let sum1 = 0;
for(let d of arr){
    sum1 += d
}
console.log(sum1)
//forEach문 배열의 합
let sum2 = 0;
arr.forEach(function(e){
    sum2 +=e
})
console.log(sum2)