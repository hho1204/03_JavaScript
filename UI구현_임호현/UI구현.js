

function applybtn(){
const width = Number(document.querySelector("#input1").value);
const height = Number(document.querySelector("#input2").value);
const fontsize = document.querySelector("#input3").value;
const fontjustbold = document.querySelector("#input4").value;
const fontbold = document.querySelector("#input5").value;
const uitextcolor = document.querySelector("#input6").value;
const background = document.querySelector("#input7").value
const horizontal = document.querySelector("#input8").value;
const vertical = document.querySelector("#input9").value;
const applytext = document.querySelector("#input10");

const square = document.querySelector(".square");

square.style.width = `${width}px`;
square.style.height = `${height}px`;
square.style.fontSize = `${fontsize}`;
square.style.color = "textcolor";
square.style.backgroundColor = "background";


}