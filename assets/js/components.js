// assets/js/components.js
document.addEventListener("DOMContentLoaded", function () {
	// 현재 경로에 따라 기본 경로 설정
	const basePath = window.location.pathname.includes("/about/") ? "../" : "";

	// 헤더 로드
	fetch(`${basePath}components/header.html`)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("header-placeholder").innerHTML = data;

			// 현재 페이지에 따라 활성 링크 설정
			const currentPath = window.location.pathname;
			if (currentPath.includes("about")) {
				document.getElementById("about-link").classList.add("active");
			} else {
				// 메인 페이지에서는 기본적으로 첫 번째 링크 활성화
				document.getElementById("home-link").classList.add("active");
			}

			// 헤더 로드 후 이벤트 리스너 다시 바인딩
			const menuToggle = document.querySelector(".menu-toggle");
			const navList = document.querySelector(".nav-list");

			if (menuToggle && navList) {
				menuToggle.addEventListener("click", function () {
					this.classList.toggle("active");
					navList.classList.toggle("active");
				});
			}

			// 스타일 스위처 초기화
			initStyleSwitcher();
		})
		.catch((error) => {
			console.error("헤더 로드 오류:", error);
		});

	// 푸터 로드
	fetch(`${basePath}components/footer.html`)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("footer-placeholder").innerHTML = data;
		})
		.catch((error) => {
			console.error("푸터 로드 오류:", error);
		});
});

// 스타일 스위처 초기화 함수
function initStyleSwitcher() {
	const themeSelector = document.getElementById("theme-selector");
	const themeStyle = document.getElementById("theme-style");

	if (!themeSelector || !themeStyle) return;

	// 로컬 스토리지에서 저장된 스타일 불러오기
	const savedStyle = localStorage.getItem("kmesse-style");
	if (savedStyle) {
		// 경로에 about이 포함되어 있는지 확인 (상세 페이지인 경우)
		const basePath = window.location.pathname.includes("/about/") ? "../" : "";
		themeStyle.href = `${basePath}assets/css/styles/${savedStyle}`;

		// 셀렉트 박스 선택 값 설정
		themeSelector.value = savedStyle;
	}

	// 스타일 변경 이벤트 리스너
	themeSelector.addEventListener("change", function () {
		const selectedStyle = this.value;
		const basePath = window.location.pathname.includes("/about/") ? "../" : "";
		themeStyle.href = `${basePath}assets/css/styles/${selectedStyle}`;

		// 로컬 스토리지에 선택된 스타일 저장
		localStorage.setItem("kmesse-style", selectedStyle);
	});
}
