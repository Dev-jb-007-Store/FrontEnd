const li = document.querySelectorAll('#list li');

function changeactive(element) {
    Array.from(li).forEach(x => {
        x.classList.remove('active');
    });
    element.classList.add('active');
}
function expandSearchBar(element) {
    element.style.width = '90%';
    element.style.borderBottomLeftRadius='0px';
    setTimeout(()=>{
        const searchDrop=document.querySelector('.searchbar-dropdown');
        searchDrop.style.opacity=1;
    },300);
}
function minimizeSearchBar(element) {
    let searchDrop=document.querySelector('.searchbar-dropdown');
    if (window.innerWidth >= 500 && window.innerWidth <= 1024) {
        element.style.width = '150px';
        element.style.borderBottomLeftRadius='20px';
        searchDrop.style.opacity=0;
    }
    else {
        element.style.borderBottomLeftRadius='20px';
        searchDrop.style.opacity=0;
        element.style.width = '200px';
    }
}
function openFilter(){
    const filter = document.querySelector('.filter-outer-div');
    if(filter.style.height == "210px"){
        return filter.style.height = '34px';
    }
    filter.style.height = '210px';
}
let topButton=document.querySelector('.top-button');
const gototopobserver5=new IntersectionObserver((entries,gototopobserver5)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting)
        {   
            topButton.style.opacity=1;
        }
    })
},{
    threshold:1
});
const gototopobserver1=new IntersectionObserver((entries,gototopobserver1)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting)
        {  
            topButton.style.opacity=0;
        }
    })
},{
    threshold:1
});
const card=document.querySelectorAll('.search-results .search-content');
if(Array.from(card).length>=5)
{
    const fifthCard=Array.from(card)[4];
    gototopobserver5.observe(fifthCard);
}
const firstCard=Array.from(card)[0]
gototopobserver1.observe(firstCard);

function gototop(element){
    window.scrollTo(0,0);
}