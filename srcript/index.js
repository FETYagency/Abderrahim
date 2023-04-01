const imageGalleryContainer = document.querySelector('.gallery');
const prevButton = document.querySelector('.arrow__left');
const nextButton = document.querySelector('.arrow__right');

prevButton.addEventListener('click', () => {
  // Scroll the container to the left
  imageGalleryContainer.scrollLeft -= 300;
});

nextButton.addEventListener('click', () => {
  // Scroll the container to the right
  imageGalleryContainer.scrollLeft += 300;
});

const select = document.querySelectorAll(".Select");

function notif(e){
  e.addEventListener("click", ()=>{
    alert(`this is just a prototype project will be done after agreement`)
  })
}

select.forEach(notif);