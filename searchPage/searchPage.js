function openFilter(){
    const filter = document.querySelector('.filter-outer-div');
    if(filter.style.height >= "35px"){
        return filter.style.height = '34px';
    }
    filter.style.height = 'max-content';
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