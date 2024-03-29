let inp=document.querySelector('input');
let h1=document.querySelector('h1');

inp.addEventListener("keypress",function(event){

    if((event.charCode>=97 && event.charCode<=122) || (event.charCode>=65 && event.charCode<=90) || (event.code=="Space")) {
        h1.innerText=this.value;
    }
    else if(event.keyCode==8){
        event.preventDefault();
    }
    else{
        event.preventDefault();
    }
})

