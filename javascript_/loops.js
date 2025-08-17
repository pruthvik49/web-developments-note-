console.log("this is the loops tutorial")
let a = 1
for ( let i = 0; i < 10; i++) {
    console.log(a + i)
}

let obj = {
    name: "pruthvik",
    role: "fucker",
    compony :"bajar"
}
for (const key in obj){
    console.log(key)
}
for (const key in obj){
    const element = obj[key];
    console.log(key, element)
}
for (const name of "pruthvik") {
    console.log(name)
}
let i = 0;
while(i<6){
    console.log(i)
    i++;
}
let p = 0;

do {
    console.log(p)
    i++;
    
} while (i<6);