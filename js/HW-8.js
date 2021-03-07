import gallary from "../gallery-items.js"

const galleryListRef = document.querySelector('.gallery.js-gallery')
const gallaryMarkup = createGallaryMarkup(gallary)
galleryListRef.insertAdjacentHTML('beforeend', gallaryMarkup)

galleryListRef.addEventListener('сlick', onGallatyItemClick)

function createGallaryMarkup (gallary) {
  return gallary.map(({preview, original, description}) => {
    return`
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
    `
  }).join('')
}

function onGallatyItemClick (e) {
  e.preventDefault();
  console.log(e.target);
}


// {
//   preview:
//     'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//   original:
//     'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//   description: 'Hokkaido Flower',
// },