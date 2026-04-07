const alertBox = document.querySelector('.alert_box');
const alertBtn = document.querySelector('.alert_btn');
const h = document.querySelector('.alert_h')
const p = document.querySelector('.alert_p')
const btn = document.querySelectorAll('.btn')
console.log(btn)

btn.forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.className)
        switch(item.className){
            case 'btn danger':
                customAlert('danger');
                //alertBox.classList.add('danger');
                h.textContent = 'Ошибка!';
                p.textContent = 'нето';
                break;
            case 'btn warning':
                customAlert('warning');
                // alertBox.classList.add('warning');
                 h.textContent = 'Предупреждение!';
                 p.textContent = 'что-то не так';
                 break;
            case 'btn succes':
                customAlert('success')
                // alertBox.classList.add('success');
                h.textContent = 'Успех!';
                p.textContent = 'ура';
                break;
            case 'btn info':
                customAlert('info')
                // alertBox.classList.add('info');
                h.textContent = 'Информация!';
                p.textContent = 'ляляля';
                break;
        }
    })
})

const customAlert = (style) => {
    alertBox.style.transform = 'translateY(0)';
    alertBox.classList.add(style);
    document.querySelector('main').style.filter = 'brightness(0.5)';
    document.querySelector('main').style.pointerEvents = 'none';
}

alertBtn.addEventListener('click', () => {
    alertBox.style.transform = 'translateY(-100%)';
    alertBox.classList.remove(alertBox.classList[1]);
    document.querySelector('main').style.filter = 'brightness(1)';
    document.querySelector('main').style.pointerEvents = 'auto';
    
   
    
});

// document.querySelector('.danger').addEventListener('click', () => {
//     customAlert('danger'); 
// });
// document.querySelector('.warning').addEventListener('click', () => {
//     customAlert('warning'); 
// });
// document.querySelector('.success').addEventListener('click', () => {
//     customAlert('success'); 
// });
// document.querySelector('.info').addEventListener('click', () => {
//     customAlert('info'); 
// });