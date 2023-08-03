function main(){
    const btnNextReviewsRight = document.querySelector('.main__vector-right-reviews');
    const btnNextReviewsLeft = document.querySelector('.main__vector-left-reviews');
    const swiperSlideOne = document.querySelector('.swiper-slide-one');
    const swiperSlideTwo = document.querySelector('.swiper-slide-two');

        btnNextReviewsRight.addEventListener('click', function(){
            console.log(1);
            swiperSlideOne.classList.add('main__hidden');
            btnNextReviewsRight.classList.add('main__hidden'); 
            btnNextReviewsLeft.classList.remove('main__hidden');
            swiperSlideTwo.classList.remove('main__hidden');
        });
        btnNextReviewsLeft.addEventListener('click', function(){
            console.log(1);
            swiperSlideTwo.classList.add('main__hidden');
            btnNextReviewsLeft.classList.add('main__hidden'); 
            btnNextReviewsRight.classList.remove('main__hidden');
            swiperSlideOne.classList.remove('main__hidden');
        });
        

   
}
