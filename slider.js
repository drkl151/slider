const wrapperSlider = document.querySelector(".wrapper-slider");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const slider = document.querySelector(".slider");

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    changeSlide("up");
  } else if (e.key === 'ArrowDown') {
    changeSlide("down");
  }
})

slider.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
  changeSlide("up");
});

downBtn.addEventListener('click', () => {
  changeSlide("down");
});


function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = wrapperSlider.clientHeight

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  slider.style.transform = `translateY(${activeSlideIndex * height}px)`;
}