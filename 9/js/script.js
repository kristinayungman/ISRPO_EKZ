const btn = document.querySelector('.btn');
const lastname = document.querySelector('#lastname');
const firstname = document.querySelector('#firstname');
const result = document.querySelector('#result');
const hobby = document.querySelector('#hobby');
const age = document.querySelector('#age');

btn.addEventListener('click', () => {
    
    if (!lastname.value || !firstname.value || hobby.value == 'n' || !age.value) {
        alert("Заполните все поля!");
        return;
    }
    if (age.value < 1 || age.value > 120) {
        alert("Возраст должен быть от 1 до 120");
        return;
    }
    const aaa = /^[а-яА-ЯёЁa-zA-Z\s\-]+$/;
    if ((lastname.value && !aaa.test(lastname.value)) ||
        (firstname.value && !aaa.test(firstname.value))) {

        alert("Имя и фамилия должны содержать только буквы!");
        return;
    }

    let parts = [];
    console.log(parts);
    parts.push(lastname.value.slice(0, 3));
    parts.push(firstname.value.charAt(Math.floor(Math.random() * firstname.value.length)));
    parts.push(hobby.value);
    parts.push(age.value);

    parts = shuffle(parts);
    result.value = parts.join('');

})
//function shuffle(){}

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];


    }
    return array;
}

const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const number = document.querySelector('#number');
const symbol = document.querySelector('#symbol');
const btn1 = document.querySelector('.gen');
const result1 = document.querySelector('#result1');
const range = document.querySelector('#range');
btn1.addEventListener('click', () => {
    let chars = '';
    let password = '';
    if (upper.checked) {
        chars += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    }
    if (lower.checked) {
        chars += 'qwertyuiopasdfghjklzxcvbnm';
    }
    if (number.checked) {
        chars += '1234567890';
    }
    if (symbol.checked) {
        chars += '@&*!';
    }
    if (chars == '') {
        result1.textContent = 'Нет условий';

    }
    else {
        for (let i = 0; i < range.value; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars.charAt(randomIndex);
        }
        result1.value = password;
    }
})