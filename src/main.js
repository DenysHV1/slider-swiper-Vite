//npm install swiper

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
  //todo left arrow AND right arrow
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //todo bottom circles or number of pictures
  pagination: {
    type: 'bullets', // можно сменить
    el: '.swiper-pagination',
    clickable: true, //нажимание на точки вручную
    dynamicBullets: true, //размеры точек по мере приблежения
  },

  //todo bottom scroll
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true, //перетаскивание ползунка вручную
  },

  //todo включенная возможность переключать слайды перетаскиванием мышью
  simulateTouch: true,

  //todo чуствительность свайпа
  touchRatio: 1,

  //todo угол срабатывания свайпа, перетаскивания
  touchAngle: 45,

  //todo меняем вид курсора
  grabCursor: true,

  //todo отслеживать состояние (подключена в HTML - data-hash)
  hashNavigation: {
    watchState: true,
  },

  //todo keyboard
  keyboard: {
    enabled: true, // включить/выключить
    onlyInViewport: true, // можно листать когда доскролили до него
    pageUpDown: true, // доп клавиши для переключения
  },

  //todo mousewheel
  mousewheel: {
    sensitivity: false, // чуствительность
  },

  //todo Высота подстраиваеться под контент
  autoHeight: false,

  //todo Количество слайдов для показа, можно указать значение 'auto'
  slidesPerView: 1,

  //todo отключение слайдера, если слайдов меньше чем в preview
  watchOverflow: true,

  //todo установка отступа между слайдами (gap)
  spaceBetween: 20,

  //todo количество слайдов которое можно пролистнуть за раз
  slidesPerGroup: 1,

  //todo активный слайд по центру - true
  centeredSlides: true,

  //todo номер первого отображаемого слайда
  initialSlide: 0,

  //todo бесконечное прокручивание
  loop: true,

  //todo свободный режим (без фиксации на картинке)
  freeMode: false,

  //todo autoplay
  autoplay: {
    delay: 3000, //задержка на слайде
    stopOnLastSlide: false, // остановить на последнем слайде
    disableOnInteraction: false, //выключает автопрокрутку после ручного вмешательства
  },

  //todo speed
  speed: 800, //скорость свайпа, при любом сценарии

  //todo смена главной оси скрола
  direction: 'horizontal',

  //todo SWIPER'S STYLES
  //* slide - стандартное значение
  // effect: 'slide',

  //* fade - подходит для вывода одного слайда
  // effect: 'fade',
  // fadeEffect:{
  // 	crossFade:true, //смена прозрачности
  // }

  //* flip - подходит для вывода одного слайда
  // effect: 'flip',
  // flipEffect: {
  // 	slideShadows: true, //shadow
  // 	limitRotation: true, // показ только активного слайда
  // }

  //* cube - подходит для вывода одного слайда
  // effect: 'cube',
  // cubeEffect: {
  // 	slideShadows:true,
  // 	shadow: true,
  // 	shadowOffset: 20,
  // 	shadowScale: 0.94,
  // }

  //* coverflow - подходит для вывода большего количества слайдов;
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0, //угол
    stretch: 80, //наложение
    slideShadows: true, //тень
  },

  //todo (media) адаптив по принципу mobile-first
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },

  //todo если слайдер был скрыт
  // observer: true,
  // observeParents:true,
  // observeSlideChildren: true,
});

//!
// должно быть одинаковое количество слайдов
//соеденение двух слайдеров firstSlider.controller.control = secondSlider
