/*Try out the following events in Event Listner on your own :
	-mouseout
	-keypress
	-Scroll
	-load */

let box=document.querySelector('.box');
let user=document.querySelector('input');

box.addEventListener("mouseout",function(){
    console.log("in the div");
})

user.addEventListener("keypress",function(){
    console.log("you have press the key");
})