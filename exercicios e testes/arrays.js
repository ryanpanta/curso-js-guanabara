let num = [2, 21, 4, 7]

num.sort(function(a, b){
    return a - b;
})

for(let i = 0; i < num.length; i++)
    console.log(num[i])

console.log("\n")

for(let i in num)
    console.log(num[i])