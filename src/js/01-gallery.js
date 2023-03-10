// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector ('.gallery');
const galleryCards = createGalleryItem (galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, galleryCards)

function createGalleryItem (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
};
console.log(galleryItems);

new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250
});

