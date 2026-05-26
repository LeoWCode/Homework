// offers section, text accent show-more button
const tags = document.querySelectorAll(".offers__tags-item.is-hidden");
const showMore = document.querySelector(".offers__tags .btn-text-accent");

showMore.addEventListener("click", () => {
	showMore.classList.toggle("show");

	if (showMore.classList.contains("show")) {
		showMore.textContent = "Скрыть";
		tags.forEach((tag) => tag.classList.remove("is-hidden"));
	} else {
		showMore.textContent = "Показать еще";
		tags.forEach((tag) => tag.classList.add("is-hidden"));
	}
});

// reviews  show-more button

const showMoreReviews = document.querySelector(
	".reviews__footer .btn-show-more",
);
const comments = document.querySelectorAll(".reviews__item.is-hidden");
const btnTextReviews = showMoreReviews.querySelector(".btn-show-more__text");

showMoreReviews.addEventListener("click", () => {
	showMoreReviews.classList.toggle("show");

	if (showMoreReviews.classList.contains("show")) {
		btnTextReviews.textContent = "Скрыть";

		comments.forEach((comment) => {
			comment.classList.remove("is-hidden");
			comment.classList.add("is-showing");

			comment.addEventListener(
				"animationend",
				() => {
					comment.classList.remove("is-showing");
				},
				{ once: true },
			);
		});
	} else {
		btnTextReviews.textContent = "Показать еще";
		comments.forEach((comment) => comment.classList.add("is-hidden"));
	}
});

// news show-more button

const showMoreNews = document.querySelector(".news__inner .btn-show-more");
const news = document.querySelector(".news__wrapper");
const btnTextNews = showMoreNews.querySelector(".btn-show-more__text");

showMoreNews.addEventListener("click", () => {
	news.classList.toggle("news--compact");
	showMoreNews.classList.toggle("active"); // для ротации стрелки
	if (!news.classList.contains("news--compact")) {
		btnTextNews.textContent = "Скрыть";
	} else {
		btnTextNews.textContent = "Показать ещё";
	}
});

// 	comments.forEach((comment) => {
// 		comment.classList.remove("is-hidden");
// 		comment.classList.add("is-showing");

// 		comment.addEventListener(
// 			"animationend",
// 			() => {
// 				comment.classList.remove("is-showing");
// 			},
// 			{ once: true },
// 		);
// 	});
