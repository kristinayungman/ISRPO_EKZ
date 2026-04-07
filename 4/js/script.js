const btn=document.querySelector('.btn_result');
const num=document.querySelector('#num');
const result= document.querySelector('.result');
const n= Math.floor(Math.random()*100);
let count=0;

console.log(n);
btn.addEventListener('click',()=>{
    count++;
    if(num.value==n){
        result.innerHTML=`Поздравляю. угадали число за ${count} попыток.`;
        result.style.backgroundColor = '#b8ee15';
        result.style.color = '#000000';
    }
    else{
        let i= Math.abs(n-num.value);
        switch(true){
            case i > 60 && i<=100:result.innerHTML="Мороз";result.style.backgroundColor = '#205264';
        result.style.color = '#0056b3'; break;
            case i > 40 && i<=60:result.innerHTML="Холодно";result.style.backgroundColor = '#a8d8ea';
        result.style.color = '#0056b3'; break;
            case i > 20 && i<=40:result.innerHTML="Теплее";result.style.backgroundColor = '#abf03e';
        result.style.color = '#b3ad00'; break;
            case i > 10 && i<=20:result.innerHTML="Горячо"; result.style.backgroundColor = '#eba20e';
        result.style.color = '#090909'; break;
            case i > 0 && i<=10:result.innerHTML="Очень горячо";result.style.backgroundColor = '#ff4c05';
        result.style.color = '#000000'; break;
        }
    }
})