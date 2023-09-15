function popup(){
    const btnsMoresLaptop = document.querySelectorAll('.main__service-more-laptop');
    const btnsMoresTablet = document.querySelectorAll('.main__service-more-tablet');
    const btnsMoresMobile = document.querySelectorAll('.main__service-more-mobile');
    const moreWindowsLaptop = document.querySelectorAll('.main__service-laptop');
    const moreWindowsTablet = document.querySelectorAll('.main__service-tablet');
    const moreWindowsMobile = document.querySelectorAll('.main__service-mobile');
    
    const popups = document.querySelectorAll('.popup');
    const btnsClosePopup = document.querySelectorAll('.popup__item_btn-close');


    btnsMoresLaptop.forEach(function(item,i){
        item.addEventListener('click', function(){
            // popup.classList.remove('hidden');
            popups[i].style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    btnsMoresTablet.forEach(function(item,i){
        item.addEventListener('click', function(){
            // popup.classList.remove('hidden');
            popups[i].style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    btnsMoresMobile.forEach(function(item,i){
        item.addEventListener('click', function(){
            // popup.classList.remove('hidden');
            popups[i].style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    moreWindowsLaptop.forEach(function(item,i){
        item.addEventListener('click', function(){
            popups[i].style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    moreWindowsTablet.forEach(function(item,i){
        item.addEventListener('click', function(){
            popups[i].style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    moreWindowsMobile.forEach(function(item,i){
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


    popups.forEach(function(item,i){
        item.addEventListener('click', function(){
            popups[i].style.display = 'none';
            document.body.style.overflow = '';
        });
    });
    popups.forEach(function(item,i){
        item.addEventListener('click', function(){
            popups[i].style.display = 'none';
            document.body.style.overflow = '';
        });
    });
}
