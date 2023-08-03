function main(){
    const btnNextReviewsRight = document.querySelector('.main__vector-right-reviews');
    const btnNextReviewsLeft = document.querySelector('.main__vector-left-reviews');
    const swiperSlideOne = document.querySelector('.swiper-slide-one');
    const swiperSlideTwo = document.querySelector('.swiper-slide-two');

        btnNextReviewsRight.addEventListener('click', function(){
            console.log(1);
            swiperSlideOne.classList.add('hidden');
            btnNextReviewsRight.classList.add('hidden'); 
            btnNextReviewsLeft.classList.remove('hidden');
            swiperSlideTwo.classList.remove('hidden');
        });
        btnNextReviewsLeft.addEventListener('click', function(){
            console.log(1);
            swiperSlideTwo.classList.add('hidden');
            btnNextReviewsLeft.classList.add('hidden'); 
            btnNextReviewsRight.classList.remove('hidden');
            swiperSlideOne.classList.remove('hidden');
        });
        

   
}
