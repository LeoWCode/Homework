const list = document.querySelector(".reviews__list");

list.addEventListener("click", (e) => {
	const showMorePhoto = e.target.closest(".reviews__show-photo");
	if (!showMorePhoto) return;

	const item = showMorePhoto.closest(".reviews__item");
	item.classList.toggle("active");
	const isOpening = !item.classList.contains("active");

	if (item.classList.contains("active")) {
		showMorePhoto.textContent = "Скрыть";
	} else {
		showMorePhoto.textContent = "Смотреть все фото";
	}

	if (isOpening) {
		const hiddenPhotos = item.querySelectorAll(".js-lightbox.is-hidden");

		hiddenPhotos.forEach((photo) => {
			photo.classList.add("is-animated");

			photo.addEventListener(
				"animationend",
				() => {
					photo.classList.remove("is-animated");
				},
				{ once: true },
			);
		});
	}
});
