// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here

let i=0;
while(i <= 3){
    if(i === 0){
minScore = scores[i];
i++;
    }
    if(i > 0 && minScore < scores[i]){
        i++;
    }else {
        minScore = scores[i];
        i++;
    }
}
console.log(minScore);
