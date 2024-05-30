/* Pattern Question Solving Tick

1.) For the Outer Loop, count the No. of Lines
2.) For the Inner Loop, focus on the Columns & Connect them somehow to the Rows
3.) Print them '*' inside the Inner for-loop
4.) Observe symmetry [optional]

*/

/*
    * * * * 
    * * * * 
    * * * * 
    * * * *
*/

// function patternQue1 (n) {
//     let pattern = "";
//     for (let i=0; i<n; i++) {
//         for(let j=0; j<n; j++) {
//             pattern = pattern + '* ';
//         }
//         pattern = pattern + '\n';
//     }
//     return pattern;
// }

// console.log(patternQue1 (4))

/*
    * 
    * * 
    * * * 
    * * * *
    * * * * *
*/

// function patternQue2 (n) {
//     let pattern = '';
//     for (let i=1; i<=5; i++) {
//         for (let j=0; j<i; j++) {
//             pattern = pattern + '* ';
//         }
//         pattern = pattern + '\n';
//     }
//     return pattern;
// }

// console.log(patternQue2 (5))

/*
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/

// let pattern = '';
// for (let i=1; i<=5; i++) {
//   for (let j=1; j<=i; j++) {
//     pattern = pattern + j;
//   }  
//   pattern = pattern + '\n'
// }

// console.log(pattern)

/*
    1
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5
*/

// let pattern = '';
// for (let i=1; i<=5; i++) {
//     for (let j=0; j<i; j++) {
//         pattern = pattern + i;
//     }
//     pattern = pattern + '\n';
// }

// console.log(pattern)

/*
    * * * * * 
    * * * * 
    * * * 
    * * 
    * 
*/

// let n = 5;
// let pattern = '';

// for (let i=1; i<=n; i++) {
//     for (let j=0; j<=n-i; j++) {
//         pattern = pattern + '* '
//     }
//     pattern = pattern + '\n';
// }

// console.log(pattern)

/*
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
*/

// let n = 5;
// let pattern = '';

// for (let i=1; i<=n; i++) {
//     for (let j=1; j<=n-i+1; j++) {
//         pattern = pattern + ` ${j}`;
//     }
//     pattern = pattern + '\n'
// }

// console.log(pattern)

/*
        *
      * * *       
    * * * * *     
  * * * * * * *   
* * * * * * * * * 

*/

// let n = 5;
// let pattern = '';

// for (let i=0; i<n; i++) {
//     //Space
//     for (j=0; j<n-i-1; j++) {
//         pattern = pattern + '  ';
//     }
//     //Star
//     for (j=0; j<2*i+1; j++) {
//         pattern = pattern + '* ';
//     }
//     //Space
//     for (j=0; j<n-i-1; j++) {
//         pattern = pattern + '  ';
//     }
//     pattern = pattern + '\n';
// }

// console.log(pattern)

