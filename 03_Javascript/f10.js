let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];
let same = fruits1.filter(function(e){
    return fruits2.includes(e);
})
console.log(same)
let diff = fruits1.filter(function(e){
    return !fruits2.includes(e);
})
console.log(diff)

