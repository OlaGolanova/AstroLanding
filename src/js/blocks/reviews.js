function reviews(){
    const btnMoreReviewsLaptop = document.querySelectorAll('.main__reviews-more-laptop');
    const mainReviewsWindowsLaptop = document.querySelectorAll('.main__reviews-card-laptop');

    const btnMoreReviewsMobile = document.querySelectorAll('.main__reviews-more-mobile');
    const mainReviewsWindowsMobile = document.querySelectorAll('.main__reviews-card-mobile');

    btnMoreReviewsLaptop.forEach(function(item,i){
        item.addEventListener('click', function(event){
            if(this.textContent === "Читать полностью"){
                mainReviewsWindowsLaptop[i].style.height = "auto";
                this.textContent = "Скрыть"; 
            } else if(this.textContent === "Скрыть"){
                mainReviewsWindowsLaptop[i].style.height = "318px";
                this.textContent = "Читать полностью"; 
            }
        });

    });

    mainReviewsWindowsMobile.forEach(function(item,i){
        item.addEventListener('click', function(){
            if(btnMoreReviewsMobile[i].textContent === "Читать полностью"){
                mainReviewsWindowsMobile[i].style.height = "auto";
                btnMoreReviewsMobile[i].textContent = "Скрыть"; 
            } else if(btnMoreReviewsMobile[i].textContent === "Скрыть"){
                mainReviewsWindowsMobile[i].style.height = "318px";
                btnMoreReviewsMobile[i].textContent = "Читать полностью";   
            }
        });
    });
}