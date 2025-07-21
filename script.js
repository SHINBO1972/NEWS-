// HTML 문서가 모두 로드된 후, 아래의 모든 코드를 딱 한 번 실행합니다.
document.addEventListener('DOMContentLoaded', function() {

    // --- 햄버거 메뉴 클릭 기능 (새로 추가된 부분) ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const mainNav = document.getElementById('main-nav');

    if (hamburgerButton && mainNav) {
        hamburgerButton.addEventListener('click', function() {
            mainNav.classList.toggle('is-active');
        });
    }

    // --- 아래는 원래 있던 코드입니다 (수정하지 마세요) ---

    // Smooth scroll for navigation links
    document.querySelectorAll('header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animation for sections
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});```

### **무엇이 다른가요?**

*   **중복 제거:** 문제가 되었던 똑같은 "햄버거 메뉴 기능" 코드를 하나로 합쳐서 깔끔하게 정리했습니다.
*   **구조 유지:** 사용자님의 원래 기능(부드러운 스크롤, 스크롤 애니메이션)은 그대로 유지했습니다.

이제 이 코드로 교체하시면, 중복된 코드 없이 깔끔하게 모든 기능이 작동할 것입니다.
