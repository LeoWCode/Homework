// Класс BurgerMenu управляет логикой работы бургер-меню (открытие/закрытие, клики вне меню, свайпы на мобильных).
export default class BurgerMenu {
	// Конструктор - это функция, которая запускается первой при создании меню (когда мы пишем new BurgerMenu).
	// В config мы передаем наши классы из HTML, а headerFixedInstance (пока он у нас null) нужен для фиксированной шапки.
	constructor(config, headerFixedInstance = null) {
		this.config = config; // Сохраняем настройки в this.config для доступа из других методов

		// Ищем элементы на странице по классам, переданным из config:
		this.burgerButton = document.querySelector(`.${this.config.BURGER}`); // саму кнопку-бургер
		this.burgerMenu = document.querySelector(`.${this.config.HEADER_MENU}`); // блок с меню
		this.body = document.querySelector(`.${this.config.PAGE_BODY}`); // тег body 
		this.headerFixedInstance = headerFixedInstance;
		this.main = document.querySelector(`.${this.config.MAIN}`); // основной тег main (опционально)

		// Если хоть один из главных элементов не найден на странице, выдаем ошибку, чтобы сразу заметить проблему
		if (!this.burgerButton || !this.burgerMenu || !this.body) {
			throw new Error("Не найдены необходимые DOM-элементы для бургер-меню. Проверьте классы!");
		}

		// Проверяем, на мобильном ли мы устройстве (ширина экрана <= BREAKPOINT, то есть 1200px)
		this.isMobileView = window.innerWidth <= this.config.BREAKPOINT;

		// Привязываем контекст (this) к методам, чтобы внутри них this всегда указывал на сам класс BurgerMenu.
		// Если это не сделать, то при обработке событий (кликов) this будет указывать на элемент, по которому кликнули, а это вызовет ошибку.
		this.onBurgerClick = this.onBurgerClick.bind(this);
		this.onBodyClick = this.onBodyClick.bind(this);
		this.handleTouchStart = this.handleTouchStart.bind(this);
		this.handleTouchMove = this.handleTouchMove.bind(this);
		this.handleTouchEnd = this.handleTouchEnd.bind(this);
		this.onWindowResize = this.onWindowResize.bind(this);

		// Запускаем управление событиями (вешаем клики и свайпы, если мы на мобилке)
		this.manageEvents();
		
		// Следим за изменением ширины окна браузера и перепроверяем мобильную версию
		window.addEventListener("resize", this.onWindowResize);
	}

	// Метод проверяет, нужно ли вообще слушать клики и свайпы (зависит от ширины экрана)
	manageEvents() {
		if (this.isMobileView) {
			this.initEvents(); // Если мы на мобилке или планшете — включаем клики/свайпы
		} else {
			this.removeEvents(); // Если мы на большом экране ПК — отключаем за ненадобностью (чтобы не нагружать браузер)
			this.hideBurgerMenu(); // И на всякий случай прячем меню
		}
	}

	// Метод, который "вешает" (инициализирует) слушатели событий (event listeners)
	initEvents() {
		// События кликов
		this.burgerButton.addEventListener("click", this.onBurgerClick); // Клик по кнопке-бургеру
		this.body.addEventListener("click", this.onBodyClick); // Клик в любом месте страницы (нужно для закрытия при клике "снаружи")

		// События Touch (касания, свайпы пальцем по экрану)
		this.body.addEventListener("touchstart", this.handleTouchStart); // Начало касания
		this.body.addEventListener("touchmove", this.handleTouchMove);   // Проведение пальцем
		this.body.addEventListener("touchend", this.handleTouchEnd);     // Отпускание пальца
	}

	// Метод, убирающий слушатели (выполняется, когда мы меняем мобилку на ПК, снятие листенеров - хорошая практика)
	removeEvents() {
		// Убираем клики
		this.burgerButton.removeEventListener("click", this.onBurgerClick);
		this.body.removeEventListener("click", this.onBodyClick);

		// Убираем touch-события
		this.body.removeEventListener("touchstart", this.handleTouchStart);
		this.body.removeEventListener("touchmove", this.handleTouchMove);
		this.body.removeEventListener("touchend", this.handleTouchEnd);
	}

	// Метод, который срабатывает при ресайзе (изменении размеров окна браузера)
	onWindowResize() {
		// Проверяем актуальную ширину в моменте ресайза (прямо сейчас)
		const isNowMobileView = window.innerWidth <= this.config.BREAKPOINT;

		// Если мы пересекли границу из ПК в планшет/мобилку ИЛИ наоборот:
		// обновляем флаг isMobileView и перезапускаем логику событий
		if (this.isMobileView !== isNowMobileView) {
			this.isMobileView = isNowMobileView;
			this.manageEvents(); // заново включаем или выключаем слушатели
		}
	}

	// --- МЕТОДЫ ДЛЯ КЛИКОВ ---

