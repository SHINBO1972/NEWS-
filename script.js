document.addEventListener('DOMContentLoaded', function() {

    // --- 햄버거 메뉴 기능 ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const mainNav = document.getElementById('main-nav');

    if (hamburgerButton && mainNav) {
        hamburgerButton.addEventListener('click', function() {
            mainNav.classList.toggle('is-active');
        });
    }

    // --- 메뉴 링크 클릭 시 부드러운 스크롤 기능 ---
    document.querySelectorAll('#main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // 모바일 메뉴가 열려 있으면 메뉴 닫기
                if (mainNav.classList.contains('is-active')) {
                    mainNav.classList.remove('is-active');
                }
                
                // 해당 섹션으로 스크롤
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 스크롤 시 섹션 나타나는 애니메이션 (기존 코드) ---
    // 이 부분은 현재 문제와 관련 없지만 그대로 둡니다.
    const sections = document.querySelectorAll('.section');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
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
});
