function popup(){
    const btnsMores = document.querySelectorAll('.main__service-more');
    const moreWindows = document.querySelectorAll('.main__service');
    const popups = document.querySelectorAll('.popup');
    const btnsClosePopup = document.querySelectorAll('.popup__item_btn-close');


    btnsMores .forEach(function(item,i){
        item.addEventListener('click', function(){
            // popup.classList.remove('hidden');
            popups[i].style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    moreWindows.forEach(function(item,i){
        item.addEventListener('click', function(){
            popups[i].style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    btnsClosePopup.forEach(function(item,i){
        item.addEventListener('click', function(){
            popups[i].style.display = 'none';
            document.body.style.overflow = '';
        });
    });
}
