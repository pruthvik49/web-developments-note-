// // console.log("pruthvik")

// // // let box = document.getElementsByClassName("box")
// // // console.log(box)

// // // box[2].style.backgroundColor = "red"
// // document.getElementById("reb").style.backgroundColor = "red"
// document.querySelector(".box").style.backgroundColor = "green" is for only one or fist .box
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
});