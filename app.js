// hometask1
for (let i = 100; i < 1000; i += 10) {
    console.log(i);
  }

  
//   hometask2
let sum = 0;

for (let i = 10; i < 100; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}

console.log("Bütün ikirəqəmli tək ədədlərin cəmi:", sum);


// hometask3
const num = Number(prompt(" ədəd daxil edin:"));
let sum1 = 0;
for (let i = 100; i <= 999; i++) {
  if (i % num === 0) {
      sum1 += i;
  }
}
console.log(sum1 );