//npm install swiper

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper',{
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
	type: 'bullets', // можно сменить
    el: '.swiper-pagination',
	clickable:true, //нажимание на точки вручную
	dynamicBullets: true, //размеры точек по мере приблежения
  },
  scrollbar: {
    el: '.swiper-scrollbar',
	draggable: true, //перетаскивание ползунка вручную
  },
  simulateTouch: true, // включенная возможность переключать слайды перетаскиванием мышью
  touchRatio: 1, //чуствительность свайпа
  touchAngle: 45, //угол срабатывания свайпа, перетаскивания
  grabCursor: true, //меняем вид курсора

  hashNavigation: {
	watchState: true, //отслеживать состояние
  },
  keyboard: {
	enabled: true, // включить/выключить
	onlyInViewport: true, // можно листать когда доскролили до него
	pageUpDown: true, // доп клавиши для переключения
  },
  mousewheel: {
	sensitivity: false, // чуствительность
  },
  autoHeight: false, // Высота подстраиваеться под контент
  slidesPerView: 3, //Количество слайдов для показа, можно указать значение 'auto'
  watchOverflow: true, //отключение слайдера, если слайдов меньше чем в preview
spaceBetween: 20, //установка отступа между слайдами
slidesPerGroup: 1, // количество слайдов которое можно пролистнуть за раз
centeredSlides: false, //активный слайд по центру - true
initialSlide: 2, //номер первого отображаемого слайда
loop: true, //бесконечное прокручивание
freeMode: false, //свободный режим
autoplay: {
	delay: 3000, //задержка на слайде
	stopOnLastSlide: false, // остановить на последнем слайде 
	disableOnInteraction: false, //выключает автопрокрутку после ручного вмешательства
},
speed: 800, //скорость свайпа, при любом сценарии 
direction: 'horizontal', //смена главной оси скрола
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
// 	// настройки тени
// 	slideShadows:true,
// 	shadow: true,
// 	shadowOffset: 20,
// 	shadowScale: 0.94,
// }
//* coverflow - подходит для вывода большего количества слайдов;
effect: 'coverflow',
coverflowEffect:{
	rotate: 0, //угол
	stretch: 80, //наложение
	slideShadows: true, //тень
},
// effect: 'slide', //стандартное значение

//*адаптив по принципу mobile-first
breakpoints: {
	320: {
		slidesPerView: 1,
	},
	480: {
		slidesPerView: 2,
	},
	992: {
		slidesPerView: 3,
	}

},

//если слайдер был скрыт
// observer: true,
// observeParents:true,
// observeSlideChildren: true,

});

// должно быть одинаковое количество слайдов
//соеденение двух слайдеров firstSlider.controller.control = secondSlider