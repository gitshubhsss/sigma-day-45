/*Create a button on the page using JavaScript Add an event listener to the button that changes the buttons color to green when it is clicked */

let btn=document.querySelector('button');

btn.addEventListener("click",()=>{
    btn.style.backgroundColor="blue";
})