// assets/js/dummy-images.js
document.addEventListener("DOMContentLoaded", function () {
	// 로고 이미지 대체 (SVG는 그대로 유지)
	replaceLogoImages();

	// 슬라이더 배경 이미지를 배경색으로 대체
	replaceSliderWithColors();

	// 전시회 카드 이미지를 배경색으로 대체
	replaceExhibitionWithColors();

	// CEO 이미지를 배경색으로 대체
	replaceCeoWithColor();
});

// 로고 이미지 대체 (SVG 형식이므로 유지)
function replaceLogoImages() {
	// 메인 로고 (빨간색)
	const mainLogoSrc =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 50'%3E%3Ctext x='10' y='35' fill='%23e72d2e' font-family='Arial' font-weight='bold' font-size='35'%3EK.messe%3C/text%3E%3C/svg%3E";

	// 흰색 로고 (푸터용)
	const whiteLogoSrc =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 50'%3E%3Ctext x='10' y='35' fill='white' font-family='Arial' font-weight='bold' font-size='35'%3EK.messe%3C/text%3E%3C/svg%3E";

	// 회사 CI
	const ciLogoSrc =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='10' y='50' fill='%23e72d2e' font-family='Arial' font-weight='bold' font-size='40'%3EK.messe%3C/text%3E%3Ctext x='10' y='80' fill='%23333' font-family='Arial' font-size='15'%3E해외 전시회 전문 여행사%3C/text%3E%3C/svg%3E";

	// 이미지 경로 변경
	document.querySelectorAll('img[src*="kmesse-logo.svg"]').forEach((img) => {
		img.src = mainLogoSrc;
	});

	document
		.querySelectorAll('img[src*="kmesse-logo-white.svg"]')
		.forEach((img) => {
			img.src = whiteLogoSrc;
		});

	document.querySelectorAll('img[src*="kmesse-ci.svg"]').forEach((img) => {
		img.src = ciLogoSrc;
	});
}

// 슬라이더 배경 이미지를 배경색으로 대체
function replaceSliderWithColors() {
	// 다양한 배경색 정의
	const bgColors = [
		"#3498db", // 파란색
		"#2ecc71", // 녹색
		"#9b59b6", // 보라색
		"#f39c12", // 주황색
		"#1abc9c", // 청록색
	];

	document.querySelectorAll(".slide-bg").forEach((slide, index) => {
		// 배경 이미지 제거하고 색상 적용
		slide.style.backgroundImage = "none";
		slide.style.backgroundColor = bgColors[index % bgColors.length];

		// 배경색 위에 텍스트가 잘 보이도록 약간의 그라디언트 효과 추가
		slide.style.backgroundImage =
			"linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2))";
	});
}

// 전시회 카드 이미지를 배경색으로 대체
function replaceExhibitionWithColors() {
	// 다양한 배경색 정의 (각 산업/카테고리별로 다른 색상)
	const categoryColors = [
		"#e74c3c", // 식품 (빨간색)
		"#3498db", // 산업 기술 (파란색)
		"#2ecc71", // 가전 & 테크 (녹색)
		"#9b59b6", // 의료 (보라색)
		"#f39c12", // 플라스틱 (주황색)
		"#1abc9c", // 소매 (청록색)
		"#d35400", // 건설 (갈색)
		"#34495e", // IT & 테크 (남색)
	];

	document
		.querySelectorAll(".exhibition-card .card-image img")
		.forEach((img, index) => {
			// 이미지 태그를 div로 교체하기 위한 준비
			const parent = img.parentElement;
			const categoryColor = categoryColors[index % categoryColors.length];

			// 새로운 div 생성하여 배경색 적용
			const colorDiv = document.createElement("div");
			colorDiv.style.backgroundColor = categoryColor;
			colorDiv.style.width = "100%";
			colorDiv.style.height = "200px"; // 적절한 높이 설정
			colorDiv.style.display = "flex";
			colorDiv.style.alignItems = "center";
			colorDiv.style.justifyContent = "center";

			// 카테고리 이름 표시 (옵션)
			const categoryText =
				parent.parentElement.querySelector(".card-category")?.textContent || "";
			if (categoryText) {
				const textElement = document.createElement("span");
				textElement.textContent = categoryText;
				textElement.style.color = "white";
				textElement.style.fontWeight = "bold";
				textElement.style.fontSize = "18px";
				colorDiv.appendChild(textElement);
			}

			// 원래 이미지 교체
			parent.replaceChild(colorDiv, img);

			// 원래 이미지에 있던 날짜 요소가 있다면 새 div에 추가
			const dateElement = parent.querySelector(".card-date");
			if (dateElement) {
				colorDiv.appendChild(dateElement);
			}
		});
}

// CEO 이미지를 배경색으로 대체
function replaceCeoWithColor() {
	document
		.querySelectorAll('.greeting-image img, img[src*="ceo.jpg"]')
		.forEach((img) => {
			// 이미지 대신 색상 블록으로 대체
			const parent = img.parentElement;

			// 새 div 생성
			const colorDiv = document.createElement("div");
			colorDiv.style.backgroundColor = "#e72d2e"; // 회사 CI 색상과 동일하게
			colorDiv.style.width = "100%";
			colorDiv.style.height = "400px"; // 적절한 높이
			colorDiv.style.display = "flex";
			colorDiv.style.alignItems = "center";
			colorDiv.style.justifyContent = "center";

			// CEO 표시
			const textElement = document.createElement("span");
			textElement.textContent = "CEO 김숙희";
			textElement.style.color = "white";
			textElement.style.fontWeight = "bold";
			textElement.style.fontSize = "24px";
			colorDiv.appendChild(textElement);

			// 이미지 교체
			parent.replaceChild(colorDiv, img);
		});
}
