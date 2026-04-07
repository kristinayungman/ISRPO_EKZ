const card= ` <div class="card">
            <div class="card_img">
                <img src="img/back_baum.png" alt="noimg">
            </div>
            <div class="card_text">
                <div class="card_up">
                    <p class="card_title">Название продукта</p>
                    <p class="card_setters">
                        <div class="card_count">
                            <button class="minus">-</button>
                            <span>1</span>
                             <button class="plus">+</button>
                        </div>
                        <p class="card_price">100r</p>
                    </p>
                </div>
                <p class="card_desc">Краткое описание продукта или товара</p>
                <button class="card_btn">Добавить в корзину</button>
            </div>
        </div>`;


// for(let i=0; i<12; i++){
//     document.querySelector('main').innerHTML+=card;
// }
const mainContainer = document.querySelector('main'); 
    for (let i = 0; i < 12; i++) { 
    mainContainer.innerHTML += card; 
    } 
    const minusButtons = document.querySelectorAll('.minus'); 
    const plusButtons = document.querySelectorAll('.plus'); 
    minusButtons.forEach(button => { 
    button.addEventListener('click', function() { 
    const span = this.nextElementSibling; 
    let value = parseInt(span.innerText); 
    if (value > 1) { 
    span.innerText = value - 1; 
    } 
    }); 
    }); 
    plusButtons.forEach(button => { 
    button.addEventListener('click', function() { 
    const span = this.previousElementSibling; 
    let value = parseInt(span.innerText);
      if (value <10 ) {  
    span.innerText = value + 1; 
      }
    }); 
    });