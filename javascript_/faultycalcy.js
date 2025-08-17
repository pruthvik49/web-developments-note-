/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
let random = Math.random()
    let a = prompt(" ")
    let c = prompt(" ")
    let b = prompt(" ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}
if(random > 0.1){


}else{
    c = obj[c]
}