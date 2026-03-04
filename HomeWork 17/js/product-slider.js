export const productSlider = () => {
	// Инициализация слайдера для блока с классом .product__slider
	new Swiper(".product__slider", {
		// Количество слайдов для показа. "auto" позволяет слайдам иметь разную ширину на основе их контента
		slidesPerView: "auto",

		// Активный слайд всегда будет по центру контейнера
		centeredSlides: true,

		// Бесконечная прокрутка: после последнего слайда снова идет первый
		loop: true,

		// Управление слайдером с помощью колесика мыши
		mousewheel: {
			// Ограничивает прокрутку только одной осью (горизонтальной), чтобы не мешать скроллу страницы
			forceToAxis: true,
		},

		// Настройка кнопок навигации "Назад" и "Вперед"
		navigation: {
			prevEl: ".product__slider-button--prev",
			nextEl: ".product__slider-button--next",
		},
	});
};
