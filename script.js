const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.body-main-block__arrow.swiper-button-next',
      prevEl: '.body-main-block__arrow.swiper-button-prev',
    },
  });

const tabsNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;
    if(argetElement.closest('.tabs-deals__button')){
      tabsNavItems.forEach(( tabsNavItem, index) => {
        if (tabsNavItem.classList.contains('active')){
          currentActiveIndex = index;
        }
        if (tabsNavItem === targetElement) {
          newActiveIndex = index;
          tabsNavItem.classList.remove('active');
        }
       /*  tabsNavItem.classList.remove('active'); */
      });
      targetElement.classList.add('active');
      tabItems[currentActiveIndex].classList.remove('active');
      tabItems[newActiveIndex] .classList.add('active');
    }
});