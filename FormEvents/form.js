//select the ids without using documet.queryselecot
let p=document.querySelector('p')
let form=document.querySelector('form');

form.addEventListener("submit",function (event){
    event.preventDefault();
    
    let user=this.elements[0];
    let pass=this.elements[1];

    p.innerText=(`username:${user.value}\npassward:${pass.value}`)
})