const btn =document.querySelector('.lang');
let state= true;
const textRus= `<div class="up">
      <div class="logo">ЮристПро</div>
      <nav class="menu_nav">
        <a href="#">Услуги</a>
        <a href="#">Юристы</a>
        <a href="#">Консультация</a>
      </nav>
      <div class="menu_link">
        <a href="#"><img src="img/vk.png" alt="viewport"></a>
        <a href="#"><img src="img/ok.png" alt="ok"></a>
        <a href="#"><img src="img/MAX.png" alt="max"></a>
      </div>
    </div>
    <div class="content">
      <div class="content_text">
        <p class="content_slogan">Выбор лучших компаний</p>
        <h1 class="content_title">Ваш надежный партнер в мире бизнеса</h1>
        <p class="content_desc">Комплексные и юридидические решения для роста и развития ващего бизнеса- от стратапов крупных корпораций</p>
      </div>
      <form action="#" class="content_form">
        <div class="form_content">
          <h2 class="form_title">Запишитесь на Консультацию прямо сейчас</h2>
          <div class="form_item">
            <input type="text" name="" id="" placeholder="Введите ваше фио">
            <input type="text" name="" id="" placeholder="Введите ваш номер телефона">
            <input type="text" name="" id="" placeholder="Введите ваш электронный адрес">
          </div>
          <button class="form_btn">Записаться</button>
        </div>
      </form>
    </div>`
    const textEng=`<div class="up">
      <div class="logo">Juristpro</div>
      <nav class="menu_nav">
        <a href="#">Services</a>
        <a href="#">Jurist</a>
        <a href="#">Consultation</a>
      </nav>
      <div class="menu_link">
        <a href="#"><img src="img/vk.png" alt="viewport"></a>
        <a href="#"><img src="img/ok.png" alt="ok"></a>
        <a href="#"><img src="img/MAX.png" alt="max"></a>
      </div>
    </div>
    <div class="content">
      <div class="content_text">
        <p class="content_slogan">Choosing the best companies</p>
        <h1 class="content_title">Your reliable partner in the business world</h1>
        <p class="content_desc">Comprehensive and legal solutions for the growth and development of your business, from startups to large corporations</p>
      </div>
      <form action="#" class="content_form">
        <div class="form_content">
          <h2 class="form_title">Make an appointment for a Consultation right now</h2>
          <div class="form_item">
            <input type="text" name="" id="" placeholder="write FIo">
            <input type="text" name="" id="" placeholder="number">
            <input type="text" name="" id="" placeholder="elpochta">
          </div>
          <button class="form_btn">write</button>
        </div>
      </form>
    </div>`
btn.addEventListener('click', ()=>{
    if(state){
        btn.children[0].src ="img/rus.png"
    document.querySelector('main').innerHTML=textEng;
    }
    else{
        btn.children[0].src="img/grb.png"
        document.querySelector('main').innerHTML=textRus;
    }
    state=! state;
})