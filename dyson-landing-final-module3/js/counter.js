const grid = document.querySelector(".offers__grid");

grid.addEventListener("click", (e) => {
	const btnPlus = e.target.closest(".offers__cart-counter-right");
	if (!btnPlus) return;
	const card = btnPlus.closest(".offers__item");
	const input = card.querySelector(".offers__cart-counter-value");
	input.value = +input.value + 1;
	updateMinus(card);
});

grid.addEventListener("click", (e) => {
	const btnMinus = e.target.closest(".offers__cart-counter-left");
	if (!btnMinus) return;
	const card = btnMinus.closest(".offers__item");
	const input = card.querySelector(".offers__cart-counter-value");

	if (+input.value <= 1) return;

	input.value = +input.value - 1;
	updateMinus(card);
});

const updateMinus = (card) => {
	const input = card.querySelector(".offers__cart-counter-value");
	const minus = card.querySelector(".offers__cart-counter-left");

	if (+input.value > 1) {
		minus.classList.add("active");
	} else {
		minus.classList.remove("active");
	}
};

grid.addEventListener("input", (e) => {
	const input = e.target.closest(".offers__cart-counter-value");
	if (!input) return;

	const card = input.closest(".offers__item");
	updateMinus(card);
});

// Корзина
const headerCartButton = document.querySelector(".header__cart-button");

grid.addEventListener("click", (e) => {
	const cartBtn = e.target.closest(".offers__cart-btn");
	if (!cartBtn) return;

	const card = cartBtn.closest(".offers__item");
	const input = card.querySelector(".offers__cart-counter-value");

	const currentCount = Number(headerCartButton.dataset.count || 0);
	const addedCount = window.innerWidth < 992 ? 1 : Number(input.value);

	headerCartButton.classList.add("active");
	headerCartButton.dataset.count = String(currentCount + addedCount);
});
