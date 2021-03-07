import gallary from '../gallery-items.js';

//1. Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryListRef = document.querySelector('.gallery.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImgRef = document.querySelector('.lightbox__image');
const lightboxButtonRef = document.querySelector('.lightbox__button');
const gallaryMarkup = createGallaryMarkup(gallary);
galleryListRef.insertAdjacentHTML('beforeend', gallaryMarkup);

function createGallaryMarkup(gallary) {
  return gallary
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    })
    .join('');
}

//2. Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

galleryListRef.addEventListener('click', onGalleryContainerClick);
function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const originalImg = evt.target.dataset.source;
  console.log(evt.target.classList);

  //3. Открытие модального окна по клику на элементе галереи.
  //4. Подмена значения атрибута src элемента img.lightbox__image.
  lightboxRef.classList.add('is-open');
  lightboxImgRef.src = originalImg;
}

// 5. Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// 6. Очистка значения атрибута src элемента img.lightbox__image.
// Это необходимо для того, чтобы при следующем открытии модального окна,
// пока грузится изображение, мы не видели предыдущее.

lightboxRef.addEventListener('click', onLightboxButtonClick);

function onLightboxButtonClick(evt) {
  console.log(evt.target);
  if (!evt.target.classList.contains('lightbox__button')) {
    return;
  }
  lightboxRef.classList.remove('is-open');
  lightboxImgRef.src = '';
}

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
