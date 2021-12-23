let n = [12, 13, 25, 55, 100, 110, 135];
// function mymin(n){
//     let len = n.length; 
//     let max = -Infinity; 
//     while(len--){
//         if(n[len] > max){
//             max = n[len]
//         }
//     } 
//     console.log(max);
// }
// mymin(n);
// const cars = [
//     {name: 'Nexa', year:2010},
//     {name: 'Honda', year:2005},
//     {name: 'Suzuki', year:2007}
// ]
// // console.log(cars.sort(function(a,b){return a.year - b.year}));
// console.log(
//     cars.sort(
//         function(a,b){
//             a = a.name.toLowerCase(); 
//             b = b.name.toLowerCase();
//             if(a < b){return -1;}
//             if(a > b){return 1;} 
//             return 0;
//         }
//         )
//     );
console.log(n.reduce(myfun, 50));
function myfun(total, value, index,array){
    // console.log(array);
    return total + value;
}

