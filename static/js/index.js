import PhotoSwipeLightbox from "/static/js/photoswipe-lightbox.esm.js";

const lightbox = new PhotoSwipeLightbox({
  gallery: '#photogallery',
  children: 'a',
  pswpModule: () => import("/static/js/photoswipe.esm.js"),
});

lightbox.init();