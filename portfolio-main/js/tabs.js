const tabsBtns = document.querySelectorAll('.design-list__item');
const tabDescription = document.querySelectorAll('.design__descr');

const tabImages = document.querySelectorAll('.design-images')

const changeContent = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove('hidden');
    } else {
      elem.classList.add('hidden');
    }
  })
};

tabsBtns.forEach((tabsBtn) => {
  tabsBtn.addEventListener('click', (event) => {

    const dataValue = tabsBtn.dataset.tabsHandler;

    changeContent(tabDescription, dataValue);
    changeContent(tabImages, dataValue);

    tabsBtns.forEach((btn) => {

      if (btn === event.target) {
        btn.classList.add('design-list__item_active');
      } else {
        btn.classList.remove('design-list__item_active');
      }
    })
  })
});