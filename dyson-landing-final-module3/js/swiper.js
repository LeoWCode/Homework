new Swiper(".offers-swiper", {
	// Мобильные (<768)
	slidesPerView: 2,
	grid: { rows: 2, fill: "row" },
	slidesPerGroup: 2,
	spaceBetween: 14,
	navigation: {
		nextEl: ".offers-next",
		prevEl: ".offers-prev",
	},
	pagination: {
		renderFraction: function (currentClass, totalClass) {
			return `
				<span class="${currentClass}"></span>
				<span class="offers__pagination-separator">из</span>
				<span class="${totalClass}"></span>
			`;
		},
		el: ".offers__pagination",
		type: "fraction",
	},
	breakpoints: {
		// Планшет/десктоп (>=768)
		769: {
			slidesPerView: 3,
			allowTouchMove: false,
			autoHeight: false,
			grid: { rows: 2, fill: "row" },
			slidesPerGroup: 3,
			spaceBetween: 20,
		},
	},
});
