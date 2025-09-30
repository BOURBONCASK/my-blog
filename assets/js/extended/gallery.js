(function () {
  const gallery = document.querySelector('[data-gallery]');
  if (!gallery) return;

  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  const lightboxImage = lightbox.querySelector('.gallery-lightbox__image');
  const lightboxCaption = lightbox.querySelector('.gallery-lightbox__caption');
  const closeButton = lightbox.querySelector('.gallery-lightbox__close');
  const backdrop = lightbox.querySelector('.gallery-lightbox__backdrop');
  const galleryButtons = Array.from(
    gallery.querySelectorAll('.gallery-item__button')
  );

  if (!galleryButtons.length) return;

  let activeIndex = -1;
  let previousFocus = null;
  const TRANSITION_MS = 180;

  function setLightboxContent(button) {
    const { src, alt, caption } = button.dataset;
    if (!src) return false;

    lightboxImage.src = src;
    lightboxImage.alt = alt || '';

    if (caption) {
      lightboxCaption.textContent = caption;
      lightboxCaption.hidden = false;
    } else {
      lightboxCaption.textContent = '';
      lightboxCaption.hidden = true;
    }

    return true;
  }

  function openLightbox(index) {
    const button = galleryButtons[index];
    if (!button) return;

    const didUpdate = setLightboxContent(button);
    if (!didUpdate) return;

    activeIndex = index;
    lightbox.removeAttribute('hidden');
    requestAnimationFrame(() => {
      lightbox.classList.add('is-visible');
      document.body.classList.add('no-scroll');
      closeButton?.focus({ preventScroll: true });
    });
  }

  function closeLightbox() {
    lightbox.classList.remove('is-visible');
    document.body.classList.remove('no-scroll');
    window.setTimeout(() => {
      lightbox.setAttribute('hidden', '');
      lightboxImage.src = '';
      lightboxImage.alt = '';
      activeIndex = -1;
      previousFocus?.focus({ preventScroll: true });
      previousFocus = null;
    }, TRANSITION_MS);
  }

  function stepLightbox(delta) {
    if (activeIndex === -1) return;
    const nextIndex =
      (activeIndex + delta + galleryButtons.length) % galleryButtons.length;
    openLightbox(nextIndex);
  }

  gallery.addEventListener('click', (event) => {
    const button = event.target.closest('.gallery-item__button');
    if (!button) return;
    const index = galleryButtons.indexOf(button);
    if (index === -1) return;

    previousFocus = button;
    event.preventDefault();
    openLightbox(index);
  });

  [closeButton, backdrop].forEach((element) => {
    if (!element) return;
    element.addEventListener('click', closeLightbox);
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('is-visible')) return;

    switch (event.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowRight':
        event.preventDefault();
        stepLightbox(1);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        stepLightbox(-1);
        break;
      default:
        break;
    }
  });
})();
