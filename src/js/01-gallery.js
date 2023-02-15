import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


const gallery = document.querySelector(".gallery");
const images = galleryItems.map(({ preview, original, description }) => {

  const imageItem = `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}" 
          alt="${description}"
        />
      </a>
    </div>`;
  return imageItem;
}).join("");


gallery.innerHTML = images;
gallery.addEventListener("click", selectImg);

const instance = new SimpleLightbox('.gallery a', { captions: true, captionDelay: 250, captionsData: "alt" });

function selectImg(event) {

  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();
  instance.on('show.simplelightbox');
}





