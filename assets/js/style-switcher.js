document.addEventListener("DOMContentLoaded", function () {
	const themeSelector = document.getElementById("theme-selector");
	const themeStyle = document.getElementById("theme-style");

	// 로컬 스토리지에서 저장된 스타일 불러오기
	const savedStyle = localStorage.getItem("kmesse-style");
	if (savedStyle) {
		themeStyle.href = "assets/css/styles/" + savedStyle;
		// 경로에 about이 포함되어 있는지 확인 (상세 페이지인 경우)
		if (window.location.pathname.includes("about")) {
			themeStyle.href = "../assets/css/styles/" + savedStyle;
		}

		// 셀렉트 박스 선택 값 설정
		if (themeSelector) {
			themeSelector.value = savedStyle;
		}
	}

	// 스타일 변경 이벤트 리스너
	if (themeSelector) {
		themeSelector.addEventListener("change", function () {
			const selectedStyle = this.value;

			// 경로에 about이 포함되어 있는지 확인 (상세 페이지인 경우)
			if (window.location.pathname.includes("about")) {
				themeStyle.href = "../assets/css/styles/" + selectedStyle;
			} else {
				themeStyle.href = "assets/css/styles/" + selectedStyle;
			}

			// 로컬 스토리지에 선택된 스타일 저장
			localStorage.setItem("kmesse-style", selectedStyle);
		});
	}
});
