// ! Laços de REpetição:

//!             Exemplo de Tabuadas
//* For
// i = indexador, vai controlar o numero de vezes

// Forma manual do for 
// let a = 0
// console.log(a = 0 + 1)  //a = 1
// console.log(a = a + 1) // a = 1 + 1 => a = 2
// console.log(a += 1) // a = 2 + 1 => a = 3
// console.log(++a) // a = 3 + 1 => a = 4
// console.log('Forma manual do for.')

//  for com j incrementando com i
for (let i = 0; i <= 10; i ++) {
   for(let j = 0; j <= i ; j ++){
    console.log(j)
   }
    console.log(i)
}

for (let i = 0; i <= 10; i ++) {
    for(let j = 0; j <= 10 ; j ++){
     console.log(`${i} * ${j} = ${i * j}`)
    }
     
 }
// * While
//* While ... Do

 