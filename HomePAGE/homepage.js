const li=document.querySelectorAll('#list li');
var mediaqueryipad = window.matchMedia("(max-width: 1024px) and (min-width: 500px)")
let scroll=0;
function changeactive(element){
    Array.from(li).forEach(x=>{
        x.classList.remove('active');
    });
    element.classList.add('active');
}
function expandSearchBar(element){
    element.style.width='90%';
}
function minimizeSearchBar(element){
    if(window.innerWidth>=500&&window.innerWidth<=1024)
    {
        element.style.width='150px';
    }
    else{
        element.style.width='200px';
    }
}
function prevOffer(){
    if(scroll==0)
    {
        scroll=-300;
    }
    else{
        scroll+=100;
    }
    document.querySelector('.offer .scroll-image').style.marginLeft=`${scroll}%`;
}
function nextOffer(){
    if(scroll==-300)
    {
        scroll=0;
    }
    else{
        scroll-=100;
    }
    document.querySelector('.offer .scroll-image').style.marginLeft=`${scroll}%`;
}
function prevView(){
    if(scroll==0)
    {
        scroll=-200;
    }
    else{
        scroll+=100;
    }
    document.querySelector('.most-viewed .card-scroll').style.marginLeft=`${scroll}%`;
}
function nextView(){
    if(scroll==-200)
    {
        scroll=0;
    }
    else{
        scroll-=100;
    }
    document.querySelector('.most-viewed .card-scroll').style.marginLeft=`${scroll}%`;
}
setInterval(()=>{
    if(scroll==-300)
    {
        scroll=0;
    }
    else{
        scroll-=100;
    }
    document.querySelector('.offer .scroll-image').style.marginLeft=`${scroll}%`;
},10000);


