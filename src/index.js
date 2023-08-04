
window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    fix100vh();
    // findHeight();
    animation();
    rotate();
    main();
    window.addEventListener('resize', () => {
        fix100vh();
        findHeight();
    })
});
function fix100vh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// function findHeight(){
//     let fullHeight = document.documentElement.clientHeight,
//         fullWidth = document.documentElement.clientWidth;
//     if(fullWidth > 768 && fullWidth <= 1024){
//         if(fullHeight < 730){
//             promo.classList.add('no-full');
//         } else {
//             if(promo.classList.contains('no-full')){
//                 promo.classList.remove('no-full');
//             }
//         }
//     } else if(fullWidth > 576 && fullWidth <= 768){
//         if(fullHeight < 700){
//             promo.classList.add('no-full');
//         } else {
//             if(promo.classList.contains('no-full')){
//                 promo.classList.remove('no-full');
//             }
//         }
//     } else if(fullWidth <= 576){
//         if(fullHeight < 700){
//             promo.classList.add('no-full');
//         } else {
//             if(promo.classList.contains('no-full')){
//                 promo.classList.remove('no-full');
//             }
//         }
//     } 
// }




    



function  animation(){
    
  
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {


// Анимация блока PROMO, Загрузка главного экрана
    const tlTitle = gsap.timeline({});

        tlTitle.to('.promo__logo', {
            opacity: 1,
            duration: 0.5
        })
        tlTitle.to('h1', {
            opacity: 1,
            duration: 0.5
        })
        tlTitle.to('.promo__descr-subtitle', {
            opacity: 1,
        })
        tlTitle.to('.promo__vector', {
            opacity: 1,

        }, '<')
        tlTitle.to('.promo__planet_pink', {
            // x: 170,
            opacity: 1,
            duration: 0.8
        })
        tlTitle.to('.promo__planet_blue', {
            // x: -170,
            opacity: 1,
            duration: 0.8
        }, '<')
          

// Анимация Зодиакальный круг
    //     const tlRotateRing = gsap.timeline({});
    //     tlRotateRing.to('.main__bg-ring',{
    //         scrollTrigger: {
    //             trigger: '.main__bg-ring',
    //             start: '+=400 bottom',
    //             scrub: 2,
    //             toggleClass: 'rotate',
    //         }
        
    // })


   //Анимация Карточки услуги
    gsap.from('.main__service-wrap', {
        opacity: 0,
        scale:0.7,
        duration: 1,
        scrollTrigger: {
             trigger: '.main__service-wrap',
             start: 'top bottom',
             toggleActions: 'play reverse play reverse'
        }
     })




    //Анимация Карточки с отзывами
        gsap.from('.main__reviews-card',{
            opacity:0,
            yPercent:100,
            stagger: 0.3,
            duration: 0.8,
            scrollTrigger: {
                trigger: '.main__reviews-card',
                start: 'top bottom',
                toggleActions: 'play none none reverse'
            }
        })
        

      
    //Анимация блока обо мне
    const tlAbout = gsap.timeline({
        scrollTrigger: {
            trigger: '.about__text-wrapper',
            start: 'top bottom',
            end: 'center center',
            toggleActions: 'play none none reverse',
            scrub: 1
                
                }
            })
            tlAbout.from('.about__text', {
                opacity: 0.3,
                yPercent:100,
                duration: 1
 
            })
            tlAbout.from('.about__foto', {
                opacity: 0.3,
                yPercent:100,
                duration: 1

            }, '<')

   });

 
    
    mm.add("(max-width: 1024px)", () => {

    // Анимация блока PROMO, Загрузка главного экрана
    const tlTitle = gsap.timeline({});

        tlTitle.to('.promo__logo', {
            opacity: 1,
            duration: 0.5
        })
        tlTitle.to('h1', {
            opacity: 1,
            duration: 0.5
        })
        tlTitle.to('.promo__descr-subtitle', {
            opacity: 1,
        })
        tlTitle.to('.promo__vector', {
            opacity: 1,

        }, '<')
        tlTitle.to('.promo__planet_pink', {
            // x: 170,
            opacity: 1,
            duration: 0.8
        }, '-=0.3')
        tlTitle.to('.promo__planet_blue', {
            // x: -170,
            opacity: 1,
            duration: 0.8
        }, '-=0.1')


//Анимация Зодиакальный круг
// const tlRotateRing = gsap.timeline({});
// tlRotateRing.to('.main__bg-ring',{
// scrollTrigger: {
//     trigger: '.main__bg-ring',
//     start: '+=200 bottom',
//     scrub: 2,
//     toggleClass: 'rotate'
// }

// })


    //Анимация Карточки услуги
    gsap.from('.main__service-wrap', {
        opacity: 0,
        scale:0.7,
        duration: 1,
        scrollTrigger: {
        trigger: '.main__service-wrap',
        start: 'top bottom',
        toggleActions: 'play none none reverse'
        }
    })




    //Анимация Карточки с отзывами
    gsap.from('.main__reviews-card',{
        opacity:0,
        yPercent:100,
        stagger: 0.5,
        duration: 1,
        scrollTrigger: {
            trigger: '.main__reviews-card',
            start: 'top bottom',
            toggleActions: 'play none none reverse'
        }
    })

    //Анимация блока обо мне
    const tlAbout = gsap.timeline({
        scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'center center',
        toggleActions: 'play none none reverse',
        scrub: 1

        }
        })
        tlAbout.from('.about__text', {
        opacity: 0.3,
        yPercent:100,
        duration: 1
        })
        tlAbout.from('.about__foto', {
        opacity: 0.3,
        yPercent:100,
        duration: 1

    }, '<')
    });

}

function main(){
 
    let swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    let swiperService = new Swiper(".myswiperService ", {
        navigation: {
         nextEl: ".swiperService-button-next",
         prevEl: ".swiperService-button-prev",
       },
      });
    

   
}

//Анимация

function rotate() {
    if (window.innerWidth < 1400) {
        document.querySelector('.main__bg-ring').classList.remove('rotate');
    } else {
        document.querySelector('.main__bg-ring').classList.add('rotate');
    }
};
