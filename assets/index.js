import PhotoSwipeLightbox from "/assets/photoswipe-lightbox.esm.js";

const lightbox = new PhotoSwipeLightbox({
  gallery: '#photogallery',
  children: 'a',
  pswpModule: () => import("/assets/photoswipe.esm.js"),
});

lightbox.init();