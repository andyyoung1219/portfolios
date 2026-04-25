// 點擊導覽列連結時，讓頁面平滑捲動到對應區塊
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
