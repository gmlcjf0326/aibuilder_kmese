// assets/js/main.js

document.addEventListener("DOMContentLoaded", function () {
	// 스와이퍼 슬라이더 초기화
	const heroSwiper = new Swiper("#hero-slider", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	// AOS 애니메이션 초기화
	AOS.init({
		duration: 1000,
		once: true,
		offset: 100,
	});

	// 모바일 메뉴 토글
	const menuToggle = document.querySelector(".menu-toggle");
	const navList = document.querySelector(".nav-list");

	if (menuToggle && navList) {
		menuToggle.addEventListener("click", function () {
			this.classList.toggle("active");
			navList.classList.toggle("active");
		});
	}

	// 서비스 탭 기능
	const tabBtns = document.querySelectorAll(".tab-btn");
	const tabPanes = document.querySelectorAll(".tab-pane");

	if (tabBtns.length && tabPanes.length) {
		tabBtns.forEach((btn) => {
			btn.addEventListener("click", function () {
				// 모든 탭 버튼에서 active 클래스 제거
				tabBtns.forEach((btn) => btn.classList.remove("active"));
				// 현재 클릭한 버튼에 active 클래스 추가
				this.classList.add("active");

				// 모든 탭 패널에서 active 클래스 제거
				tabPanes.forEach((pane) => pane.classList.remove("active"));
				// 현재 클릭한 버튼에 해당하는 탭 패널에 active 클래스 추가
				const tabId = this.getAttribute("data-tab");
				document.getElementById(tabId).classList.add("active");
			});
		});
	}

	// 전시회 필터링 기능
	const filterBtns = document.querySelectorAll(".filter-btn");
	const exhibitionCards = document.querySelectorAll(".exhibition-card");

	if (filterBtns.length && exhibitionCards.length) {
		filterBtns.forEach((btn) => {
			btn.addEventListener("click", function () {
				// 모든 필터 버튼에서 active 클래스 제거
				filterBtns.forEach((btn) => btn.classList.remove("active"));
				// 현재 클릭한 버튼에 active 클래스 추가
				this.classList.add("active");

				const filterValue = this.getAttribute("data-filter");

				exhibitionCards.forEach((card) => {
					if (
						filterValue === "all" ||
						card.getAttribute("data-category") === filterValue
					) {
						card.style.display = "block";
						// 등장 애니메이션 재실행을 위해 AOS 속성 재설정
						setTimeout(() => {
							AOS.refresh();
						}, 10);
					} else {
						card.style.display = "none";
					}
				});
			});
		});
	}

	// 헤더 스크롤 효과
	const header = document.getElementById("site-header");
	let lastScrollTop = 0;

	window.addEventListener("scroll", function () {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		if (scrollTop > 100) {
			header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
			header.style.height = "70px";
		} else {
			header.style.boxShadow = "none";
			header.style.height = "80px";
		}

		lastScrollTop = scrollTop;
	});

	// 뉴스레터 폼 제출
	const newsletterForm = document.querySelector(".newsletter-form");

	if (newsletterForm) {
		newsletterForm.addEventListener("submit", function (e) {
			e.preventDefault();

			const emailInput = this.querySelector('input[type="email"]');
			const email = emailInput.value.trim();

			if (email) {
				// 여기에 실제 폼 제출 로직 구현
				alert(
					"구독해 주셔서 감사합니다! " +
						email +
						" 주소로 최신 소식을 보내드리겠습니다."
				);
				emailInput.value = "";
			} else {
				alert("이메일 주소를 입력해주세요.");
			}
		});
	}
});
