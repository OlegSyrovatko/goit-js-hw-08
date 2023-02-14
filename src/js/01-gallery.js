
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

function selectImg(event) { 

  if (event.target.nodeName !== "IMG") {
      return;
  }

    event.preventDefault();
    event.target.src = event.target.dataset.source; 
    const selectedImg = event.target.src; 

//   const gallery = new SimpleLightbox(`.gallery a`, {
//     captionsData: 'alt',
//     captionDelay: '250',
//   });
//   gallery.on('show.simplelightbox');
//   const gallery = new SimpleLightbox(`.gallery a`, {
//     captionsData: 'alt',
//     captionDelay: '250',
//   });
//   gallery.on('show.simplelightbox');
//   e.preventDefault();
//   document.addEventListener('keydown', closeModalOnEscape);

//   function closeModalOnEscape(e) {
//     if (e.key === 'Escape') {
//       document.removeEventListener('keydown', closeModalOnEscape);
//       gallery.on('close.simplelightbox');
//     }
//   }

    const instance = basicLightbox.create(`<img width="1280" height="871" src="${selectedImg}">`);
    instance.show()

     document.addEventListener("keydown", event => {
        const visible = basicLightbox.visible();
        if (event.key === "Escape" && visible === true) {
            instance.close();
         }

     }, {once: true});
    
}





