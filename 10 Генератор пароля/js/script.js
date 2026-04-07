const upper= document.querySelector('#upper');
const lower= document.querySelector('#lower');
const number= document.querySelector('#number');
const symbol=document.querySelector('#symbol');
const btn = document.querySelector('.gen');
const result=document.querySelector('#result');
const range=document.querySelector('#range');
btn.addEventListener('click',()=>{
    let chars='';
    let password='';
    if (upper.checked){
        chars +='QWERTYUIOPASDFGHJKLZXCVBNM';
    }
    if(lower.checked){
        chars+='qwertyuiopasdfghjklzxcvbnm';
    }
    if(number.checked)
    {
        chars +='1234567890';
    }
    if(symbol.checked){
        chars +='@&*!';
    }
    if(chars==''){
        result.textContent='Нет условий';
       
    }
    else
        {
           for (let i = 0; i < range.value; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
            }
    result.value = password;
        }
})