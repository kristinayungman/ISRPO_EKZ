setInterval(()=>{
    const now=new Date();
//console.log(now.getUTCHours());
const FormatTime=(value)=>{
    return `${(now.getUTCHours()+value).toString().padStart(2,"0")}:${now.getMinutes().toString().padStart(2,"0")}:${now.getSeconds().toString().padStart(2,"0")}`;
}

//console.log(FormatTime(3))
document.querySelector('.item_Moskow').textContent=FormatTime(3);//utc +3
document.querySelector('.item_London').textContent=FormatTime(0);//utc 0
document.querySelector('.item_New').textContent=FormatTime(-4);//utc -4
    
},1000) 
const now=new Date();
//console.log(now.getUTCHours());
const FormatTime=(value)=>{
    return `${(now.getUTCHours()+value).toString().padStart(2,"0")}:${now.getMinutes().toString().padStart(2,"0")}:${now.getSeconds().toString().padStart(2,"0")}`;
}

//console.log(FormatTime(3))
document.querySelector('.item_Moskow').textContent=FormatTime(3);//utc +3
document.querySelector('.item_London').textContent=FormatTime(0);//utc 0
document.querySelector('.item_New').textContent=FormatTime(-4);//utc -4