
    
   
    //이미지 슬라이드

    new Swiper( '.main-slide > .swiper', {
        autoplay: { // 자동 재생 여부
            delay: 4000, 
            disableOnInteraction: false, // false-스와이프 후 자동 재생
          },
        loop : true, // 무한 반복
        loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정

      });
    
    new Swiper(".shop > .swiper", {
        spaceBetween: 30,  // 슬라이드 사이 여백
        slidesPerView : '5', // 한 슬라이드에 보여줄 갯수
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        autoplay: { // 자동 재생 여부
            delay: 4000, 
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        
      });
    
    
    // 반응형 네비 
    
    const toggleBtn = document.querySelector('.toggleBtn');
    const menu = document.querySelector('.menu');

    toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
        });
        
    
    
    // parallax
    
    $('.parallax-window').parallax({imageSrc: 'images/parallex.jpg'});
    

