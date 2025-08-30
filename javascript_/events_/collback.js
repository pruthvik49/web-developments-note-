// console.log("pruthvik is learing java script from past month still fail in making project")

console.log("starting letter")
setTimeout(() => {
    console.log("i am inside time")
}, 2000);

console.log("last world")

const collaback = (arg)=>{
    console.log(arg)
}
const loadScript = (src, collaback) =>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = collaback("pruthvik");
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", collaback)
