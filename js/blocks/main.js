function main(){
 
    let swiper = new Swiper(".mySwiper", {
        // loop: true,
        navigation: {
          nextEl: ".main__reviews-descr .swiper-button-next",
          prevEl: ".main__reviews-descr .swiper-button-prev",
        },
      });

    let swiperService = new Swiper(".myswiperService ", {
        // loop: true,
        navigation: {
         nextEl: ".main__vector .swiper-button-next",
         prevEl: ".main__vector .swiper-button-prev",
       },
      });
    
  
   
}
