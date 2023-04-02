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

const formBox= document.querySelector(".login-box");
const overlay = document.querySelector(".overlay");

const formBtn = document.querySelector(".s__btn");
const close = document.querySelector(".x");
const mainBtn = document.querySelectorAll("button");

formBox.remove();
overlay.remove();

mainBtn.forEach((e)=>{
  e.addEventListener("click",()=>{
    document.body.style.overflow="hidden"
    document.body.append(overlay)
    document.body.append(formBox)
  })
})



close.addEventListener("click", ()=>{
  document.body.style.overflow="visible"
  formBox.remove();
  overlay.remove();
})