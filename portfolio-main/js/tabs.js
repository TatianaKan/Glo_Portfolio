const tabsBtns = document.querySelectorAll('.design-list__item');
const tabDescription = document.querySelectorAll('.design__descr');

const tabImages = document.querySelectorAll('.design-images')

console.log(tabDescription);

tabsBtns.forEach((tabsBtn, index) => {
  tabsBtn.addEventListener('click', (event) => {

   tabDescription.forEach((descr, indexDescr) => {
     if (index === indexDescr) {
       descr.classList.remove('hidden');
     } else {
      descr.classList.add('hidden');
     }
   })

   tabImages.forEach((image, indeximage) => {
    if (index === indeximage) {
      image.classList.remove('hidden');
    } else {
     image.classList.add('hidden');
    }
  })


    tabsBtns.forEach((btn) => {
     
      if (btn === event.target) {
        btn.classList.add('design-list__item_active');
      } else {
        btn.classList.remove('design-list__item_active');
      }
    })
  })
});