let inp=document.querySelector('input');
let ul=document.querySelector('ul');
let btn=document.querySelector('button');
let del=document.querySelector('.delete');
let tasks=document.createElement('li');
let delBtn=document.createElement('button')

btn.addEventListener("click",function(){
    delBtn.innerText="delete";
    tasks.innerText=inp.value;
    ul.appendChild(tasks)
    tasks.appendChild(delBtn)
    inp.value="";
})

