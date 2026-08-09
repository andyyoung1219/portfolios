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

// 點擊成果標籤時顯示對應的獎狀或參賽證明
const certificateTriggers = document.querySelectorAll('.certificate-trigger');
const certificateModal = document.querySelector('.certificate-modal');
const certificateClose = document.querySelector('.certificate-modal__close');
const certificateImage = certificateModal.querySelector('img');
let activeCertificateTrigger = null;

function openCertificate(event) {
    activeCertificateTrigger = event.currentTarget;
    const imageAlt = activeCertificateTrigger.dataset.certificateAlt;

    certificateImage.src = activeCertificateTrigger.dataset.certificateSrc;
    certificateImage.alt = imageAlt;
    certificateModal.setAttribute('aria-label', imageAlt);
    certificateModal.hidden = false;
    document.body.classList.add('modal-open');
    certificateClose.focus();
}

function closeCertificate() {
    certificateModal.hidden = true;
    document.body.classList.remove('modal-open');
    activeCertificateTrigger?.focus();
}

certificateTriggers.forEach((trigger) => {
    trigger.addEventListener('click', openCertificate);
});
certificateClose.addEventListener('click', closeCertificate);

certificateModal.addEventListener('click', (event) => {
    if (event.target === certificateModal) {
        closeCertificate();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !certificateModal.hidden) {
        closeCertificate();
    }
});
