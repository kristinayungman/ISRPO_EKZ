const resu = document.querySelector('#result');
const winnerBlock = document.querySelector('#winner'); 
let userScore = 0;
let compScore = 0;


const btn= document.querySelectorAll('.btn');
const result= document.querySelector('.game_container');
const choice=['✂️','🚀','📝'];
btn.forEach(item=>{
    item.addEventListener('click',()=>{
    let randomChoice= choice[Math.floor(Math.random()*choice.length)];
    const combinate = item.textContent + randomChoice;
    switch(combinate){
        case'🚀✂️':
        case'✂️📝':
        case'📝🚀':
        result.innerHTML=`<p>Победа</p>
        <p>Вы выбрали ${item.textContent}. Компьютер выбрал ${randomChoice}</p>`;break;
        case'✂️🚀':
        case'📝✂️':
        case'🚀📝':
         result.innerHTML=`<p>Поражение</p>
        <p>Вы выбрали ${item.textContent}. Компьютер выбрал ${randomChoice}</p>`; break;
        default :
         result.innerHTML=`<p>Ничья</p>
        <p>Вы выбрали ${item.textContent}. Компьютер выбрал ${randomChoice}</p>`; break;
    }
    })
})
