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
    if (window.innerWidth >= 500 && window.innerWidth <= 1024) {
        element.style.width = '150px';
        element.style.borderBottomLeftRadius='20px';
    }
    else {
        element.style.borderBottomLeftRadius='20px';
        const searchDrop=document.querySelector('.searchbar-dropdown');
        searchDrop.style.opacity=0;
        element.style.width = '200px';
    }
}
function openFilter(){
    const filter = document.querySelector('.filter-outer-div');
    if(filter.style.height == "200px"){
        return filter.style.height = '24px';
    }
    filter.style.height = '200px';
}