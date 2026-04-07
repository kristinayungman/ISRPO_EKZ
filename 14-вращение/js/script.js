const card= document.querySelector('.card');
let state= true;
let i=1;
card.addEventListener('click',()=>{
    // console.log(card);
    i++;
    if(state==true){
        setTimeout(()=>{ card.children[1].style.zIndex=i,150
        })
         card.style.transform='rotateY(180deg)';
    }
    else {
        setTimeout(()=>{
card.children[0].style.zIndex=i,150
        })
         card.style.transform='rotateY(0)';
    }
    state = !state;
})