	// Метод срабатывает ПРИ КЛИКЕ на саму бургер-кнопку
	onBurgerClick() {
		// classList.toggle добавляет класс, если его нет, и убирает, если он есть.
		// Функция возвращает true, если класс был добавлен (меню открылось), и false, если меню закрылось.
		const isOpen = this.burgerButton.classList.toggle(this.config.BURGER_OPEN);
		
		// Добавляем атрибуты доступности (aria-*) для скринридеров (программ для людей с плохим зрением)
		this.burgerButton.ariaLabel = isOpen
			? this.config.lABEL.CLOSE
			: this.config.lABEL.OPEN;
		this.burgerButton.ariaExpanded = isOpen;
		
		// Открываем/закрываем сам блок с навигацией
		this.burgerMenu.classList.toggle(this.config.HEADER_MENU_OPEN, isOpen);
		// Блокируем скролл страницы (вешаем класс на body), чтобы сайт не "прокручивался" под открытым меню позади него
		this.body.classList.toggle(this.config.PAGE_BODY_NO_SCROLL, isOpen);

		// Если есть блок main - отключаем внутри него возможность кликать мышкой при открытом меню
		if (this.main) {
			this.main.style.pointerEvents = isOpen ? "none" : "";
		}

		// Логика для фиксированной шапки (пока закомментирована в index.js, не используется)
		if (this.headerFixedInstance) {
			if (isOpen) {
				this.headerFixedInstance.removeFixedClass();
			} else {
				this.headerFixedInstance.updateFixedClass();
			}
		}
	}

	// Метод, который принудительно ПРЯЧЕТ бургер-меню (нужен для кликов вне меню и свайпов вправо)
	hideBurgerMenu() {
		const wasOpen = this.isBurgerMenuOpen();
		
		// Просто удаляем (remove) все активные классы состояния, словно никто ничего не нажимал
		this.burgerButton.classList.remove(this.config.BURGER_OPEN);
		this.burgerButton.ariaLabel = this.config.lABEL.OPEN;
		this.burgerButton.ariaExpanded = false;
		
		this.burgerMenu.classList.remove(this.config.HEADER_MENU_OPEN);
		this.body.classList.remove(this.config.PAGE_BODY_NO_SCROLL); // Возвращаем возможность крутить (скроллить) сайт

		if (this.main) {
			this.main.style.pointerEvents = "";
		}

		if (wasOpen && this.headerFixedInstance) {
			this.headerFixedInstance.updateFixedClass();
		}
	}

	// Метод-помощник: проверяет, открыто ли меню висит ли класс (возвращает true или false)
	isBurgerMenuOpen() {
		return this.burgerMenu.classList.contains(this.config.HEADER_MENU_OPEN);
	}

	// Метод для закрытия меню по клику ВНЕ ЕГО ОБЛАСТИ или КЛИКУ ПО ССЫЛКЕ В МЕНЮ
	onBodyClick(event) {
		const target = event.target; // event.target — это элемент, по которому физически ТКНУЛ пользователь
		
		// Кликнули ли по ссылке внутри меню? (Например, "О нас")
		const isLinkInMenu = target.classList.contains(this.config.MENU_LINK);
		// Открыто ли сейчас меню?
		const isMenuOpen = this.isBurgerMenuOpen();
		// Клик был снаружи меню И снаружи кнопки бургер?
		// На помощь (closest) берем проверку родителей: если у того, куда мы ткнули, нет родителя с нужным классом
		const isClickOutsideMenu =
			!target.closest(`.${this.config.HEADER_MENU}`) &&
			!target.closest(`.${this.config.BURGER}`);

		// Если кликнули по ссылке меню И мы на мобильном устройстве
		// ИЛИ
		// Если меню сейчас открыто И клик был снаружи него
		if (
			(isLinkInMenu && window.innerWidth <= this.config.BREAKPOINT) ||
			(isMenuOpen && isClickOutsideMenu)
		) {
			// То закрываем меню!
			this.hideBurgerMenu();
		}
	}

	// --- МЕТОДЫ ДЛЯ СВАЙПОВ (отслеживаем касания пальцем для смахивания меню) ---

	// Палец коснулся экрана
	handleTouchStart(event) {
		if (!this.isBurgerMenuOpen()) return; // Если меню закрыто - ничего не делаем
		// Запоминаем координату по оси X, где палец коснулся экрана (старт)
		this.touchStartX = event.changedTouches[0].screenX;
		// Отключаем в CSS плавную анимацию, чтобы меню следовало чётко за пальцем без "резиновой" задержки
		this.burgerMenu.style.transition = "none";
	}

	// Палец двигается по экрану (не отрываясь)
	handleTouchMove(event) {
		if (!this.isBurgerMenuOpen()) return;
		// Где сейчас палец?
		const currentX = event.changedTouches[0].screenX;
		// Высчитываем, насколько сдвинулся палец. Мы разрешаем сдвигать меню только вправо (translateX = 0 и выше)
		const translateX = Math.max(0, currentX - this.touchStartX);
		// Меняем CSS-свойство right через JS (сдвигаем меню за пальцем в реальном времени)
		// У нас правостороннее меню, поэтому двигаем именно right!
		this.burgerMenu.style.right = `-${translateX}px`;
	}

	// Палец оторвался от экрана
	handleTouchEnd(event) {
		if (!this.isBurgerMenuOpen()) return;
		const touchEndX = event.changedTouches[0].screenX;
		// На сколько пикселей был сделан свайп от начальной до конечной точки?
		const swipeDistance = touchEndX - this.touchStartX;

		// Возвращаем плавную анимацию (transition), как было в нашем CSS файле изначально
		this.burgerMenu.style.transition = "";
		this.burgerMenu.style.right = ""; // Сбрасываем инлайн-стиль задержки сдвига (он больше не нужен)

		// Если мы свайпнули (смахнули) вправо более чем на 70 пикселей:
		if (swipeDistance > 70) {
			// Пользователь хотел закрыть меню, выполняем это:
			this.hideBurgerMenu();
		}
	}
}
