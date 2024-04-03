let inp=document.querySelector('input');
let ul=document.querySelector('ul');
let btn=document.querySelector('.addBtn');
let delBtn=document.createElement('button')
let p=document.querySelector(".addTask")
btn.addEventListener("click",function(){
    p.innerText=" ";
    let li=document.createElement('li');
    li.innerText=inp.value;
    let del=document.createElement('button');
    del.innerText="delete";
    li.appendChild(del)
    ul.appendChild(li)
    inp.value="";
})


ul.addEventListener("click",(event)=>{
   if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
   }
   if(ul.firstElementChild==null){
   p.innerText="add some task";
}

})


