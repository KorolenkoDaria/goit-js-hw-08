// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));


function createMarkup (arr) {
    return arr.map(({preview, original, description}) =>
     `<li class = "gallery__item">
         <a class = "gallery__link" href = "${original}">
         <img class = "gallery__image"
            src = "${preview}"
            data-source = "${original}"
            alt = "${description}"/>
         </a>
     </li>`
     ).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captions: true,
    captionDelay: 250,
    captionsData: 'alt'
});
// console.log(lightbox);
console.log(galleryItems);
