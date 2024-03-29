let user=document.querySelector('#user');

user.addEventListener("input",function(){
    let para=document.querySelector('#para');
    para.innerText=(`${user.value}`)
});