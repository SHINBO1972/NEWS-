// HTML 문서가 모두 로드된 후, 아래의 모든 코드를 딱 한 번 실행합니다.
document.addEventListener('DOMContentLoaded', function() {

    // --- 햄버거 메뉴 기능 ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const mainNav = document.getElementById('main-nav');

    // 햄버거 버튼과 메뉴가 실제로 존재할 때만 아래 코드를 실행합니다. (오류 방지)
    if (hamburgerButton && mainNav) {
        hamburgerButton.addEventListener('click', function() {
            // 햄버거 버튼 클릭 시, 메뉴에 is-active 클래스를 추가하거나 제거합니다.
            mainNav.classList.toggle('is-active');
        });
    }

    // --- 메뉴 링크 클릭 시 부드러운 스크롤 기능 ---
    // 모든 메뉴 링크(<a>)를 찾아서 각각 이벤트를 추가합니다.
    document.querySelectorAll('header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // 링크의 기본 동작(페이지 이동 등)을 막습니다.
            e.preventDefault();

            // 만약 모바일 메뉴가 열려 있는 상태에서 링크를 클릭했다면,
            if (mainNav.classList.contains('is-active')) {
                // 메뉴를 먼저 닫아줍니다.
                mainNav.classList.remove('is-active');
            }
            
            // 링크의 href 속성에 적힌 ID를 가진 섹션으로 부드럽게 스크롤합니다.
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- 스크롤 시 섹션 나타나는 애니메이션 기능 ---
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 섹션이 화면에 10% 이상 보이면
            if (entry.isIntersecting) {
                // active 클래스를 추가해서 애니메이션을 발동시킵니다.
                entry.target.classList.add('active');
                // 애니메이션이 한 번 실행되면 더 이상 관찰하지 않습니다.
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 모든 섹션을 관찰 대상으로 등록합니다.
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
