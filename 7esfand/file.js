let multiplicationTable = {};

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    multiplicationTable[`${i}x${j}`] = i * j;
  }
}

for(key in multiplicationTable){
console.log(multiplicationTable["key"])
}