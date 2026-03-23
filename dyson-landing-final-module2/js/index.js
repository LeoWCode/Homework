import BurgerMenu from "./burger.js";

try {
	// Пока у нас нет HeaderFixed, комментируем, чтобы не ломался код!
	/*
	const headerFixed = new HeaderFixed({
		HEADER: "header",
		HEADER_FIXED: "header--fixed",
	});
	*/

	new BurgerMenu(
		{
			BURGER: "burger",
			BURGER_OPEN: "burger--open", // Этот класс мы добавим в CSS
			HEADER_MENU: "header__menu",
			HEADER_MENU_OPEN: "header__menu--open",
			lABEL: {
				OPEN: "Открыть меню",
				CLOSE: "Закрыть меню",
			},
			PAGE_BODY: "page__body",
			PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
			MENU_LINK: "menu__link",
			BREAKPOINT: 1280,
			MAIN: "main",
		},
		null, // Передаем null вместо headerFixed, пока его нет
	);

	// Пока у нас нет Modal, комментируем!
	/*
	new Modal({
		MODAL: "modal",
		MODAL_OPEN: "modal--open",
		PAGE_BODY: "page__body",
		PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
	});
	*/
} catch (error) {
	console.error(error);
}
