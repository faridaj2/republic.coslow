let menuTutup = document.querySelector('#navTutup');

menuTutup.addEventListener("click", function(event){
    if(event.target !== menuTutup) return;
    menuTutup.classList.toggle('-left-full');
    
});

function navBuka(){
    menuTutup.classList.toggle('-left-full');
}