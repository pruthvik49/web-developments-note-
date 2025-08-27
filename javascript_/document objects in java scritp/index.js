// // console.log("pruthvik")

// // // let box = document.getElementsByClassName("box")
// // // console.log(box)

// // // box[2].style.backgroundColor = "red"
// // document.getElementById("reb").style.backgroundColor = "red"
// document.querySelector(".box").style.backgroundColor = "green" is for only one or fist .box
// 
let boxes = document.querySelector(".contnr").children
console.log(boxes)
function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`

}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.Color = getRandomColor()
})

