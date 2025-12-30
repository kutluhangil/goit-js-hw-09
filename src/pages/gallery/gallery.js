import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import images from '../../data.js';

console.log('Gallery script loaded');
console.log('Images data:', images);

const galleryContainer = document.querySelector('.gallery');
console.log('Gallery container:', galleryContainer);

if (!galleryContainer) {
  console.error('Gallery container not found!');
} else {
  const markup = images
    .map(
      ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join('');

  console.log('Markup created, length:', markup.length);
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  console.log('Markup inserted into DOM');

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
  });
  console.log('SimpleLightbox initialized');
}
