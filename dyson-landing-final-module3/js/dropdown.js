const menu = document.querySelector(".offers__dropdown-menu");
const dropdown = document.querySelector(".offers__dropdown-btn-wrapper");

menu.addEventListener("click", (e) => {
	const item = e.target.closest(".offers__dropdown-item");
	if (!item) return;

	menu
		.querySelectorAll(".offers__dropdown-item")
		.forEach((el) => el.classList.remove("active"));

	item.classList.add("active");
});

dropdown.addEventListener("click", (e) => {
	const dropBtn = e.target.closest(".offers__dropdown-btn-wrapper");
	menu.classList.toggle("active");
	dropdown.classList.toggle("active");
});

document.addEventListener("click", (e) => {
	const isClickInside = dropdown.contains(e.target) || menu.contains(e.target);

	if (!isClickInside) {
		dropdown.classList.remove("active");
		menu.classList.remove("active");
	}
});
