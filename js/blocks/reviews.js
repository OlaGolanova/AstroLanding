function reviews(){
    const btnMoreReviews = document.querySelectorAll('.main__reviews-more');
    const mainReviewsWindows = document.querySelectorAll('.main__reviews-card');
    
    btnMoreReviews.forEach(function(item,i){
        item.addEventListener('click', function(){
            if(this.textContent === "Читать полностью"){
                mainReviewsWindows[i].style.height = "auto";
                this.textContent = "Скрыть"; 
            } else if(this.textContent === "Скрыть"){
                mainReviewsWindows[i].style.height = "318px";
                this.textContent = "Читать полностью";   
            }
        });
    });
}