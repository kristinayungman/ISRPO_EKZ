const answer= document.querySelector('#answer');
const quest= document.querySelector('#quest');
const btn= document.querySelector('.btn');

const text=['Да','Нет','Неуверен','Абсолютно','Не могу сказать','Точно да','Никогда'];
btn.addEventListener('click',() => {
    if(quest.value == "")
    {
     alert('Заполните вопрос');
     return 0;
    }
    answer.value = text[Math.floor(Math.random()*text.length)];
})