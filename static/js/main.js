// main.js — students will add JavaScript here as features are built

// ------------------------------------------------------------------ //
// "See how it works" modal                                            //
// ------------------------------------------------------------------ //

(function () {
    const trigger = document.getElementById('btn-how-works');
    if (!trigger) return; // only runs on pages that have the modal

    const modal   = document.getElementById('how-modal');
    const closeBtn = document.getElementById('modal-close');
    const iframe  = document.getElementById('how-video');
    const videoSrc = iframe.dataset.src;

    function openModal() {
        iframe.src = videoSrc;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        iframe.src = '';                      // stops the video
        document.body.style.overflow = '';
    }

    trigger.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();  // click outside the box
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
}());
